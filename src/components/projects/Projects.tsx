import { motion, useReducedMotion } from "motion/react";
import { ProjectCard } from "./ProjectCard";

import { PROJECTS, PROJECTS_COPY } from "@/data/projects";

export function Projects() {
  const reducedMotion = useReducedMotion();

  return (
    <section aria-labelledby="projects-heading" className="py-4">
      <motion.header initial={false} whileInView={reducedMotion ? {} : { opacity: [0, 1], y: [8, 0] }} viewport={{ once: true }} transition={{ duration: 0.35 }} className="mb-7 max-w-2xl">
        <p className="text-xs tracking-[0.28em] text-subtle-foreground uppercase">Projects / Selected work</p>
        <h1 id="projects-heading" className="mt-3 font-display text-3xl font-semibold uppercase sm:text-5xl">
          {PROJECTS_COPY.heading}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">{PROJECTS_COPY.intro}</p>
      </motion.header>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
        {PROJECTS.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
      </div>
    </section>
  );
}
