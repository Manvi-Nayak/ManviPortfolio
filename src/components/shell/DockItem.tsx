import { motion } from "motion/react";

import type { WorkspaceDefinition, WorkspaceId } from "@/types/workspace";

interface DockItemProps {
  workspace: WorkspaceDefinition;
  isActive: boolean;
  onSelect: (id: WorkspaceId) => void;
}

/** Single dock button: icon + label. Motion handles hover/active feel only. */
export function DockItem({ workspace, isActive, onSelect }: DockItemProps) {
  const Icon = workspace.icon;

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(workspace.id)}
      aria-label={`${workspace.label} workspace`}
      aria-current={isActive ? "page" : undefined}
      whileHover={{ y: -4, scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
      className={`group relative flex h-11 items-center gap-2 rounded-pill px-3 transition-colors focus-visible:outline-none sm:h-12 sm:px-3.5 ${
        isActive
          ? "text-foreground"
          : "text-muted-foreground hover:bg-glass-hover hover:text-foreground"
      }`}
    >
      {isActive ? (
        <motion.span
          layoutId="dock-active"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
          className="absolute inset-0 rounded-pill border border-primary/40 bg-glass shadow-glow"
        />
      ) : null}

      <Icon
        className={`relative size-5 shrink-0 ${isActive ? "text-primary" : ""}`}
        strokeWidth={1.75}
      />

      <span
        className={`relative hidden text-xs whitespace-nowrap md:inline ${
          isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
        }`}
      >
        {workspace.label}
      </span>

      <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-sm bg-surface/90 px-2 py-1 text-[11px] whitespace-nowrap text-muted-foreground opacity-0 shadow-glass backdrop-blur-md transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 md:hidden">
        {workspace.label}
      </span>
    </motion.button>
  );
}
