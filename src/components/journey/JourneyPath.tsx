import { MILESTONES, type MilestoneId } from "@/data/journey";

interface JourneyPathProps {
  activeId: MilestoneId;
  /** Station tops as % of the Journey height, measured from the real panels. */
  stations?: readonly number[] | undefined;
  endStation?: number | undefined;
}

/** Fallback station positions (before measurement) as % of Journey height. */
const STATIONS = [6, 34, 62, 88];
const END_STATION = 98;

/**
 * Builds one continuous, gently curving route through every station so the dots
 * always sit exactly on the line, whatever the measured spacing is.
 */
function buildRoute(points: readonly number[]): string {
  const ys = points.map((p) => Math.max(0, Math.min(100, p)) * 10);
  const first = ys[0] ?? 0;
  let d = `M100 0 L100 ${first.toFixed(1)}`;
  for (let i = 1; i < ys.length; i += 1) {
    const from = ys[i - 1] ?? 0;
    const to = ys[i] ?? 0;
    const bow = i % 2 === 1 ? 34 : -34;
    const t = Math.max(24, (to - from) * 0.42);
    d += ` C ${100 + bow} ${(from + t).toFixed(1)}, ${100 - bow} ${(to - t).toFixed(1)}, 100 ${to.toFixed(1)}`;
  }
  return `${d} L100 1000`;
}

/**
 * The travelling spine. An absolutely positioned, full-height SVG that scales to
 * the Journey content (preserveAspectRatio="none" + non-scaling strokes), so the
 * path never ends before the last milestone. The base line stays visible at low
 * opacity; the glowing progress line is drawn by scroll (see initJourney).
 */
export function JourneyPath({ activeId, stations, endStation }: JourneyPathProps) {
  const activeIndex = MILESTONES.findIndex((m) => m.id === activeId);
  const points =
    stations && stations.length === MILESTONES.length
      ? [...stations, endStation ?? END_STATION]
      : [...STATIONS, END_STATION];
  const route = buildRoute(points);

  return (
    <div
      data-journey-path
      aria-hidden
      className="pointer-events-none absolute inset-0 hidden lg:block"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_45%_40%,oklch(0.68_0.17_259/0.12),transparent_72%)]" />

      <svg
        viewBox="0 0 200 1000"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="journey-progress" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.68 0.17 259)" />
            <stop offset="100%" stopColor="oklch(0.6 0.23 302)" />
          </linearGradient>
        </defs>

        <path
          d={route}
          pathLength={1000}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.1}
          className="text-white/10"
          strokeLinecap="round"
        />
        {/* Soft halo + crisp core, both drawn by scroll. Stacked strokes instead
            of an SVG filter: filters on a very tall element get raster-clipped. */}
        <path
          data-path-progress
          d={route}
          pathLength={1000}
          fill="none"
          stroke="url(#journey-progress)"
          strokeWidth={5}
          strokeLinecap="round"
          opacity={0.16}
        />
        <path
          data-path-progress
          d={route}
          pathLength={1000}
          fill="none"
          stroke="url(#journey-progress)"
          strokeWidth={2.4}
          strokeLinecap="round"
          opacity={0.4}
        />
        <path
          data-path-progress
          d={route}
          pathLength={1000}
          fill="none"
          stroke="url(#journey-progress)"
          strokeWidth={1.2}
          strokeLinecap="round"
        />
      </svg>

      {/* Stations live in HTML so the non-uniform SVG scale can't distort type. */}
      {MILESTONES.map((m, i) => {
        const reached = i <= activeIndex;
        const isActive = i === activeIndex;
        return (
          <div
            key={m.id}
            className="absolute left-1/2 flex -translate-y-1/2 items-center gap-3"
            style={{ top: `${stations?.[i] ?? STATIONS[i] ?? 0}%` }}
          >
            <span className="relative -ml-2 flex size-4 items-center justify-center">
              <span
                className="absolute rounded-pill bg-primary transition-all duration-500"
                style={{
                  width: isActive ? "2.25rem" : "1.5rem",
                  height: isActive ? "2.25rem" : "1.5rem",
                  opacity: isActive ? 0.18 : reached ? 0.08 : 0.03,
                }}
              />
              <span
                className={`relative rounded-pill border transition-all duration-500 ${
                  isActive
                    ? "size-3.5 border-primary bg-primary shadow-glow"
                    : reached
                      ? "size-2.5 border-primary/60 bg-primary"
                      : "size-2.5 border-primary/40 bg-surface"
                }`}
              />
            </span>
            <span
              className="font-display text-base tracking-[0.2em] transition-opacity duration-500"
              style={{ opacity: isActive ? 1 : reached ? 0.6 : 0.28 }}
            >
              {m.year}
            </span>
          </div>
        );
      })}

      <div
        className="absolute left-1/2 flex -translate-y-1/2 items-center gap-3"
        style={{ top: `${endStation ?? END_STATION}%` }}
      >
        <span className="-ml-1 size-2 rounded-pill bg-primary/70" />
        <span className="font-display text-[0.6rem] tracking-[0.28em] text-subtle-foreground uppercase">
          Continues
        </span>
      </div>
    </div>
  );
}
