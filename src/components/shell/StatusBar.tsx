import { useClock } from "@/hooks/useClock";
import { useWorkspaceStore } from "@/store/workspaceStore";
import { WORKSPACES } from "@/data/workspaces";

export function StatusBar() {
  const time = useClock();
  const activeWorkspace = useWorkspaceStore((s) => s.activeWorkspace);
  const active = WORKSPACES.find((w) => w.id === activeWorkspace);

  return (
    <header
      className="glass fixed inset-x-0 top-0 z-40 h-10 rounded-none border-x-0 border-t-0"
      aria-label="System status bar"
    >
      <div className="mx-auto grid h-full max-w-[1280px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:grid-cols-3">
        <div className="flex min-w-0 items-center gap-2">
          <span className="size-2 shrink-0 rounded-pill bg-primary shadow-glow" />
          <span className="truncate font-display text-sm font-semibold tracking-tight">
            ManviOS
          </span>
        </div>

        <div className="hidden items-center justify-center gap-2 text-xs text-muted-foreground sm:flex">
          <span className="size-1.5 rounded-pill bg-success" />
          <span>Online</span>
          {active ? (
            <span className="text-subtle-foreground">· {active.label}</span>
          ) : null}
        </div>

        <div className="flex items-center justify-end text-xs tabular-nums text-muted-foreground">
          <span suppressHydrationWarning>{time ?? "--:--"}</span>
        </div>
      </div>
    </header>
  );
}
