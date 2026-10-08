import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import type { MilestoneId } from "@/data/journey";

gsap.registerPlugin(ScrollTrigger);

interface JourneyScrollOptions {
  onActive: (id: MilestoneId) => void;
}

/**
 * Journey choreography:
 *  - entrance reveal (~1000ms): title -> path -> first chapter
 *  - scrub-driven path drawing (glowing progress along the SVG route)
 *  - per-chapter activation triggers (chapters brighten as they arrive)
 * Reduced motion keeps every element visible and drops the scrubbing.
 */
export function initJourney(root: HTMLElement, { onActive }: JourneyScrollOptions) {
  const q = gsap.utils.selector(root);

  const ctx = gsap.context(() => {
    const mm = gsap.matchMedia();

    const chapters = q("[data-journey-chapter]") as HTMLElement[];

    // Activation is cheap and infrequent: it only fires on chapter boundaries.
    chapters.forEach((chapter) => {
      const id = chapter.dataset["journeyChapter"] as MilestoneId | undefined;
      if (!id) return;
      ScrollTrigger.create({
        trigger: chapter,
        start: "top 65%",
        end: "bottom 45%",
        onToggle: (self) => {
          if (self.isActive) onActive(id);
        },
      });
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(
        q(
          "[data-journey-eyebrow], [data-journey-heading], [data-journey-intro], [data-journey-path], [data-journey-chapter], [data-journey-end]",
        ),
        { opacity: 1, y: 0, filter: "blur(0px)" },
      );
      gsap.set(q("[data-path-progress]"), { strokeDashoffset: 0 });
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        q("[data-journey-eyebrow]"),
        { opacity: 0, y: 12, filter: "blur(6px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.5 },
        0.05,
      )
        .fromTo(
          q("[data-journey-heading]"),
          { opacity: 0, y: 26, filter: "blur(10px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8 },
          0.14,
        )
        .fromTo(
          q("[data-journey-intro]"),
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.34,
        )
        .fromTo(
          q("[data-journey-path]"),
          { opacity: 0, scale: 0.97 },
          { opacity: 1, scale: 1, duration: 0.8 },
          0.4,
        )
        .fromTo(
          q("[data-journey-chapter]")[0] ?? [],
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7 },
          0.6,
        );

      // Chapters after the first reveal as they travel into view.
      const reveals = chapters.slice(1).map((chapter) =>
        gsap.fromTo(
          chapter,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: { trigger: chapter, start: "top 85%", once: true },
          },
        ),
      );

      const end = q("[data-journey-end]")[0];
      const endTween = end
        ? gsap.fromTo(
            end,
            { opacity: 0, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: { trigger: end, start: "top 88%", once: true },
            },
          )
        : null;

      // Glowing path draws in as the visitor travels.
      const lines = q("[data-path-progress]") as unknown as SVGPathElement[];
      const line = lines[0];
      const track = q("[data-journey-track]")[0];
      let draw: gsap.core.Tween | null = null;
      if (line && track) {
        const length = line.getTotalLength();
        gsap.set(lines, { strokeDasharray: length, strokeDashoffset: length });
        draw = gsap.to(lines, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: track,
            start: "top 78%",
            end: "bottom 95%",
            scrub: 0.5,
          },
        });
      }

      // Restrained camera drift on the path column.
      const camera = q("[data-journey-camera]")[0];
      const drift = camera
        ? gsap.to(camera, {
            y: -24,
            ease: "none",
            scrollTrigger: {
              trigger: track ?? root,
              start: "top center",
              end: "bottom center",
              scrub: 0.8,
            },
          })
        : null;

      return () => {
        tl.kill();
        reveals.forEach((t) => {
          t.scrollTrigger?.kill();
          t.kill();
        });
        endTween?.scrollTrigger?.kill();
        endTween?.kill();
        draw?.scrollTrigger?.kill();
        draw?.kill();
        drift?.scrollTrigger?.kill();
        drift?.kill();
      };
    });

    return () => mm.revert();
  }, root);

  return () => ctx.revert();
}