/** Hero content + blueprint topology. Data stays out of components. */

export const HERO_ROLES = [
  "Software Engineer",
  "AI Developer",
  "Full Stack Engineer",
  "Builder",
  "Problem Solver",
  "ML Enthusiast",
] as const;

export const HERO_COPY = {
  eyebrow: "Hello, I'm",
  firstName: "Manvi",
  lastName: "Nayak",
  description: "Building intelligent products where software meets creativity.",
  support: "I build AI-powered, full-stack experiences that solve real-world problems.",
} as const;

export interface BlueprintNode {
  /** Percentage coordinates inside the 100x100 viewBox. */
  x: number;
  y: number;
  /** Radius in viewBox units. */
  r: number;
  /** Labelled nodes are the intentionally interactive ones. */
  label?: string;
  /** Secondary accent (purple) instead of primary (blue). */
  accent?: "primary" | "secondary";
  /** Hidden on small viewports to reduce complexity. */
  dense?: boolean;
}

/**
 * A layered engineering system: interface layer (top), service layer
 * (middle), data / model layer (bottom).
 */
export const BLUEPRINT_NODES: readonly BlueprintNode[] = [
  { x: 20, y: 16, r: 1.5, label: "React", accent: "primary" },
  { x: 50, y: 10, r: 1.2, dense: true },
  { x: 80, y: 18, r: 1.5, label: "TypeScript", accent: "primary" },
  { x: 34, y: 34, r: 1.2, dense: true },
  { x: 66, y: 32, r: 1.2, dense: true },
  { x: 50, y: 48, r: 2.1, label: "FastAPI", accent: "secondary" },
  { x: 16, y: 52, r: 1.5, label: "Node", accent: "primary" },
  { x: 84, y: 54, r: 1.5, label: "Python", accent: "primary" },
  { x: 30, y: 72, r: 1.2, dense: true },
  { x: 70, y: 70, r: 1.2, dense: true },
  { x: 22, y: 88, r: 1.5, label: "Postgres", accent: "primary" },
  { x: 52, y: 92, r: 1.5, label: "AI / ML", accent: "secondary" },
  { x: 82, y: 86, r: 1.2, dense: true },
];

/** Index pairs into BLUEPRINT_NODES. */
export const BLUEPRINT_EDGES: readonly [number, number][] = [
  [0, 1],
  [1, 2],
  [0, 3],
  [2, 4],
  [3, 5],
  [4, 5],
  [0, 6],
  [2, 7],
  [6, 5],
  [7, 5],
  [5, 8],
  [5, 9],
  [6, 8],
  [7, 9],
  [8, 10],
  [8, 11],
  [9, 11],
  [9, 12],
];

/** Edges that carry an animated activity pulse. */
export const BLUEPRINT_ACTIVITY: readonly number[] = [3, 8, 15, 17];
