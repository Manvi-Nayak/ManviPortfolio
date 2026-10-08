import { createFileRoute } from "@tanstack/react-router";

import { OSLayout } from "@/layouts/OSLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ManviOS — Interactive Portfolio OS of Manvi Nayak" },
      {
        name: "description",
        content:
          "ManviOS is an operating-system-inspired portfolio for Manvi Nayak, a software engineer and AI developer building intelligent products.",
      },
      { property: "og:title", content: "ManviOS — Interactive Portfolio OS" },
      {
        property: "og:description",
        content:
          "Explore projects, skills and journey inside a premium OS-inspired workspace experience.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OSLayout,
});
