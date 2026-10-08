import type { LucideIcon } from "lucide-react";

export type WorkspaceId =
  | "home"
  | "about"
  | "journey"
  | "skills"
  | "projects"
  | "contact";

export interface WorkspaceDefinition {
  id: WorkspaceId;
  label: string;
  icon: LucideIcon;
}
