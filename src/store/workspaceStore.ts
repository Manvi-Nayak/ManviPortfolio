import { create } from "zustand";

import type { WorkspaceId } from "@/types/workspace";

interface WorkspaceState {
  activeWorkspace: WorkspaceId;
  setActiveWorkspace: (id: WorkspaceId, scroll?: boolean) => void;
}

export const useWorkspaceStore = create<WorkspaceState>((set) => ({
  activeWorkspace: "home",
  setActiveWorkspace: (id, scroll = true) => {
    set({ activeWorkspace: id });
    if (scroll && typeof document !== "undefined") {
      document.getElementById(`page-${id}`)?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start",
      });
    }
  },
}));
