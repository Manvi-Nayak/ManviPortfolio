import { About } from "@/components/about/About";
import { Contact } from "@/components/contact/Contact";
import { Hero } from "@/components/hero/Hero";
import { Journey } from "@/components/journey/Journey";
import { Projects } from "@/components/projects/Projects";
import { Skills } from "@/components/skills/Skills";
import type { WorkspaceId } from "@/types/workspace";

/** Workspace id -> view. Keeps the container free of switch statements. */
export const WORKSPACE_VIEWS: Record<WorkspaceId, () => React.JSX.Element> = {
  home: Hero,
  about: About,
  journey: Journey,
  skills: Skills,
  projects: Projects,
  contact: Contact,
};
