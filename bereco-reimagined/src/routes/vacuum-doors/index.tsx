import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import heroImg from "@/assets/hero-homes.jpg";
import case1 from "@/assets/case-1.jpg";
import case2 from "@/assets/case-2.jpg";
import case3 from "@/assets/case-3.jpg";
import installImg from "@/assets/install.jpg";

export const Route = createFileRoute("/vacuum-doors/")({
  head: () => ({
    meta: [
      { title: "Vacuum Glazed Doors — Entrance, French, Patio, Bi-fold | Vacuum Glazed Windows Ltd" },
      { name: "description", content: "Supply specialists in vacuum-glazed timber doors: entrance, French, sliding patio and bi-fold. 7mm units, 0.4 W/m²K, premium European timber." },
    ],
  }),
  component: VacuumDoorsPage,
});

const PRODUCTS = [
  { title: "Entrance Doors", blurb: "Solid European timber front doors with vacuum glazed panels and multi-point security locking.", href: "/vacuum-doors/entrance", img: case1 },
  { title: "French Doors", blurb: "Elegant twin-leaf outswing doors connecting living spaces to gardens and terraces.", href: "/vacuum-doors/french", img: case2 },
  { title: "Sliding Patio Doors", blurb: "Slim-framed timber sliding doors — maximum glass area, minimum frame depth.", href: "/vacuum-doors/sliding-patio", img: case3 },
  { title: "Bi-fold Doors", blurb: "Full-width aperture opening — multiple panels fold back to blur the boundary between inside and out.", href: "/vacuum-doors/bi-fold", img: installImg },
];

function VacuumDoorsPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[480px] w-full overflow-hidden">
          <img src={heroImg} alt="Vacuum glazed timber doors" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-secondary/30 to-secondary/70" />
          <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">Vacuum Glazed Windows Ltd</p>
            <h1 className="max-w-3xl text-balance font-display text-4xl text-white md:text-5xl lg:text-6xl">
              Vacuum Glazed Timber Doors
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/85">
              Four door styles. Premium European timber. Ultra-thin 7mm vacuum insulated glass throughout.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="/contact" className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition hover:bg-primary-deep">
                Request a quote
              </a>
              <a href="/vacuum-windows" className="rounded-full bg-white/10 px-7 py-3.5 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/20">
                View windows
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Specs strip */}
      <section className="border-b border-border bg-background py-12">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-4 md:grid-cols-4 text-center">
          {[
            ["1.0", "W/m²K", "Standard U-value"],
            ["0.4", "W/m²K", "Premium U-value"],
            ["7", "mm", "Unit thickness"],
            ["8–10", "wks", "Supply lead time"],
          ].map(([v, u, l]) => (
            <div key={l}>
              <div className="font-display text-4xl text-primary-deep">{v}<span className="ml-1 text-sm text-muted-foreground">{u}</span></div>
              <p className="mt-1 text-sm text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Our door range</p>
            <h2 className="font-display text-4xl text-secondary md:text-5xl">Choose your door style</h2>
            <p className="mt-4 text-muted-foreground">All door styles are available with our 7mm vacuum insulated units, factory-finished in any RAL or BS colour, with a full range of ironmongery options.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map((p) => (
              <a key={p.href} href={p.href} className="group block overflow-hidden rounded-2xl bg-card transition">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-secondary">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-deep">
                    Find out more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
