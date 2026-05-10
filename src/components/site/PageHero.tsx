import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

interface Crumb { label: string; to?: string }

export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  crumbs = [],
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  image?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-secondary">
      {image && (
        <>
          <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/50 to-secondary/90" />
        </>
      )}
      <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-32">
        {crumbs.length > 0 && (
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-xs text-white/60">
            <Link to="/" className="hover:text-primary">Home</Link>
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight className="h-3 w-3" />
                {c.to ? <Link to={c.to as any} className="hover:text-primary">{c.label}</Link> : <span className="text-white/80">{c.label}</span>}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">{eyebrow}</p>}
        <h1 className="max-w-3xl font-display text-5xl text-white md:text-6xl">{title}</h1>
        {lede && <p className="mt-6 max-w-2xl text-lg text-white/80">{lede}</p>}
      </div>
    </section>
  );
}
