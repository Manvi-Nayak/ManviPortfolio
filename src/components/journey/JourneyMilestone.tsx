import type { Milestone } from "@/data/journey";

interface JourneyMilestoneProps {
  milestone: Milestone;
  isActive: boolean;
}

/** One chapter of the path. Brightens when the traveller arrives. */
export function JourneyMilestone({ milestone, isActive }: JourneyMilestoneProps) {
  const isNow = milestone.id === "now";

  return (
    <article
      data-journey-chapter={milestone.id}
      aria-current={isActive ? "step" : undefined}
      className={`relative pl-8 transition-[opacity,transform] duration-500 lg:pl-0 ${
        isActive ? "opacity-100" : "opacity-70"
      }`}
    >
      {/* Mobile station marker (the rail itself spans the whole Journey) */}
      <span
        aria-hidden
        className={`absolute top-2 left-0 size-[15px] rounded-pill border transition-all duration-500 lg:hidden ${
          isActive
            ? "border-primary bg-primary shadow-glow"
            : "border-white/20 bg-surface"
        }`}
      />

      <div
        className={`glass rounded-lg p-5 transition-all duration-500 sm:p-6 ${
          isActive ? "border-primary/30 bg-glass-hover" : ""
        } ${isNow ? "shadow-glow" : ""}`}
      >
        <div className="flex items-baseline gap-3">
          <span
            className={`font-display text-sm tracking-[0.28em] transition-colors duration-500 ${
              isActive ? "text-primary" : "text-subtle-foreground"
            }`}
          >
            {milestone.year}
          </span>
          <h2
            className={`font-display tracking-[0.22em] uppercase ${
              isNow ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
            }`}
          >
            {milestone.title}
          </h2>
        </div>

        <p className="mt-3 max-w-prose text-sm text-muted-foreground sm:text-base">
          {milestone.lead}
        </p>
        {milestone.support ? (
          <p className="mt-2 max-w-prose text-sm text-subtle-foreground">
            {milestone.support}
          </p>
        ) : null}

        {milestone.themes ? (
          <>
            <p className="mt-4 text-[0.6rem] tracking-[0.24em] text-subtle-foreground uppercase">
              Areas I started exploring
            </p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {milestone.themes.map((t) => (
                <li
                  key={t}
                  className="rounded-pill border border-white/10 bg-glass px-3 py-1 text-xs text-muted-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
          </>
        ) : null}

      </div>
    </article>
  );
}
