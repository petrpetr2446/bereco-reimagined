import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import heroImg from "@/assets/hero-homes.jpg";
import case1 from "@/assets/case-1.jpg";
import case2 from "@/assets/case-2.jpg";
import case3 from "@/assets/case-3.jpg";
import installImg from "@/assets/install.jpg";

export const Route = createFileRoute("/vacuum-windows/")({
  head: () => ({
    meta: [
      { title: "Vacuum Glazed Windows — Flush Casement, Sash, Tilt & Turn | Vacuum Glazed Windows Ltd" },
      { name: "description", content: "Supply specialists in vacuum-glazed timber windows: flush casement, lipped casement, sliding sash and tilt & turn. 7mm units, 0.4 W/m²K, heritage approved." },
    ],
  }),
  component: VacuumWindowsPage,
});

const PRODUCTS = [
  { title: "Flush Casement Windows", blurb: "Traditional sightlines flush with the outer frame — ideal for Georgian and Victorian properties.", href: "/vacuum-windows/flush-casement", img: case1 },
  { title: "Lipped Casement Windows", blurb: "Storm-proof rebated design with a slightly projecting sash for superior weather resistance.", href: "/vacuum-windows/lipped-casement", img: case2 },
  { title: "Sliding Sash Windows", blurb: "The quintessential British window — vacuum glazed for the 21st century in authentic period profiles.", href: "/vacuum-windows/sliding-sash", img: case3 },
  { title: "Tilt & Turn Windows", blurb: "Dual-mode European design: tilt for ventilation, turn fully open for cleaning and access.", href: "/vacuum-windows/tilt-and-turn", img: installImg },
];

function VacuumWindowsPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[480px] w-full overflow-hidden">
          <img src={heroImg} alt="Vacuum glazed timber windows" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-secondary/30 to-secondary/70" />
          <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">Vacuum Glazed Windows Ltd</p>
            <h1 className="max-w-3xl text-balance font-display text-4xl text-white md:text-5xl lg:text-6xl">
              Vacuum Glazed Timber Windows
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/85">
              Four window styles. One technology. 7mm vacuum insulated glass in premium European timber frames.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="/contact" className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition hover:bg-primary-deep">
                Request a quote
              </a>
              <a href="/heritage-listed-buildings" className="rounded-full bg-white/10 px-7 py-3.5 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/20">
                Heritage & listed
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
            ["36", "dB", "Acoustic reduction"],
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
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Our window range</p>
            <h2 className="font-display text-4xl text-secondary md:text-5xl">Choose your window style</h2>
            <p className="mt-4 text-muted-foreground">Every style is available with our 7mm standard or premium vacuum glazed units, in a wide range of timber species, paint colours and ironmongery finishes.</p>
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

      {/* Why vacuum glazing */}
      <section className="bg-secondary py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Why vacuum glazing?</p>
          <h2 className="font-display text-3xl md:text-4xl">The only glazing thin enough for period timber</h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/80">
            Standard double glazing requires 24–28mm of rebate depth — more than most historic timber window sections can accommodate without structural alteration. Vacuum glazing at 7mm fits within the original rebates of virtually any period frame, with no modification to the joinery and no change to the visual appearance of the window from street level.
          </p>
          <a href="/heritage-listed-buildings" className="mt-8 inline-block rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-deep">
            Heritage & listed building guide
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
