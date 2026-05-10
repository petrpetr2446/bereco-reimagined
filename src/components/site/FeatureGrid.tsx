import type { LucideIcon } from "lucide-react";

export function FeatureGrid({ items }: { items: { icon: LucideIcon; title: string; body: string }[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((it) => {
        const Icon = it.icon;
        return (
          <div key={it.title} className="rounded-2xl border border-border bg-card p-7">
            <Icon className="h-9 w-9 text-primary" strokeWidth={1.5} />
            <h3 className="mt-5 text-xl font-semibold text-secondary">{it.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
          </div>
        );
      })}
    </div>
  );
}
