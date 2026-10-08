import { useEffect, useRef } from "react";

import { playAboutEntrance } from "@/animations/about/aboutEntrance";
import { AboutCards } from "@/components/about/AboutCards";
import { AboutIdentity } from "@/components/about/AboutIdentity";
import { DiscoverManvi } from "@/components/about/DiscoverManvi";

/** About workspace: who Manvi is, plus the Discover Manvi micro-experience. */
export function About() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    return playAboutEntrance(root);
  }, []);

  return (
    <section
      ref={rootRef}
      aria-label="About"
      className="flex flex-col justify-center gap-12 py-4 lg:min-h-[calc(100vh-9rem)] lg:py-0"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-16">
        <AboutIdentity />
        <div className="flex w-full justify-center lg:justify-end">
          <div className="w-full max-w-[460px]">
            <DiscoverManvi />
          </div>
        </div>
      </div>

      <AboutCards />
    </section>
  );
}
