import { ABOUT_COPY, EDUCATION } from "@/data/about";

/** Left column: heading, personal intro and a compact education module. */
export function AboutIdentity() {
  return (
    <div className="max-w-xl">
      <p
        data-about-eyebrow
        className="text-xs tracking-[0.28em] text-subtle-foreground uppercase"
      >
        {ABOUT_COPY.eyebrow}
      </p>

      <h1
        data-about-heading
        className="font-display mt-4 text-[clamp(2.25rem,6vw,3.25rem)] leading-[1.02] font-bold tracking-tight"
      >
        {ABOUT_COPY.heading[0]}
        <br />
        {ABOUT_COPY.heading[1]}
      </h1>

      <p data-about-intro className="mt-6 text-base text-muted-foreground sm:text-lg">
        {ABOUT_COPY.intro}
      </p>
      <p data-about-intro className="mt-3 text-sm text-subtle-foreground sm:text-base">
        {ABOUT_COPY.intro2}
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
        <div data-about-edu className="glass rounded-lg p-4 shadow-glass">
          <p className="text-[0.65rem] tracking-[0.24em] text-subtle-foreground uppercase">
            {EDUCATION.label}
          </p>
          <p className="mt-2 text-sm text-foreground">{EDUCATION.degree}</p>
          <p className="mt-1 text-sm text-muted-foreground">{EDUCATION.institution}</p>
        </div>

        <div data-about-edu className="glass rounded-lg p-4 shadow-glass sm:min-w-[9rem]">
          <p className="text-[0.65rem] tracking-[0.24em] text-subtle-foreground uppercase">
            {EDUCATION.timeLabel}
          </p>
          <p className="font-display mt-2 text-sm tracking-[0.12em] text-primary">
            {EDUCATION.time}
          </p>
        </div>
      </div>
    </div>
  );
}
