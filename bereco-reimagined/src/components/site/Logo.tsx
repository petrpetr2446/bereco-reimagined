export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="/" className={`flex items-center gap-3 ${className}`} aria-label="Vacuum Glazed Windows Ltd — Home">
      <span className="grid h-11 w-11 place-items-center rounded-md bg-primary/15 ring-1 ring-primary/30">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-primary-deep">
          <rect x="3" y="3" width="18" height="18" rx="1.5" />
          <line x1="12" y1="3" x2="12" y2="21" />
          <line x1="3" y1="12" x2="21" y2="12" />
        </svg>
      </span>
      <span className="leading-none">
        <span className="block font-display text-2xl tracking-tight text-foreground">Vacuum<span className="text-primary"> Glazed</span></span>
        <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">Windows Ltd</span>
      </span>
    </a>
  );
}
