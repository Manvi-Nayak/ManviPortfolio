import { useEffect, useRef } from "react";

import { WORKSPACES } from "@/data/workspaces";
import { WORKSPACE_VIEWS } from "@/pages/workspaces";
import { useWorkspaceStore } from "@/store/workspaceStore";
import { PageIndicator } from "./PageIndicator";

/**
 * One continuous OS workspace with six scroll-snapped destinations.
 * The status bar and dock stay mounted while each workspace remains in the page.
 */
export function WorkspaceContainer() {
  const scrollRef = useRef<HTMLElement>(null);
  const activeWorkspace = useWorkspaceStore((s) => s.activeWorkspace);
  const setActiveWorkspace = useWorkspaceStore((s) => s.setActiveWorkspace);

  useEffect(() => {
    const scrollRoot = scrollRef.current;
    if (!scrollRoot) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const id = current?.target.getAttribute("data-workspace-page");
        const workspace = WORKSPACES.find((item) => item.id === id);
        if (workspace) setActiveWorkspace(workspace.id, false);
      },
      { rootMargin: "-38% 0px -38% 0px", threshold: [0, 0.01] },
    );

    scrollRoot.querySelectorAll("[data-workspace-page]").forEach((page) => observer.observe(page));
    return () => observer.disconnect();
  }, [setActiveWorkspace]);

  return (
    <main
      ref={scrollRef}
      id="workspace"
      role="main"
      tabIndex={-1}
      className="overflow-x-clip px-4 pt-16 pb-28 sm:px-6 sm:pb-32"
    >
      {WORKSPACES.map((workspace) => {
        const WorkspaceView = WORKSPACE_VIEWS[workspace.id];
        return (
          <section
            key={workspace.id}
            id={`page-${workspace.id}`}
            data-workspace-page={workspace.id}
            aria-label={`${workspace.label} workspace`}
            aria-current={activeWorkspace === workspace.id ? "page" : undefined}
            className="mx-auto flex min-h-[calc(100dvh-11rem)] w-full max-w-[1280px] scroll-mt-16 snap-start flex-col justify-center py-5"
          >
            <WorkspaceView />
          </section>
        );
      })}
      <PageIndicator />
    </main>
  );
}
