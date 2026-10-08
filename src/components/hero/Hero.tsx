import { useEffect, useRef } from "react";

import { playHeroEntrance } from "@/animations/hero/heroEntrance";
import { initHeroScroll } from "@/animations/hero/heroScroll";
import { HeroBlueprint } from "@/components/hero/HeroBlueprint";
import { HeroContent } from "@/components/hero/HeroContent";

/** Home workspace: identity on the left, engineering blueprint on the right. */
export function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const stopEntrance = playHeroEntrance(root);
    const stopScroll = initHeroScroll(root);
    return () => {
      stopEntrance();
      stopScroll();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      aria-label="Home"
      className="grid min-h-[calc(100vh-9rem)] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-16"
    >
      <HeroContent />
      <div data-hero-visual className="flex justify-center pb-10 lg:justify-end lg:pb-0">
        <HeroBlueprint />
      </div>
    </section>
  );
}
