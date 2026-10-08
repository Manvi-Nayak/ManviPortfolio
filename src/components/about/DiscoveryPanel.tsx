import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import type { Discovery } from "@/data/about";

interface DiscoveryPanelProps {
  discovery: Discovery | null;
  /** Shown when every object has been found and nothing is selected. */
  complete?: boolean;
  onContinue?: () => void;
}

/**
 * Reserved information area BELOW the arena. Fixed min-height so content
 * swaps never resize the game or reflow the page.
 */
export function DiscoveryPanel({ discovery, complete, onContinue }: DiscoveryPanelProps) {
  const reduced = useReducedMotion();
  const key = discovery ? discovery.id : complete ? "complete" : "empty";

  return (
    <div
      className="relative mt-4 min-h-[9.5rem] overflow-hidden rounded-lg border border-white/8 bg-glass p-4"
      aria-live="polite"
    >
      <p className="text-[0.6rem] tracking-[0.24em] text-subtle-foreground uppercase">
        Discovery Info
      </p>

      <div className="relative mt-3">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={key}
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: reduced ? 0.15 : 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            {discovery ? (
              <>
                <p className="font-display text-sm tracking-[0.24em] uppercase">
                  {discovery.title}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{discovery.text}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {discovery.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-pill border border-white/10 bg-glass px-2.5 py-1 text-[0.65rem] tracking-[0.12em] text-subtle-foreground uppercase"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </>
            ) : complete ? (
              <>
                <p className="font-display text-sm leading-snug">
                  Looks like you&apos;ve found a little bit of me.
                </p>
                <button
                  type="button"
                  onClick={onContinue}
                  className="mt-3 rounded-pill border border-primary/40 bg-glass px-4 py-2 text-xs tracking-[0.16em] text-foreground uppercase transition-colors hover:bg-glass-hover focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                >
                  Continue to Journey →
                </button>
              </>
            ) : (
              <p className="text-sm text-subtle-foreground">Tap an object to discover.</p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
