export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="glass px-4 py-1.5 rounded-full inline-flex items-center gap-2 text-sm text-neon-primary font-medium tracking-wide">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-primary"></span>
      </span>
      {children}
    </div>
  );
}
