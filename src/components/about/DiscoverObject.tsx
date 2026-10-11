import { motion, useReducedMotion } from "motion/react";

import type { Discovery, DiscoveryId } from "@/data/about";

const ACCENT: Record<Discovery["accent"], string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  warning: "text-warning",
  success: "text-success",
};

/** Lightweight vector art per discoverable object. */
function ObjectArt({ id }: { id: DiscoveryId }) {
  const stroke = { stroke: "currentColor", strokeWidth: 1.6, fill: "none" } as const;
  switch (id) {
    case "build": // laptop / coding workspace
      return (
        <svg viewBox="0 0 32 32" className="size-full" aria-hidden>
          <rect x="6" y="8" width="20" height="13" rx="2" {...stroke} />
          <path d="M3 24h26l-2 3H5z" {...stroke} />
          <path d="M11 12.5 9 14.5l2 2M21 12.5l2 2-2 2M18 11l-4 7" {...stroke} />
        </svg>
      );
    case "create": // glowing idea board
      return (
        <svg viewBox="0 0 32 32" className="size-full" aria-hidden>
          <rect x="5" y="5" width="22" height="17" rx="2" {...stroke} />
          <path d="M16 22v5M11 27h10" {...stroke} />
          <circle cx="12" cy="12" r="2.6" {...stroke} />
          <path d="M18 10h5M18 14h5M9 17h13" {...stroke} />
        </svg>
      );
    case "learn": // open book
      return (
        <svg viewBox="0 0 32 32" className="size-full" aria-hidden>
          <path
            d="M16 10c-2.6-2-6.4-2.4-10-1.8v14c3.6-.6 7.4-.2 10 1.8 2.6-2 6.4-2.4 10-1.8v-14c-3.6-.6-7.4-.2-10 1.8z"
            {...stroke}
          />
          <path d="M16 10v14" {...stroke} />
        </svg>
      );
    case "grow": // small plant
    default:
      return (
        <svg viewBox="0 0 32 32" className="size-full" aria-hidden>
          <path d="M16 27V13" {...stroke} />
          <path
            d="M16 17c-4 0-6-2.4-6-6 4 0 6 2.4 6 6zM16 14c4 0 6-2.4 6-6-4 0-6 2.4-6 6z"
            {...stroke}
          />
          <path d="M10 27h12l-1.5-4h-9z" {...stroke} />
        </svg>
      );
  }
}

interface DiscoverObjectProps {
  discovery: Discovery;
  discovered: boolean;
  active: boolean;
  onActivate: (id: DiscoveryId) => void;
  onHover: (id: DiscoveryId | null) => void;
}

export function DiscoverObject({
  discovery,
  discovered,
  active,
  onActivate,
  onHover,
}: DiscoverObjectProps) {
  const reduced = useReducedMotion();
  const accent = ACCENT[discovery.accent];

  return (
    <motion.button
      data-game-object
      type="button"
      aria-label={`${discovery.title}${discovered ? " — discovered" : ""}. Discover this object.`}
      aria-pressed={discovered}
      onClick={() => onActivate(discovery.id)}
      onPointerEnter={() => onHover(discovery.id)}
      onPointerLeave={() => onHover(null)}
      onFocus={() => onHover(discovery.id)}
      onBlur={() => onHover(null)}
      whileHover={reduced ? {} : { scale: 1.06 }}
      whileTap={{ scale: 0.97 }}
      animate={reduced ? {} : { y: discovered ? 0 : [0, -3, 0] }}
      transition={{
        y: { duration: 5 + discovery.x / 40, repeat: Infinity, ease: "easeInOut" },
        default: { type: "spring", stiffness: 300, damping: 22 },
      }}
      style={{ left: `${discovery.x}%`, top: `${discovery.y}%` }}
      className="absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-lg focus-visible:outline-none"
    >
      <span
        className={`relative flex size-14 items-center justify-center rounded-lg border transition-all duration-300 sm:size-16 ${accent} ${
          discovered
            ? "border-current/50 bg-glass-hover shadow-glow"
            : active
              ? "border-current/40 bg-glass-hover"
              : "border-white/10 bg-glass"
        }`}
      >
        <span
          aria-hidden
          className={`pointer-events-none absolute -inset-6 rounded-full blur-2xl transition-opacity duration-500 ${
            discovered ? "opacity-30" : active ? "opacity-20" : "opacity-0"
          } bg-current`}
        />
        <span className={`relative size-7 sm:size-8 ${discovered || active ? "" : "opacity-70"}`}>
          <ObjectArt id={discovery.id} />
        </span>
        {discovered ? (
          <span
            aria-hidden
            className="absolute -top-1 -right-1 size-2 rounded-pill bg-current shadow-glow"
          />
        ) : null}
      </span>

      <motion.span
        aria-hidden
        initial={false}
        animate={{ opacity: active || discovered ? 1 : 0, y: active || discovered ? 0 : 4 }}
        transition={{ duration: 0.25 }}
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[0.6rem] tracking-[0.24em] whitespace-nowrap text-muted-foreground uppercase"
      >
        {discovery.title}
      </motion.span>
    </motion.button>
  );
}
