import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { PortfolioProject } from "@/data/projects";

function TechList({ project }: { project: PortfolioProject }) {
  return (
    <ul aria-label={`${project.name} technologies`} className="flex flex-wrap gap-1.5">
      {project.technologies.map((t) => (
        <li
          key={t}
          className="rounded-pill border border-border bg-glass px-2.5 py-1 text-xs text-subtle-foreground"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

function GithubLink({ project }: { project: PortfolioProject }) {
  if (!project.githubUrl) return null;
  return (
    <Button asChild variant="link" size="sm" className="px-0 text-xs">
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        GITHUB <ArrowUpRight aria-hidden />
      </a>
    </Button>
  );
}

export function ProjectCard({ project, index }: { project: PortfolioProject; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const reduced = useReducedMotion();
  const toggle = () => setFlipped((v) => !v);
  return (
    <motion.article
      data-project-card={project.id}
      data-flipped={flipped}
      initial={false}
      whileInView={reduced ? {} : { opacity: [0, 1], y: [12, 0] }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reduced ? 0 : 0.4, delay: reduced ? 0 : index * 0.06 }}
      className="project-card cursor-pointer"
      onClick={toggle}
    >
      <div className="project-card-rotor">
        <div
          className="project-card-face project-card-front glass p-5 sm:p-6"
          inert={flipped}
          aria-hidden={flipped}
        >
          <span className="font-display text-xs text-primary">{project.id}</span>
          <h2 className="mt-4 font-display text-xl uppercase">{project.name}</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <div className="mt-auto pt-4">
            <TechList project={project} />
          </div>
          <div className="mt-4 flex items-center justify-between gap-2">
            <GithubLink project={project} />
            <Button
              variant="ghost"
              size="sm"
              className="px-0 text-xs text-subtle-foreground"
              onClick={(e) => {
                e.stopPropagation();
                toggle();
              }}
              aria-label={`Flip ${project.name}`}
              aria-pressed={flipped}
            >
              FLIP <ArrowRight aria-hidden />
            </Button>
          </div>
        </div>
        <div
          className="project-card-face project-card-back glass p-5 sm:p-6"
          inert={!flipped}
          aria-hidden={!flipped}
        >
          <span className="font-display text-xs text-primary">{project.id} / SUMMARY</span>
          <h2 className="mt-3 font-display text-lg uppercase">{project.name}</h2>
          <p className="mt-3 flex-1 overflow-y-auto text-sm leading-relaxed text-muted-foreground">
            {project.details}
          </p>
          <div className="mt-4 flex items-center justify-between gap-2">
            <GithubLink project={project} />
            <Button
              variant="ghost"
              size="sm"
              className="px-0 text-xs text-muted-foreground"
              onClick={(e) => {
                e.stopPropagation();
                toggle();
              }}
              aria-label={`Flip back ${project.name}`}
            >
              <ArrowLeft aria-hidden /> BACK
            </Button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
