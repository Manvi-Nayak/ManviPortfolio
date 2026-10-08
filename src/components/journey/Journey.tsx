import { useCallback, useEffect, useRef, useState } from "react";

import { initJourney } from "@/animations/journey/journeyScroll";
import { JourneyMilestone } from "@/components/journey/JourneyMilestone";
import { JourneyPath } from "@/components/journey/JourneyPath";
import { JOURNEY_COPY, MILESTONES, type MilestoneId } from "@/data/journey";

/** Journey workspace: a scroll-travelled path through 2023 → 2026. */
export function Journey() {
  const rootRef = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState<MilestoneId>("begin");

  const onActive = useCallback((id: MilestoneId) => setActiveId(id), []);

  const trackRef = useRef<HTMLDivElement>(null);
  const [stations, setStations] = useState<number[]>([]);

  // Stations are measured from the real panels so the spine always connects to
  // the story, whatever the responsive layout does to the content height.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      const height = track.offsetHeight || 1;
      const top = track.getBoundingClientRect().top;
      const selectors = [
        ...MILESTONES.map((m) => `[data-journey-chapter="${m.id}"]`),
        "[data-journey-end]",
      ];
      setStations(
        selectors.map((sel) => {
          const el = track.querySelector(sel);
          if (!el) return 0;
          const rect = el.getBoundingClientRect();
          return ((rect.top - top + Math.min(rect.height / 2, 44)) / height) * 100;
        }),
      );
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    track.querySelectorAll("[data-journey-chapter], [data-journey-end]").forEach((el) => ro.observe(el));
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    return initJourney(root, { onActive });
  }, [onActive]);

  return (
    <section ref={rootRef} aria-label="Journey" className="py-4">
      <header className="max-w-2xl">
        <p
          data-journey-eyebrow
          className="text-[0.65rem] tracking-[0.28em] text-subtle-foreground uppercase"
        >
          {JOURNEY_COPY.eyebrow}
        </p>
        <h1
          data-journey-heading
          className="mt-3 font-display text-3xl tracking-[0.16em] uppercase sm:text-5xl"
        >
          {JOURNEY_COPY.heading}
        </h1>
        <p data-journey-intro className="mt-3 text-sm text-muted-foreground sm:text-base">
          {JOURNEY_COPY.intro}
        </p>
      </header>

      <div
        ref={trackRef}
        data-journey-track
        className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)] lg:gap-14"
      >
        <div className="relative hidden lg:block">
          <JourneyPath
            activeId={activeId}
            stations={stations.slice(0, MILESTONES.length)}
            endStation={stations[MILESTONES.length]}
          />
        </div>


        <div className="relative flex flex-col gap-16 sm:gap-24">
          {/* Mobile spine: one continuous rail through the whole Journey. */}
          <span
            aria-hidden
            className="absolute top-3 bottom-6 left-[7px] w-px bg-gradient-to-b from-primary/45 via-primary/15 to-primary/5 lg:hidden"
          />

          {MILESTONES.map((m) => (
            <JourneyMilestone
              key={m.id}
              milestone={m}
              isActive={m.id === activeId}
            />
          ))}

          <div data-journey-end className="relative pl-8 lg:pl-0">
            <span
              aria-hidden
              className="absolute top-1 left-0 size-[9px] rounded-pill bg-primary/70 lg:hidden"
            />
            <div className="space-y-1 text-sm text-muted-foreground sm:text-base">
              {JOURNEY_COPY.growth.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <p className="mt-6 font-display text-xs tracking-[0.32em] text-primary uppercase">
              {JOURNEY_COPY.continues}
            </p>


          </div>
        </div>
      </div>
    </section>
  );
}