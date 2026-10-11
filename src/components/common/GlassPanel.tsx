import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "nav";
}

/** Subtle glass surface primitive: blur 16px, 1px hairline border. */
export function GlassPanel({ children, className, as: Tag = "div" }: GlassPanelProps) {
  return <Tag className={cn("glass rounded-lg shadow-glass", className)}>{children}</Tag>;
}
