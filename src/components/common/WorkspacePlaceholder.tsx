interface WorkspacePlaceholderProps {
  title: string;
  hint?: string;
}

/** Temporary workspace body used until each workspace is designed. */
export function WorkspacePlaceholder({ title, hint }: WorkspacePlaceholderProps) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <span className="glass rounded-pill px-4 py-1.5 text-xs tracking-[0.2em] text-muted-foreground uppercase">
        Workspace
      </span>
      <h1 className="text-3xl font-bold sm:text-5xl">{title}</h1>
      {hint ? (
        <p className="max-w-md text-sm text-subtle-foreground sm:text-base">{hint}</p>
      ) : null}
    </div>
  );
}
