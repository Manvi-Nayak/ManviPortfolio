import { useEffect, useState } from "react";

/** Client-only clock (HH:MM). Returns null during SSR to avoid hydration drift. */
export function useClock(): string | null {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
      );

    tick();
    const id = window.setInterval(tick, 15_000);
    return () => window.clearInterval(id);
  }, []);

  return time;
}
