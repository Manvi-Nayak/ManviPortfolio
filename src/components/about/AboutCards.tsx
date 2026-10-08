import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import { ABOUT_FACETS, type FacetId } from "@/data/about";

/**
 * I BUILD / I CREATE / I LEARN.
 * Hover = temporary preview (never locks). Click = lock open, click again = close.
 */
export function AboutCards() {
  const [locked, setLocked] = useState<FacetId | null>(null);
  const [hovered, setHovered] = useState<FacetId | null>(null);
  const reduced = useReducedMotion();

  return (
    <div role="group" aria-label="What I do" className="grid items-start gap-4 sm:grid-cols-3">
      {ABOUT_FACETS.map((facet) => {
        const isLocked = locked === facet.id;
        const isOpen = isLocked || (locked === null && hovered === facet.id);
        const panelId = `about-facet-${facet.id}`;

        return (
          <motion.button
            key={facet.id}
            data-about-card
            type="button"
            aria-expanded={true}
            aria-controls={panelId}
            onPointerEnter={(e) => {
              if (e.pointerType === "mouse") setHovered(facet.id);
            }}
            onPointerLeave={(e) => {
              if (e.pointerType === "mouse") setHovered((h) => (h === facet.id ? null : h));
            }}
            onFocus={() => setHovered(facet.id)}
            onBlur={() => setHovered((h) => (h === facet.id ? null : h))}
            onClick={() => setLocked((l) => (l === facet.id ? null : facet.id))}
            whileHover={reduced ? {} : { scale: 1.015 }}
            whileTap={{ scale: 0.995 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={`glass group relative flex h-[13.5rem] w-full flex-col overflow-hidden rounded-lg p-5 text-left transition-colors duration-300 will-change-transform focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none ${
              isLocked
                ? "border-primary/40 bg-glass-hover shadow-glow"
                : isOpen
                  ? "border-white/15 bg-glass-hover"
                  : "hover:bg-glass-hover"
            }`}
          >
            <span className="flex items-center justify-between">
              <span className="font-display text-lg tracking-[0.18em] uppercase">
                {facet.label}
              </span>
              <span
                aria-hidden
                className={`size-1.5 rounded-pill transition-colors duration-300 ${
                  isLocked ? "bg-primary" : "bg-subtle-foreground/50"
                }`}
              />
            </span>

            <span className="mt-2 text-xs text-subtle-foreground">{facet.caption}</span>

            {/* Reserved space — revealed in place, never changes card height. */}
            <motion.span
              id={panelId}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduced ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 block border-t border-white/8 pt-4 will-change-transform"
            >
              {facet.items.map((item) => (
                <span key={item} className="block text-sm text-muted-foreground">
                  {item}
                </span>
              ))}
            </motion.span>
          </motion.button>
        );
      })}
    </div>
  );
}
