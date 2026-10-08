import { Briefcase, Home, Mail, Route, User, Zap } from "lucide-react";

import type { WorkspaceDefinition } from "@/types/workspace";

/** Dock order is locked by docs/WIREFRAMES.md. */
export const WORKSPACES: readonly WorkspaceDefinition[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "journey", label: "Journey", icon: Route },
  { id: "skills", label: "Skills", icon: Zap },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "contact", label: "Contact", icon: Mail },
];
