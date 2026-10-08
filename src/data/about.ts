/** About workspace content. Data stays out of components. */

export const ABOUT_COPY = {
  eyebrow: "Profile / Identity",
  heading: ["More than code,", "this is me."],
  intro:
    "I'm a curious mind who loves building meaningful things, exploring ideas and turning imagination into reality.",
  intro2:
    "I believe in learning, unlearning and growing every single day.",
  gameTitle: "Discover Manvi",
  gameSubtitle: "Explore the world and discover pieces of me.",
} as const;

export const EDUCATION = {
  label: "Education",
  degree: "B.Tech in Computer Science & Engineering",
  institution: "VIT Bhopal University",
  timeLabel: "Time Here",
  time: "2023 — 2027",
} as const;

export type DiscoveryId = "build" | "create" | "learn" | "grow";

export interface Discovery {
  id: DiscoveryId;
  title: string;
  text: string;
  tags: readonly string[];
  /** Position inside the arena, in percent. */
  x: number;
  y: number;
  accent: "primary" | "secondary" | "success" | "warning";
}

export const DISCOVERIES: readonly Discovery[] = [
  {
    id: "build",
    title: "Build",
    text: "I love turning ideas into real products.",
    tags: ["AI", "Full Stack", "Real-time Systems"],
    x: 26,
    y: 30,
    accent: "primary",
  },
  {
    id: "create",
    title: "Create",
    text: "I enjoy creating experiences that feel intuitive and alive.",
    tags: ["UI", "Interactive Experiences", "Creative Problem Solving"],
    x: 72,
    y: 26,
    accent: "secondary",
  },
  {
    id: "learn",
    title: "Learn",
    text: "Curiosity keeps me exploring, experimenting and improving.",
    tags: ["AI / ML", "New Technologies", "Experimentation"],
    x: 24,
    y: 70,
    accent: "warning",
  },
  {
    id: "grow",
    title: "Grow",
    text: "Every project, mistake and experiment is another step forward.",
    tags: ["Learning", "Growth", "Continuous Improvement"],
    x: 74,
    y: 68,
    accent: "success",
  },
];

export type FacetId = "build" | "create" | "learn";

export interface AboutFacet {
  id: FacetId;
  label: string;
  caption: string;
  items: readonly string[];
}

export const ABOUT_FACETS: readonly AboutFacet[] = [
  {
    id: "build",
    label: "I Build",
    caption: "Systems that hold up in production.",
    items: [
      "Full-Stack Development",
      "AI Systems",
      "Real-Time Applications",
      "Backend Engineering",
    ],
  },
  {
    id: "create",
    label: "I Create",
    caption: "Interfaces people enjoy using.",
    items: [
      "Interactive UI",
      "Product Thinking",
      "Creative Problem Solving",
      "Digital Experiences",
    ],
  },
  {
    id: "learn",
    label: "I Learn",
    caption: "Curiosity as a daily practice.",
    items: [
      "Artificial Intelligence",
      "Machine Learning",
      "New Technologies",
      "Experimentation",
    ],
  },
];
