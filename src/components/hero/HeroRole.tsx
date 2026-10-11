import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import { HERO_ROLES } from "@/data/hero";

const HOLD_MS = 2500;

/**
 * Dynamic role line. Smooth morph/fade — never a typing effect. The container
 * keeps a fixed height so the hero layout cannot jump.
 */
export function HeroRole() {
  const [index, setIndex] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % HERO_ROLES.length), HOLD_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div data-hero-role className="relative h-9 sm:h-11" aria-live="polite" aria-atomic="true">
      <AnimatePresence mode="wait" initial={false}>
        <motion.p
          key={HERO_ROLES[index]}
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 10, filter: "blur(6px)" }}
          animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={reduced ? { opacity: 0 } : { opacity: 0, y: -10, filter: "blur(6px)" }}
          transition={{ duration: reduced ? 0.2 : 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="font-display absolute inset-0 text-2xl font-semibold text-primary sm:text-[28px]"
        >
          {HERO_ROLES[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
