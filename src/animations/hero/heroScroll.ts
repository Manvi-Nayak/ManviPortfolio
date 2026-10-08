import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-driven hero transformation: content lifts and scales down slightly
 * while the blueprint gains presence, so the workspace feels like it is
 * morphing rather than scrolling away. Disabled under reduced motion.
 */
export function initHeroScroll(root: HTMLElement) {
  const ctx = gsap.context(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const content = root.querySelector("[data-hero-content]");
      const visual = root.querySelector("[data-hero-visual]");
      if (!content || !visual) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      tl.to(content, { y: -60, scale: 0.94, opacity: 0.35, ease: "none" }, 0).to(
        visual,
        { y: -20, scale: 1.06, opacity: 1, ease: "none" },
        0,
      );

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    });

    return () => mm.revert();
  }, root);

  return () => ctx.revert();
}
