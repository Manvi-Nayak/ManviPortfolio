import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useRef, type PointerEvent } from "react";

import { HeroRole } from "@/components/hero/HeroRole";
import { HERO_COPY } from "@/data/hero";
import { useWorkspaceStore } from "@/store/workspaceStore";

/** Left column: identity, role, description and the two CTAs. */
export function HeroContent() {
  const setActiveWorkspace = useWorkspaceStore((s) => s.setActiveWorkspace);
  const reduced = useReducedMotion();
  const magnetRef = useRef<HTMLButtonElement>(null);

  const handleMagnet = (event: PointerEvent<HTMLButtonElement>) => {
    const el = magnetRef.current;
    if (!el || reduced) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - (rect.left + rect.width / 2)) * 0.18;
    const y = (event.clientY - (rect.top + rect.height / 2)) * 0.28;
    el.style.setProperty("--magnet-x", `${x}px`);
    el.style.setProperty("--magnet-y", `${y}px`);
  };

  const primaryMotion = reduced ? {} : { whileHover: { scale: 1.03 }, whileTap: { scale: 0.98 } };

  const resetMagnet = () => {
    magnetRef.current?.style.setProperty("--magnet-x", "0px");
    magnetRef.current?.style.setProperty("--magnet-y", "0px");
  };

  return (
    <div data-hero-content className="max-w-xl">
      <p data-hero-eyebrow className="text-xs tracking-[0.28em] text-subtle-foreground uppercase">
        {HERO_COPY.eyebrow}
      </p>

      <h1 className="font-display mt-4 text-[clamp(2.75rem,9vw,4rem)] leading-[0.95] font-bold tracking-tight">
        <span className="block overflow-hidden pb-1">
          <span data-hero-name-line className="block">
            {HERO_COPY.firstName}
          </span>
        </span>
        <span className="block overflow-hidden pb-1">
          <span
            data-hero-name-line
            className="block bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent"
          >
            {HERO_COPY.lastName}
          </span>
        </span>
      </h1>

      <div className="mt-4">
        <HeroRole />
      </div>

      <p data-hero-desc className="mt-4 text-base text-muted-foreground sm:text-lg">
        {HERO_COPY.description}
      </p>
      <p data-hero-desc className="mt-2 text-sm text-subtle-foreground">
        {HERO_COPY.support}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <motion.button
          ref={magnetRef}
          data-hero-cta
          type="button"
          onPointerMove={handleMagnet}
          onPointerLeave={resetMagnet}
          onClick={() => setActiveWorkspace("about")}
          {...primaryMotion}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
          className="group inline-flex items-center gap-2 rounded-pill bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-shadow duration-200 hover:shadow-glow"
          style={{
            translate: "var(--magnet-x, 0px) var(--magnet-y, 0px)",
            transition: "translate 250ms var(--ease-os)",
          }}
        >
          Explore Workspace
          <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </motion.button>
      </div>
    </div>
  );
}
