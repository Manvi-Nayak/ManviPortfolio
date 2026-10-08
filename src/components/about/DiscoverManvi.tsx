import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";

import { DiscoverObject } from "@/components/about/DiscoverObject";
import { DiscoveryPanel } from "@/components/about/DiscoveryPanel";
import { ABOUT_COPY, DISCOVERIES, type DiscoveryId } from "@/data/about";
import { useWorkspaceStore } from "@/store/workspaceStore";

const pad = (n: number) => String(n).padStart(2, "0");

/** Interactive micro-experience: explore the arena and discover four objects. */
export function DiscoverManvi() {
  const arenaRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const setActiveWorkspace = useWorkspaceStore((s) => s.setActiveWorkspace);

  const [discovered, setDiscovered] = useState<DiscoveryId[]>([]);
  const [selected, setSelected] = useState<DiscoveryId | null>(null);
  const [hovered, setHovered] = useState<DiscoveryId | null>(null);
  const [eggOpen, setEggOpen] = useState(false);

  // Pointer position, normalised to -0.5..0.5 for parallax + the orb.
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 120, damping: 20, mass: 0.4 });
  const sy = useSpring(py, { stiffness: 120, damping: 20, mass: 0.4 });

  const bgX = useTransform(sx, (v) => (reduced ? 0 : (v - 0.5) * 6));
  const bgY = useTransform(sy, (v) => (reduced ? 0 : (v - 0.5) * 6));
  const envX = useTransform(sx, (v) => (reduced ? 0 : (v - 0.5) * 14));
  const envY = useTransform(sy, (v) => (reduced ? 0 : (v - 0.5) * 14));
  const objX = useTransform(sx, (v) => (reduced ? 0 : (v - 0.5) * 20));
  const objY = useTransform(sy, (v) => (reduced ? 0 : (v - 0.5) * 20));

  const bg = { x: bgX, y: bgY };
  const env = { x: envX, y: envY };
  const objects = { x: objX, y: objY };

  const orbX = useTransform(sx, (v) => `${v * 100}%`);
  const orbY = useTransform(sy, (v) => `${v * 100}%`);

  const track = (clientX: number, clientY: number) => {
    const el = arenaRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    px.set(Math.min(1, Math.max(0, (clientX - r.left) / r.width)));
    py.set(Math.min(1, Math.max(0, (clientY - r.top) / r.height)));
  };

  const discover = (id: DiscoveryId) => {
    setSelected(id);
    setDiscovered((d) => (d.includes(id) ? d : [...d, id]));
  };

  const complete = discovered.length === DISCOVERIES.length;
  const selectedDiscovery = DISCOVERIES.find((d) => d.id === selected) ?? null;

  return (
    <div
      data-about-game
      className="glass relative w-full overflow-hidden rounded-lg p-4 shadow-glass sm:p-5"
    >
      <div className="relative flex items-start justify-between gap-4">
        <div data-game-title>
          <h2 className="font-display text-lg tracking-[0.2em] uppercase">
            {ABOUT_COPY.gameTitle}
          </h2>
          <p className="mt-1 text-xs text-subtle-foreground">{ABOUT_COPY.gameSubtitle}</p>
        </div>
        <p
          data-game-counter
          aria-live="polite"
          className="shrink-0 rounded-pill border border-white/10 bg-glass px-3 py-1 text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase"
        >
          {pad(discovered.length)} / {pad(DISCOVERIES.length)} Discovered
        </p>
      </div>

      <div
        ref={arenaRef}
        onPointerMove={(e) => track(e.clientX, e.clientY)}
        onPointerLeave={() => {
          px.set(0.5);
          py.set(0.5);
          setHovered(null);
        }}
        className="relative mt-4 aspect-[4/5] w-full overflow-hidden rounded-lg border border-white/8 bg-[#070709] sm:aspect-square"
      >
        {/* Background layer */}
        <motion.div
          data-game-layer
          aria-hidden
          style={bg}
          className="pointer-events-none absolute -inset-6"
        >
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              maskImage: "radial-gradient(ellipse at center, black, transparent 75%)",
            }}
          />
        </motion.div>

        {/* Environment layer: horizon light + ambient glows */}
        <motion.div
          data-game-layer
          aria-hidden
          style={env}
          className="pointer-events-none absolute -inset-8"
        >
          <div className="absolute top-1/2 left-1/2 size-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-1/3 w-[80%] -translate-x-1/2 rounded-[50%] bg-secondary/10 blur-3xl" />
          <div className="absolute inset-x-[12%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/12 to-transparent" />
        </motion.div>

        {/* Connection paths to discovered objects */}
        <svg
          data-game-layer
          aria-hidden
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 size-full"
        >
          {DISCOVERIES.map((d) => (
            <line
              key={d.id}
              x1={50}
              y1={50}
              x2={d.x}
              y2={d.y}
              stroke="currentColor"
              strokeWidth={0.3}
              vectorEffect="non-scaling-stroke"
              className={`text-primary transition-opacity duration-700 ${
                discovered.includes(d.id) ? "opacity-40" : "opacity-0"
              }`}
            />
          ))}
        </svg>

        {/* Objects layer */}
        <motion.div style={objects} className="absolute inset-0">
          {DISCOVERIES.map((d) => (
            <DiscoverObject
              key={d.id}
              discovery={d}
              discovered={discovered.includes(d.id)}
              active={hovered === d.id || selected === d.id}
              onActivate={discover}
              onHover={setHovered}
            />
          ))}

          {/* Centre marker */}
          <span
            aria-hidden
            className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-pill bg-primary/70 shadow-glow"
          />
        </motion.div>

        {/* Player orb */}
        <motion.span
          aria-hidden
          style={{ left: orbX, top: orbY }}
          className="pointer-events-none absolute z-10 hidden size-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-2xl md:block"
        />

        {/* Easter egg */}
        {complete ? (
          <div className="absolute top-3 right-3 z-30">
            <button
              type="button"
              aria-label="Hidden discovery"
              onClick={() => setEggOpen((v) => !v)}
              className="size-6 rounded-pill border border-white/10 bg-glass text-[0.65rem] text-subtle-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              ?
            </button>
            <AnimatePresence>
              {eggOpen ? (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="glass absolute top-8 right-0 w-52 rounded-sm p-2 text-[0.7rem] text-muted-foreground"
                >
                  There&apos;s always one more thing to discover.
                </motion.p>
              ) : null}
            </AnimatePresence>
          </div>
        ) : null}
      </div>

      <DiscoveryPanel
        discovery={selectedDiscovery}
        complete={complete}
        onContinue={() => setActiveWorkspace("journey")}
      />
    </div>
  );
}
