/** Personal progression, separate from the project showcase. */

export const JOURNEY_COPY = {
  eyebrow: "Journey / Progression",
  heading: "The Path So Far",
  intro: "A few chapters that shaped the way I build today.",
  growth: [
    "Every project taught me something.",
    "Every experiment changed something.",
    "And the path is still moving.",
  ],
  continues: "The path continues.",
} as const;

export type MilestoneId = "begin" | "explore" | "build" | "now";

export interface Milestone {
  id: MilestoneId;
  year: string;
  title: string;
  lead: string;
  support?: string;
  themes?: readonly string[];
}

export const MILESTONES: readonly Milestone[] = [
  {
    id: "begin",
    year: "2023",
    title: "Begin",
    lead: "Started my B.Tech journey in Computer Science & Engineering at VIT Bhopal University.",
    support:
      "This was the beginning of turning curiosity about technology into a serious path of learning and building.",
  },
  {
    id: "explore",
    year: "2024",
    title: "Explore",
    lead: "I started experimenting across web development, machine learning and AI while figuring out what kind of problems I actually enjoyed solving.",
    themes: [
      "Programming",
      "Web Development",
      "Machine Learning",
      "AI",
      "Problem Solving",
    ],
  },
  {
    id: "build",
    year: "2025",
    title: "Build",
    lead: "Learning started turning into things I could actually build, use and improve.",
    support: "From experiments to real-world software.",
  },
  {
    id: "now",
    year: "2026",
    title: "Now",
    lead: "Still learning, still building, still experimenting.",
    support: "Curiosity keeps the path moving.",
  },
];
