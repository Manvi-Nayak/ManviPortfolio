import gsap from "gsap";

/**
 * About entrance (~1200ms): identity -> education -> game shell ->
 * environment layers -> objects -> title -> counter -> cards.
 */
export function playAboutEntrance(root: HTMLElement) {
  const q = gsap.utils.selector(root);

  const ctx = gsap.context(() => {
    const mm = gsap.matchMedia();

    const all =
      "[data-about-eyebrow], [data-about-heading], [data-about-intro], [data-about-edu], [data-about-game], [data-game-layer], [data-game-object], [data-game-title], [data-game-counter], [data-about-card]";

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(q(all), { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" });
      gsap.fromTo(root, { opacity: 0 }, { opacity: 1, duration: 0.25 });
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        q("[data-about-eyebrow]"),
        { opacity: 0, y: 12, filter: "blur(6px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.5 },
        0.05,
      )
        .fromTo(
          q("[data-about-heading]"),
          { opacity: 0, y: 24, filter: "blur(8px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7 },
          0.12,
        )
        .fromTo(
          q("[data-about-intro]"),
          { opacity: 0, y: 16, filter: "blur(6px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.6, stagger: 0.08 },
          0.28,
        )
        .fromTo(
          q("[data-about-edu]"),
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
          0.44,
        )
        .fromTo(
          q("[data-about-game]"),
          { opacity: 0, scale: 0.96, y: 16 },
          { opacity: 1, scale: 1, y: 0, duration: 0.7 },
          0.3,
        )
        .fromTo(
          q("[data-game-layer]"),
          { opacity: 0 },
          { opacity: 1, duration: 0.6, stagger: 0.08 },
          0.55,
        )
        .fromTo(
          q("[data-game-object]"),
          { opacity: 0, scale: 0.6 },
          { opacity: 1, scale: 1, duration: 0.5, stagger: 0.09, ease: "back.out(1.6)" },
          0.7,
        )
        .fromTo(
          q("[data-game-title]"),
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5 },
          0.95,
        )
        .fromTo(
          q("[data-game-counter]"),
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.45 },
          1.05,
        )
        .fromTo(
          q("[data-about-card]"),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.55, stagger: 0.08 },
          1.0,
        );

      return () => tl.kill();
    });

    return () => mm.revert();
  }, root);

  return () => ctx.revert();
}
