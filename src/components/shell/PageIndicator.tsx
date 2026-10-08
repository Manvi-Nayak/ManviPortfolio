import { WORKSPACES } from "@/data/workspaces";
import { useWorkspaceStore } from "@/store/workspaceStore";

/** Compact, keyboard-accessible position and direct page navigation. */
export function PageIndicator() {
  const activeWorkspace = useWorkspaceStore((state) => state.activeWorkspace);
  const setActiveWorkspace = useWorkspaceStore((state) => state.setActiveWorkspace);
  const activeIndex = WORKSPACES.findIndex((workspace) => workspace.id === activeWorkspace);
  const pageNumber = String(activeIndex + 1).padStart(2, "0");

  return (
    <nav
      aria-label="Page position"
      className="fixed right-1 top-1/2 z-30 flex -translate-y-1/2 flex-col items-center gap-2 sm:right-3 sm:gap-3"
    >
      <span aria-live="polite" className="font-display text-[0.65rem] tabular-nums tracking-[0.12em] text-muted-foreground">
        {pageNumber} <span className="text-subtle-foreground">/ 06</span>
      </span>
      <ol className="flex flex-col items-center gap-2" aria-label="Portfolio pages">
        {WORKSPACES.map((workspace, index) => (
          <li key={workspace.id}>
            <button
              type="button"
              aria-label={`Go to ${workspace.label}, page ${index + 1} of 6`}
              aria-current={activeWorkspace === workspace.id ? "page" : undefined}
              onClick={() => setActiveWorkspace(workspace.id)}
              className="group flex size-5 items-center justify-center rounded-pill focus-visible:outline-none"
            >
              <span
                className={`block rounded-pill transition-[width,height,background-color,box-shadow] duration-300 motion-reduce:transition-none ${
                  activeWorkspace === workspace.id
                    ? "h-2.5 w-2.5 bg-primary shadow-glow"
                    : "size-1.5 bg-subtle-foreground/50 group-hover:bg-primary/70"
                }`}
              />
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
}