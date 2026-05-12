import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, ThermometerSun, Layers, MoveHorizontal } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ClickableGallery } from "@/components/site/ClickableGallery";
import lcMansionImg from "@/assets/lc-mansion.png";
import fcBayImg from "@/assets/fc-bay.png";
import fcInteriorImg from "@/assets/fc-interior.png";
import lcMewsImg from "@/assets/lc-mews.png";
import fcGreenImg from "@/assets/fc-green.png";
import lcExtensionImg from "@/assets/lc-extension.png";
import fcTimberImg from "@/assets/fc-timber.png";
import fcStoneImg from "@/assets/fc-stone.png";
import lcHandleImg from "@/assets/lc-handle.png";
import fcVacuumImg from "@/assets/fc-vacuum.png";

export const Route = createFileRoute("/vacuum-doors/sliding-patio")({
  head: () => ({
    meta: [
      { title: "Vacuum Glazed Sliding Patio Doors | Vacuum Glazed Windows Ltd" },
      {
        name: "description",
        content:
          "Slim-framed timber sliding patio doors with vacuum insulated glass. Maximum aperture, minimum frame. 7mm units, 0.4 W/m²K. Single or multi-track up to 6m+.",
      },
    ],
  }),
  component: SlidingPatioPage,
});

const GALLERY_IMAGES = [
  { src: fcBayImg, alt: "Sliding patio doors — rear elevation of a London period property" },
  { src: fcInteriorImg, alt: "Sliding patio doors — interior view looking onto a garden" },
  { src: lcMewsImg, alt: "Sliding patio doors on a contemporary London mews" },
  { src: fcGreenImg, alt: "Green painted sliding patio doors on a period property" },
];

const TABS = ["Styles", "Glazing", "Hardware", "Security", "Performance", "Technical"] as const;
type Tab = (typeof TABS)[number];

const FAQS = [
  {
    q: "What is the difference between sliding patio and bi-fold doors?",
    a: "Sliding patio doors glide horizontally on a track — one or more panels slide behind a fixed panel. Bi-fold doors fold accordion-style on a hinge-and-track system. Sliding patio doors give a cleaner elevation (no stacked panels to one side), require less maintenance hardware, and are generally better for spans where a wide unobstructed view is the priority. Bi-fold doors open up more of the aperture width but stack panels to the side.",
  },
  {
    q: "How large can sliding patio panels be?",
    a: "Individual panels can be up to 1,400mm wide and 2,800mm tall. Single-track two-panel configurations reach up to 5,000mm overall width; multi-track configurations extend to 8,000mm and beyond. Our engineers will advise on the optimal panel count and track configuration for any aperture.",
  },
  {
    q: "How does the near-flush threshold work?",
    a: "Our low-profile threshold sits just 15mm above finished floor level — the minimum achievable with a weather-tight rebated sill. This creates a near-seamless visual connection between interior and exterior and eliminates the trip hazard of traditional raised thresholds. A flat threshold option (0mm) is available for internal or covered applications.",
  },
  {
    q: "Are timber sliding patio doors as durable as aluminium?",
    a: "Our Accoya® premium option has a Class 1 durability rating — the highest for any timber — with a 50-year above-ground guarantee, exceeding the performance of most aluminium powder-coat systems. European Redwood and Dark Red Meranti with Teknos factory-applied paint or stain achieve a 10-year finish warranty under normal maintenance conditions.",
  },
  {
    q: "What timber species are available?",
    a: "Our sliding patio doors are available in European Redwood (Scots Pine softwood), Dark Red Meranti hardwood, and Accoya® (acetylated radiata pine) as our premium option. All from FSC/PEFC certified sources and factory-finished in any RAL, NCS or BS colour.",
  },
  {
    q: "What is the lead time for vacuum-glazed sliding patio doors?",
    a: "Our supply-only lead time is 8–10 weeks from order confirmation. For multi-track configurations above 5,000mm, allow 10–12 weeks. Full specification pack, technical drawings and installation notes included.",
  },
];

