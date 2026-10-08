import gsap from "gsap";

/**
 * Hero entrance timeline (~1500ms). Targets are resolved by data attribute
 * inside the hero root so JSX stays free of animation logic.
 */
export function playHeroEntrance(root: HTMLElement) {
  const q = gsap.utils.selector(root);
  const ctx = gsap.context(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(
        q(
          "[data-hero-grid], [data-hero-eyebrow], [data-hero-name-line], [data-hero-role], [data-hero-desc], [data-hero-cta], [data-hero-node], [data-hero-edge]",
        ),
        { opacity: 1, y: 0, clipPath: "none", scale: 1, strokeDashoffset: 0 },
      );
      gsap.fromTo(root, { opacity: 0 }, { opacity: 1, duration: 0.3 });
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        q("[data-hero-grid]"),
        { opacity: 0 },
        { opacity: 1, duration: 0.9 },
        0.1,
      )
        .fromTo(
          q("[data-hero-eyebrow]"),
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.2,
        )
        .fromTo(
          q("[data-hero-name-line]"),
          { yPercent: 110 },
          { yPercent: 0, duration: 0.9, ease: "power4.out", stagger: 0.09 },
          0.3,
        )
        .fromTo(
          q("[data-hero-role]"),
          { opacity: 0, y: 12, filter: "blur(6px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.6 },
          0.5,
        )
        .fromTo(
          q("[data-hero-desc]"),
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
          0.65,
        )
        .fromTo(
          q("[data-hero-cta]"),
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.09 },
          0.8,
        )
        .fromTo(
          q("[data-hero-node]"),
          { opacity: 0, scale: 0.4 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "back.out(2)",
            stagger: { each: 0.04, from: "center" },
          },
          0.9,
        )
        .fromTo(
          q("[data-hero-edge]"),
          { strokeDashoffset: (i, el: Element) => (el as SVGPathElement).getTotalLength?.() ?? 100 },
          { strokeDashoffset: 0, duration: 0.9, stagger: 0.03, ease: "power2.inOut" },
          1.1,
        );

      return () => tl.kill();
    });

    return () => mm.revert();
  }, root);

  return () => ctx.revert();
}
