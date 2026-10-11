import { motion, useReducedMotion } from "motion/react";

import { SKILL_CATEGORIES, SKILLS_COPY } from "@/data/skills";

export function Skills() {
  const reducedMotion = useReducedMotion();

  return (
    <section aria-labelledby="skills-heading" className="py-4">
      <header className="mb-8 max-w-2xl">
        <p className="text-xs tracking-[0.28em] text-subtle-foreground uppercase">
          Skills / Toolkit
        </p>
        <h1
          id="skills-heading"
          className="mt-3 font-display text-3xl font-semibold uppercase sm:text-5xl"
        >
          {SKILLS_COPY.heading}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">{SKILLS_COPY.intro}</p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {SKILL_CATEGORIES.map((category, index) => (
          <motion.section
            key={category.number}
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reducedMotion ? 0 : 0.38,
              delay: reducedMotion ? 0 : index * 0.06,
            }}
            className="glass min-h-40 rounded-lg p-5 shadow-glass sm:p-6"
            aria-labelledby={`skill-category-${category.number}`}
          >
            <div className="flex items-baseline gap-3">
              <span className="font-display text-xs tracking-[0.2em] text-primary">
                {category.number}
              </span>
              <h2
                id={`skill-category-${category.number}`}
                className="font-display text-sm tracking-[0.15em] uppercase"
              >
                {category.name}
              </h2>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="rounded-pill border border-white/10 bg-glass px-3 py-1.5 text-xs text-muted-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:text-foreground sm:text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.section>
        ))}
      </div>
    </section>
  );
}
