import { AppBackground } from "@/components/shell/AppBackground";
import { Dock } from "@/components/shell/Dock";
import { StatusBar } from "@/components/shell/StatusBar";
import { WorkspaceContainer } from "@/components/shell/WorkspaceContainer";

/** ManviOS shell: background + status bar + workspace + dock. */
export function OSLayout() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AppBackground />
      <a
        href="#workspace"
        className="glass sr-only rounded-sm px-3 py-2 text-sm focus:not-sr-only focus:absolute focus:top-12 focus:left-4 focus:z-50"
      >
        Skip to workspace
      </a>
      <StatusBar />
      <WorkspaceContainer />
      <Dock />
    </div>
  );
}