function TabContent({ tab }: { tab: Tab }) {
  if (tab === "Styles") {
    const styles = [
      { name: "2-Panel Single Track", desc: "One fixed, one sliding — the classic patio configuration up to 5m" },
      { name: "3-Panel Single Track", desc: "One fixed, two sliding — wider apertures with two sliding panels" },
      { name: "4-Panel Dual Track", desc: "Two fixed, two sliding — symmetrical opening for wide apertures" },
      { name: "Lift & Slide", desc: "Handle lifts panel off sill for effortless operation of heavy or large panels" },
      { name: "Corner Configuration", desc: "Two tracks meeting at a corner — full corner opening for open-plan living" },
      { name: "Multi-Track (6-panel+)", desc: "Up to 8m+ wide — for large rear extensions and new-build schemes" },
    ];
    return (
      <div>
        <h2 className="font-display text-2xl text-secondary">Configurations for any aperture</h2>
        <p className="mt-3 leading-relaxed text-secondary/75">
          Every configuration is available with vacuum glazed panels, any timber species, and a full range of hardware finishes. Single or multi-track — specify to suit your aperture.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {styles.map((s) => (
            <div key={s.name} className="flex items-start gap-3 rounded-xl border border-border bg-background p-4">
              <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary" />
              <div>
                <p className="text-sm font-semibold text-secondary">{s.name}</p>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (tab === "Glazing") {
    return (
      <div>
        <h2 className="font-display text-2xl text-secondary">Vacuum glazed sliding panels</h2>
        <p className="mt-3 leading-relaxed text-secondary/75">
          Our 7mm vacuum units are fitted in every sliding and fixed panel — delivering triple-glazing performance in a slim timber frame with maximum glass area.
        </p>
        <div className="mt-6 space-y-3">
          {[
            {
              name: "Standard Vacuum Unit",
              spec: "1.0 W/m²K · 7mm",
              desc: "Better than most conventional double glazing. Accepted for conservation and listed building consents.",
            },
            {
              name: "Premium Vacuum Unit",
              spec: "0.4 W/m²K · 7mm",
              desc: "Best-in-class thermal performance. Equivalent to top-rated triple glazing — 75% thinner.",
            },
            {
              name: "Acoustic Vacuum Unit",
              spec: "Up to 36 dB · 7mm",
              desc: "Laminated vacuum unit for properties on busy streets or near transport corridors.",
            },
          ].map((g) => (
            <div key={g.name} className="rounded-xl border border-border p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-semibold text-secondary">{g.name}</p>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary-deep">
                  {g.spec}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{g.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm text-secondary/70">
          Horizontal glazing bars available for period-style panels. Clean unbarred panels as standard.
        </p>
      </div>
    );
  }

  if (tab === "Hardware") {
    const items = [
      "Precision Stainless Steel Track",
      "Chrome Inline Pull Handle",
      "Matt Black Bar Handle",
      "Satin Nickel Flush Pull",
      "Low-Profile Threshold — 15mm",
      "Flat Threshold — 0mm (internal)",
      "Anti-lift Security Pins",
      "Soft-Close End Buffer",
    ];
    return (
      <div>
        <h2 className="font-display text-2xl text-secondary">Sliding patio hardware</h2>
        <p className="mt-3 leading-relaxed text-secondary/75">
          Precision-engineered stainless steel running gear rated for panels up to 200kg. Smooth, effortless operation across any span. Full range of handle finishes to match your ironmongery scheme.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {items.map((h) => (
            <div key={h} className="flex items-center gap-2 rounded-lg border border-border px-3 py-2.5">
              <span className="h-1.5 w-1.5 flex-none rounded-full bg-primary" />
              <span className="text-xs text-secondary/80">{h}</span>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm text-secondary/70">
          Handle finishes: Antique Brass · Polished Brass · Antique Black · Polished Chrome · Satin Chrome · Polished Nickel · Satin Nickel · Gunmetal · Stainless Steel · Matt Black
        </p>
      </div>
    );
  }

  if (tab === "Security") {
    const features = [
      "Multi-point inline locking — active panel",
      "Hook-bolt or deadbolt locking into sill and head",
      "Anti-lift pins — all panels",
      "PAS 24:2022 Enhanced Security certification",
      "Secured by Design upgrade available",
      "Internally glazed as standard",
      "Toughened glass in all panels",
      "Laminated glass upgrade available",
    ];
    return (
      <div>
        <h2 className="font-display text-2xl text-secondary">Security you can rely on</h2>
        <p className="mt-3 leading-relaxed text-secondary/75">
          Every sliding patio door we supply includes multi-point inline locking and anti-lift pins as standard. PAS 24:2022 certification is available across the full range.
        </p>
        <ul className="mt-6 space-y-3">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-3 text-sm text-secondary/80">
              <ShieldCheck className="h-4 w-4 flex-none text-primary" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (tab === "Performance") {
    const metrics: [string, string][] = [
      ["UW Range", "1.0 – 0.4 W/m²K"],
      ["Acoustic Range", "29 – 36 dB"],
      ["Air Permeability", "600 Pa (Class 4)"],
      ["Water Tightness", "400 Pa (Class 8A)"],
      ["Wind Load Resistance", "2000 Pa (Class 5C)"],
      ["Unit Thickness", "7 mm"],
      ["Max Panel Weight", "200 kg"],
      ["EPC Compliance", "2026 ready"],
    ];
    return (
      <div>
        <h2 className="font-display text-2xl text-secondary">Product specification</h2>
        <p className="mt-3 leading-relaxed text-secondary/75">
          Vacuum insulated panels exceed Part L 2023 requirements across the full assembly, including fixed and sliding panels.
        </p>
        <div className="mt-6 overflow-hidden rounded-xl border border-border divide-y divide-border">
          {metrics.map(([label, value]) => (
            <div key={label} className="flex items-center justify-between px-5 py-3">
              <span className="text-sm text-muted-foreground">{label}</span>
              <span className="text-sm font-semibold text-secondary">{value}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const sizes: [string, string, string][] = [
    ["2-Panel Single Track", "W 1500–5000mm", "H 1800–2800mm"],
    ["3-Panel Single Track", "W 2500–6000mm", "H 1800–2800mm"],
    ["4-Panel Dual Track", "W 3000–7000mm", "H 1800–2800mm"],
    ["Lift & Slide (2-Panel)", "W 2000–6000mm", "H 1800–3000mm"],
    ["Corner Config (2+2)", "Up to 6000mm each run", "H 1800–2800mm"],
  ];
  return (
    <div>
      <h2 className="font-display text-2xl text-secondary">Technical specifications</h2>
      <p className="mt-3 leading-relaxed text-secondary/75">
        Standard size ranges. Multi-track configurations beyond 8,000mm available — contact us for large-span or non-standard projects.
      </p>
      <div className="mt-5 space-y-1 text-sm text-secondary/70">
        <p>
          <span className="font-semibold">Softwood:</span> European Redwood (Scots Pine) — FSC/PEFC certified
        </p>
        <p>
          <span className="font-semibold">Hardwood:</span> Dark Red Meranti — FSC/PEFC certified
        </p>
        <p>
          <span className="font-semibold">Premium:</span> Accoya® (Acetylated Radiata Pine) — Class 1 durability · 50-year guarantee · FSC certified
        </p>
        <p>
          <span className="font-semibold">Finish:</span> Teknos factory-applied paint or stain, dual-colour option
        </p>
        <p>
          <span className="font-semibold">Threshold:</span> 15mm low-profile rebated · 0mm flat (internal / covered)
        </p>
      </div>
      <div className="mt-5 overflow-hidden rounded-xl border border-border divide-y divide-border">
        <div className="grid grid-cols-3 bg-secondary/5 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          <span>Configuration</span>
          <span>Width</span>
          <span>Height</span>
        </div>
        {sizes.map(([style, w, h]) => (
          <div key={style} className="grid grid-cols-3 px-5 py-3 text-sm">
            <span className="text-secondary/80">{style}</span>
            <span className="text-muted-foreground">{w}</span>
            <span className="text-muted-foreground">{h}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlidingPatioPage() {
  const [tab, setTab] = useState<Tab>("Styles");

  return (
    <PageLayout>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative h-[520px] overflow-hidden">
        <img
          src={lcMansionImg}
          alt="Vacuum glazed sliding patio doors on a large period property"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-secondary/10" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Vacuum Doors</p>
          <h1 className="max-w-2xl font-display text-5xl text-white md:text-6xl">
            Sliding Patio<br />Doors
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">
            Maximum glass, minimum frame — vacuum-glazed European timber sliding doors in single or multi-track configurations up to 6m+ wide.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-deep"
            >
              Request a quote
            </a>
            <a
              href="/vacuum-doors"
              className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              All doors
            </a>
          </div>
        </div>
        <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 lg:block">
          <a
            href="/contact"
            className="pointer-events-auto grid h-40 w-40 place-items-center rounded-full bg-primary text-center text-primary-foreground shadow-xl ring-8 ring-white/20"
          >
            <div className="px-4">
              <p className="text-[10px] uppercase tracking-widest">Up to</p>
              <p className="mt-1 font-display text-xl leading-tight">6m+ Wide</p>
              <p className="mt-1 text-[10px] opacity-90">7mm unit →</p>
            </div>
          </a>
        </div>
      </section>

      {/* ── Key benefits ─────────────────────────────────────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Why sliding patio</p>
          <h2 className="mb-12 font-display text-3xl text-secondary md:text-4xl">
            Vacuum-glazed timber sliding patio doors
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <MoveHorizontal className="h-8 w-8 text-primary" strokeWidth={1.5} />,
                title: "Large Spans",
                body: "Precision stainless steel running gear allows panels up to 200kg to glide effortlessly — single or multi-track configurations up to 6m+ wide.",
              },
              {
                icon: <Layers className="h-8 w-8 text-primary" strokeWidth={1.5} />,
                title: "Near-Flush Threshold",
                body: "Low-profile 15mm threshold option for easy access and a seamless visual connection between interior and exterior.",
              },
              {
                icon: <ThermometerSun className="h-8 w-8 text-primary" strokeWidth={1.5} />,
                title: "7mm Vacuum Units",
                body: "0.4 W/m²K in every panel from the thinnest glazing available — matching or exceeding the best triple-glazed aluminium sliding systems.",
              },
              {
                icon: <ShieldCheck className="h-8 w-8 text-primary" strokeWidth={1.5} />,
                title: "Multi-Point Security",
                body: "PAS 24:2022 certified inline locking and anti-lift pins as standard. Secured by Design available for any configuration.",
              },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl bg-card p-6 shadow-sm">
                {f.icon}
                <h3 className="mt-4 font-semibold text-secondary">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery + Tabs ───────────────────────────────────────── */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <ClickableGallery images={GALLERY_IMAGES} />
            <div>
              <div className="flex flex-wrap gap-0 border-b border-border">
                {TABS.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`-mb-px border-b-2 px-4 py-3 text-sm font-semibold transition ${
                      t === tab
                        ? "border-primary text-primary"
                        : "border-transparent text-muted-foreground hover:text-secondary"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div className="pt-8">
                <TabContent tab={tab} />
                <a
                  href="/contact"
                  className="mt-8 inline-block rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-deep"
                >
                  Get a supply price
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Homeowner / Professional Solutions ──────────────────── */}
      <section className="grid md:grid-cols-2">
        <div className="bg-cream px-8 py-16 md:px-16">
          <h2 className="font-display text-3xl text-secondary md:text-4xl">
            Homeowner Solutions&nbsp;»
          </h2>
          <p className="mt-4 leading-relaxed text-secondary/75">
            Opening up a rear wall or replacing ageing patio doors? Our supply-only service delivers vacuum-glazed sliding patio doors with full technical drawings and installation notes — direct to your contractor.
          </p>
          <a
            href="/homeowners"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-deep underline underline-offset-4 hover:text-primary"
          >
            Homeowner guide <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="bg-secondary px-8 py-16 text-white md:px-16">
          <h2 className="font-display text-3xl md:text-4xl">
            Professional Solutions&nbsp;»
          </h2>
          <p className="mt-4 leading-relaxed text-white/75">
            Architects, contractors and developers: our trade supply programme includes full specification packs, CAD drawings, BS and NCS colour matching, and scheduled delivery to site.
          </p>
          <a
            href="/trade-professionals"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary underline underline-offset-4 hover:text-primary-deep"
          >
            Trade &amp; professionals guide <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* ── Bespoke section ──────────────────────────────────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Bespoke</p>
              <h2 className="font-display text-3xl text-secondary md:text-4xl">
                Totally bespoke vacuum sliding patio doors
              </h2>
              <p className="mt-6 leading-relaxed text-secondary/80">
                Every sliding patio system we supply is configured to your exact aperture. Single-track two-panel systems up to 5,000mm; multi-track configurations up to 8,000mm and beyond. Panel sizes and track arrangements are engineered specifically for your opening — we provide full structural calculations for any configuration over 5m wide.
              </p>
              <p className="mt-4 leading-relaxed text-secondary/80">
                Corner configurations, lift-and-slide systems for heavy panels, and full timber surrounds are available. Period-style horizontal bars or Georgian-pattern astragal bars can be applied to any panel for conservation area contexts.
              </p>
              <a
                href="/contact"
                className="mt-8 inline-block rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-deep"
              >
                Get in touch
              </a>
            </div>
            <div className="overflow-hidden rounded-3xl">
              <img
                src={lcExtensionImg}
                alt="Bespoke sliding patio doors on a period property extension at dusk"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Timber section ───────────────────────────────────────── */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-3xl">
              <img
                src={fcTimberImg}
                alt="Engineered laminated timber frame cross-section showing sliding door construction"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Materials</p>
              <h2 className="font-display text-3xl text-secondary md:text-4xl">
                Softwood or hardwood timber frames
              </h2>
              <p className="mt-6 leading-relaxed text-secondary/80">
                Our sliding patio door frames are manufactured from certified sustainably sourced engineered laminated timber — eliminating the warping and distortion common in solid-section frames. We offer two standard species:
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "European Redwood",
                    sub: "Scots Pine · Softwood",
                    desc: "Ideal for painted finishes. Close, even grain gives a smooth factory-finished surface. FSC/PEFC certified.",
                  },
                  {
                    name: "Dark Red Meranti",
                    sub: "Hardwood",
                    desc: "Open grain accepts stain beautifully. More naturally durable, ideal for external exposures. FSC/PEFC certified.",
                  },
                  {
                    name: "Accoya®",
                    sub: "Acetylated Radiata Pine · Premium",
                    desc: "Class 1 durability, ultra-stable, 50-year above-ground guarantee. The premium choice for large-span systems. FSC certified.",
                  },
                ].map((t) => (
                  <div key={t.name} className="rounded-2xl bg-background p-5">
                    <p className="font-semibold text-secondary">{t.name}</p>
                    <p className="text-xs text-primary-deep">{t.sub}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                  </div>
                ))}
              </div>
              <a
                href="/contact"
                className="mt-8 inline-block rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-deep"
              >
                Book a free consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Heritage timber section ──────────────────────────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Heritage timber</p>
              <h2 className="font-display text-3xl text-secondary md:text-4xl">
                Heritage timber — outperforming aluminium alternatives
              </h2>
              <p className="mt-6 leading-relaxed text-secondary/80">
                Aluminium sliding patio systems dominate the large-aperture market — but our vacuum-glazed timber systems match or exceed their thermal and acoustic performance in a material conservation officers will actually approve for period properties and conservation areas.
              </p>
              <p className="mt-4 leading-relaxed text-secondary/80">
                Our 0.4&nbsp;W/m²K premium vacuum units are comparable to the best triple-glazed aluminium sliding systems — yet our timber frames are warmer to the touch, visually richer, and accepted on rear elevations of listed buildings and conservation area properties where aluminium is refused.
              </p>
              <a
                href="/heritage-listed-buildings"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary-deep underline underline-offset-4 hover:text-primary"
              >
                Heritage &amp; listed building guide <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="overflow-hidden rounded-3xl">
              <img
                src={fcStoneImg}
                alt="Timber sliding patio doors on a period stone heritage building"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── High performance ─────────────────────────────────────── */}
      <section className="bg-secondary py-24 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-3xl">
              <img
                src={lcHandleImg}
                alt="Inline pull handle on a timber sliding patio door"
                className="h-full w-full object-cover opacity-80"
              />
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Performance</p>
              <h2 className="font-display text-3xl md:text-4xl">
                High performance vacuum sliding patio doors
              </h2>
              <p className="mt-6 leading-relaxed text-white/80">
                Acoustic performance up to 36&nbsp;dB. Standard vacuum units deliver a U-value of 1.0&nbsp;W/m²K — 7% better than Part&nbsp;L 2023 guidelines. Our premium units achieve 0.4&nbsp;W/m²K — 60% better, comparable to a solid brick panel.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                {[
                  ["1.0", "W/m²K", "Standard unit"],
                  ["0.4", "W/m²K", "Premium unit"],
                  ["36", "dB", "Acoustic reduction"],
                  ["6m+", "", "Max aperture"],
                ].map(([v, u, l]) => (
                  <div key={l}>
                    <div className="font-display text-4xl text-primary">
                      {v}
                      <span className="ml-1 text-sm font-sans text-white/60">{u}</span>
                    </div>
                    <p className="mt-1 text-sm text-white/70">{l}</p>
                  </div>
                ))}
              </div>
              <a
                href="/contact"
                className="mt-8 inline-block rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-deep"
              >
                Book a free virtual consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── EPC 2026 ─────────────────────────────────────────────── */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <MoveHorizontal className="mx-auto h-12 w-12 text-primary" strokeWidth={1.4} />
          <h2 className="mt-6 font-display text-3xl text-secondary md:text-4xl">
            Ready for the October 2026 EPC standards
          </h2>
          <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-secondary/80">
            Our vacuum-glazed sliding patio panels exceed Part&nbsp;L 2023 building regulations — standard units are 7% better than the guideline minimum and premium units are 60% better. For rear extensions and renovations requiring 2026 EPC compliance, our 0.4&nbsp;W/m²K units are the highest-performing option available in any timber sliding door system.
          </p>
          <a
            href="/heritage-listed-buildings"
            className="mt-8 inline-block rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-deep"
          >
            Heritage &amp; EPC guide
          </a>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Questions</p>
          <h2 className="mb-10 font-display text-3xl text-secondary md:text-4xl">Sliding patio FAQ</h2>
          <Accordion type="single" collapsible>
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="py-5 text-base font-semibold text-secondary hover:no-underline hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 leading-relaxed text-secondary/75">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────── */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Customer reviews</p>
            <h2 className="font-display text-3xl text-secondary md:text-4xl">What our customers say</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                q: "The sliding patio system is beautiful — a 4.5m span with near-flush threshold connecting the kitchen to the garden. The vacuum glazing means no cold drafts in winter and the timber finish is far warmer than the aluminium alternative we considered.",
                n: "Richard · Wandsworth, SW18",
              },
              {
                q: "We specified Vacuum Glazed Windows Ltd's sliding patio for a rear extension on a conservation area terraced house. The conservation officer approved the timber system where aluminium had been refused. Thermal performance is exceptional.",
                n: "Natasha · Architect, Battersea",
              },
              {
                q: "The 6-metre multi-track system is a showpiece. Precision hardware, flawless factory finish, and the 0.4 W/m²K premium units mean the extension is genuinely comfortable year-round. Vacuum Glazed Windows Ltd's technical support was first class.",
                n: "Philip · Developer, Fulham",
              },
            ].map(({ q, n }) => (
              <figure key={n} className="rounded-2xl bg-background p-7">
                <div className="flex gap-0.5 text-primary">
                  {"★★★★★".split("").map((s, i) => (
                    <span key={i}>{s}</span>
                  ))}
                </div>
                <blockquote className="mt-4 leading-relaxed text-secondary/85">{q}</blockquote>
                <figcaption className="mt-5 text-sm font-semibold text-primary-deep">{n}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-secondary py-24 text-white">
        <div className="absolute inset-0 -z-10 opacity-20">
          <img src={fcVacuumImg} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl">Ready to specify sliding patio doors?</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
            Send us your aperture dimensions and preferred configuration. We'll return a full supply price and technical drawing pack within 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="/contact"
              className="rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition hover:bg-primary-deep"
            >
              Request a supply quote
            </a>
            <a
              href="/vacuum-doors"
              className="rounded-full border border-white/30 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View all doors
            </a>
          </div>
          <p className="mt-6 text-sm text-white/60">
            Or call us on{" "}
            <a href="tel:02038761234" className="font-semibold text-white underline underline-offset-4">
              020 3876 1234
            </a>
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
