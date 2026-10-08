import gsap from "gsap";

/**
 * Idle blueprint choreography: gentle node pulses, extremely slow grid drift
 * and a few travelling activity pulses. Disabled under reduced motion.
 */
export function startBlueprintIdle(root: SVGSVGElement) {
  const q = gsap.utils.selector(root);
  const ctx = gsap.context(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tweens: gsap.core.Tween[] = [];

      q("[data-hero-node] circle[data-halo]").forEach((halo, i) => {
        tweens.push(
          gsap.to(halo, {
            opacity: 0.32,
            scale: 1.22,
            transformOrigin: "center",
            duration: 1.6 + (i % 4) * 0.35,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: (i % 6) * 0.4,
          }),
        );
      });

      tweens.push(
        gsap.to(root.querySelector("[data-hero-grid-drift]"), {
          xPercent: 1.2,
          yPercent: -1.2,
          duration: 18,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        }),
      );

      q("[data-hero-pulse]").forEach((pulse, i) => {
        const path = pulse.getAttribute("data-path-id");

        const target = path ? root.querySelector<SVGPathElement>(`#${path}`) : null;
        if (!target) return;
        const len = target.getTotalLength();
        tweens.push(
          gsap.fromTo(
            target,
            { strokeDasharray: `${len * 0.12} ${len}`, strokeDashoffset: len },
            {
              strokeDashoffset: -len * 0.12,
              duration: 2.6,
              repeat: -1,
              repeatDelay: 2.2 + i * 0.9,
              delay: i * 1.1,
              ease: "power1.inOut",
            },
          ),
        );
      });

      return () => tweens.forEach((t) => t.kill());
    });

    return () => mm.revert();
  }, root);

  return () => ctx.revert();
}
