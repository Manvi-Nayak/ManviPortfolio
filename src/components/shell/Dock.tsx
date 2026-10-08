import { WORKSPACES } from "@/data/workspaces";
import { useWorkspaceStore } from "@/store/workspaceStore";

import { DockItem } from "./DockItem";

export function Dock() {
  const activeWorkspace = useWorkspaceStore((s) => s.activeWorkspace);
  const setActiveWorkspace = useWorkspaceStore((s) => s.setActiveWorkspace);

  return (
    <nav
      aria-label="Workspace navigation"
      className="fixed inset-x-0 bottom-3 z-40 flex justify-center px-3 sm:bottom-6"
    >
      <ul className="glass flex max-w-full items-center gap-1 overflow-x-auto rounded-pill px-2 py-2 shadow-dock sm:gap-2 sm:px-3">
        {WORKSPACES.map((workspace) => (
          <li key={workspace.id} className="shrink-0">
            <DockItem
              workspace={workspace}
              isActive={workspace.id === activeWorkspace}
              onSelect={setActiveWorkspace}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
