import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, ThermometerSun, Layers, PanelLeftOpen } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ClickableGallery } from "@/components/site/ClickableGallery";
import lcExtensionImg from "@/assets/lc-extension.png";
import lcMansionImg from "@/assets/lc-mansion.png";
import fcBayImg from "@/assets/fc-bay.png";
import fcInteriorImg from "@/assets/fc-interior.png";
import lcTerraceImg from "@/assets/lc-terrace.png";
import fcMansionImg from "@/assets/fc-mansion.png";
import fcTimberImg from "@/assets/fc-timber.png";
import fcStoneImg from "@/assets/fc-stone.png";
import fcHandleImg from "@/assets/fc-handle.png";
import lcMewsImg from "@/assets/lc-mews.png";

export const Route = createFileRoute("/vacuum-doors/bi-fold")({
  head: () => ({
    meta: [
      { title: "Vacuum Glazed Bi-fold Doors | Vacuum Glazed Windows Ltd" },
      {
        name: "description",
        content:
          "Premium European timber bi-fold doors with 7mm vacuum insulated glass. Full-width aperture opening, flush threshold, heritage and contemporary designs. 2–6 panel configurations.",
      },
    ],
  }),
  component: BiFoldPage,
});

const GALLERY_IMAGES = [
  { src: lcMansionImg, alt: "Bi-fold doors on a large period property" },
  { src: fcBayImg, alt: "Bi-fold doors connecting a period London home to the garden" },
  { src: fcInteriorImg, alt: "Bi-fold doors — interior view showing full aperture opening" },
  { src: lcTerraceImg, alt: "Bi-fold doors on a Victorian London terrace" },
];

const TABS = ["Styles", "Glazing", "Hardware", "Security", "Performance", "Technical"] as const;
type Tab = (typeof TABS)[number];

const FAQS = [
  {
    q: "How many panels can bi-fold doors have?",
    a: "We supply bi-fold doors in 2, 3, 4, 5 and 6-panel configurations. The panels can be configured to fold entirely to one side (all-same-side) or split fold to both sides (split configuration). For apertures wider than 4,000mm, a split configuration is generally recommended for even panel distribution.",
  },
  {
    q: "What is the maximum aperture width for bi-fold doors?",
    a: "Standard six-panel configurations reach up to 5,500mm wide. For wider apertures, we can engineer multi-track or combined configurations up to 7,000mm. Panel widths range from 450mm to 900mm; optimal panel width for smooth operation is 600–750mm.",
  },
  {
    q: "How does the flush threshold option work?",
    a: "Our near-flush threshold sits just 15mm above finished floor level — the minimum achievable with a weather-tight rebated sill. A fully flat threshold (0mm) is available for internal or covered applications where weather performance is not required. Both options eliminate the trip hazard of traditional raised bi-fold thresholds.",
  },
  {
    q: "Are timber bi-fold doors accepted in conservation areas?",
    a: "Yes. Timber bi-fold doors with period-style applied glazing bars are regularly approved for rear elevations of listed buildings and conservation area properties. Our 7mm vacuum units replicate original single-glazed panel proportions exactly, and our factory finishes match any heritage colour to BS or NCS specification.",
  },
  {
    q: "How do bi-fold doors compare to sliding patio doors?",
    a: "Bi-fold doors open up to 90% of the aperture width by folding completely to one or both sides — more of the opening becomes usable but the stacked panels occupy space at the side when open. Sliding patio doors offer a cleaner elevation when open (no stacked panels to one side) and are generally preferred for spans where an unobstructed view is the priority. Both are available in the same timber species and vacuum glazing specification.",
  },
  {
    q: "What is the lead time for vacuum-glazed bi-fold doors?",
    a: "Our supply-only lead time is 8–10 weeks from order confirmation. For configurations above four panels or widths over 4,500mm, allow 10–12 weeks. Full specification pack, technical drawings and installation notes included.",
  },
];

function TabContent({ tab }: { tab: Tab }) {
  if (tab === "Styles") {
    const styles = [
      { name: "2-Panel (Same Side)", desc: "Both panels fold to one side — simple, minimal hardware" },
      { name: "3-Panel (Same Side)", desc: "Three panels folding to one side — up to 2,700mm wide" },
      { name: "4-Panel (Split 2+2)", desc: "Two panels fold each side — symmetrical, central opening" },
      { name: "4-Panel (Same Side)", desc: "All four panels fold to one side — up to 3,600mm wide" },
      { name: "5-Panel (Split 3+2)", desc: "Three panels fold one side, two the other — wider apertures" },
      { name: "6-Panel (Split 3+3)", desc: "Three panels fold each side — full-width opening up to 5.5m" },
    ];
    return (
      <div>
        <h2 className="font-display text-2xl text-secondary">Panel configurations</h2>
        <p className="mt-3 leading-relaxed text-secondary/75">
          Every configuration is available with vacuum glazed panels, period-style or contemporary profiles, and any timber, colour or hardware combination.
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
        <h2 className="font-display text-2xl text-secondary">Vacuum glazed panels</h2>
        <p className="mt-3 leading-relaxed text-secondary/75">
          Our 7mm vacuum units are fitted in every panel — fixed and folding — delivering consistent triple-glazing performance across the full aperture width.
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
          Applied bars: Georgian, marginal, horizontal patterns available on any panel. Period-style or minimal profiles.
        </p>
      </div>
    );
  }

  if (tab === "Hardware") {
    const items = [
      "Top-Hung Stainless Running Gear",
      "Concealed Stainless Hinges",
      "Chrome Inline Pull Handle",
      "Matt Black Bar Handle",
      "Satin Nickel Flush Pull",
      "Low-Profile Threshold — 15mm",
      "Flat Threshold — 0mm (internal)",
      "Multi-Point Espagnolette Lock",
    ];
    return (
      <div>
        <h2 className="font-display text-2xl text-secondary">Bi-fold door hardware</h2>
        <p className="mt-3 leading-relaxed text-secondary/75">
          Top-hung stainless steel running gear rated for smooth operation across the full panel array, with a minimum 25-year hardware guarantee. Full range of handle and pull finishes.
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
      "Multi-point espagnolette locking — traffic door leaf",
      "Hook bolts engaging head and sill — all folding leaves",
      "PAS 24:2022 Enhanced Security certification",
      "Secured by Design upgrade available",
      "Anti-lift security pins on all panels",
      "Concealed hinges — no external fixings",
      "Toughened glass in all panels as standard",
      "Laminated glass upgrade available",
    ];
    return (
      <div>
        <h2 className="font-display text-2xl text-secondary">Security you can rely on</h2>
        <p className="mt-3 leading-relaxed text-secondary/75">
          Every bi-fold door we supply includes multi-point espagnolette locking on the traffic door and hook bolts on all folding leaves. PAS 24:2022 certified as standard.
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
      ["Max Aperture Opening", "~90%"],
      ["EPC Compliance", "2026 ready"],
    ];
    return (
      <div>
        <h2 className="font-display text-2xl text-secondary">Product specification</h2>
        <p className="mt-3 leading-relaxed text-secondary/75">
          Vacuum insulated panels exceed Part L 2023 requirements across the full bi-fold assembly.
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
    ["2-Panel", "W 1200–1800mm", "H 1800–2800mm"],
    ["3-Panel", "W 1800–2700mm", "H 1800–2800mm"],
    ["4-Panel", "W 2400–3600mm", "H 1800–2800mm"],
    ["5-Panel", "W 3000–4500mm", "H 1800–2800mm"],
    ["6-Panel", "W 3600–5500mm", "H 1800–2800mm"],
  ];
  return (
    <div>
      <h2 className="font-display text-2xl text-secondary">Technical specifications</h2>
      <p className="mt-3 leading-relaxed text-secondary/75">
        Standard size ranges based on 600–750mm optimal panel width. Wider panels and multi-track configurations available — contact us for non-standard apertures.
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
          <span>Panels</span>
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

function BiFoldPage() {
  const [tab, setTab] = useState<Tab>("Styles");

  return (
    <PageLayout>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative h-[520px] overflow-hidden">
        <img
          src={lcExtensionImg}
          alt="Vacuum glazed bi-fold doors fully open on a period London home extension"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-secondary/10" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Vacuum Doors</p>
          <h1 className="max-w-2xl font-display text-5xl text-white md:text-6xl">
            Bi-fold<br />Doors
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">
            Full-width aperture opening in vacuum-glazed European timber — 2 to 6 panels, up to 90% open, flush threshold, heritage or contemporary.
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
              <p className="mt-1 font-display text-xl leading-tight">90% Open</p>
              <p className="mt-1 text-[10px] opacity-90">7mm unit →</p>
            </div>
          </a>
        </div>
      </section>

      {/* ── Key benefits ─────────────────────────────────────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Why bi-fold</p>
          <h2 className="mb-12 font-display text-3xl text-secondary md:text-4xl">
            Vacuum-glazed timber bi-fold doors
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <PanelLeftOpen className="h-8 w-8 text-primary" strokeWidth={1.5} />,
                title: "Full-Width Opening",
                body: "Up to 90% of aperture width opens completely — 2 to 6-panel configurations fold to one or both sides for any span.",
              },
              {
                icon: <Layers className="h-8 w-8 text-primary" strokeWidth={1.5} />,
                title: "Near-Flush Threshold",
                body: "15mm low-profile threshold creates a near-seamless indoor-outdoor visual connection and eliminates trip hazards.",
              },
              {
                icon: <ThermometerSun className="h-8 w-8 text-primary" strokeWidth={1.5} />,
                title: "7mm Vacuum Units",
                body: "0.4 W/m²K in every panel — the highest thermal performance available in any timber bi-fold system.",
              },
              {
                icon: <ShieldCheck className="h-8 w-8 text-primary" strokeWidth={1.5} />,
                title: "Heritage or Contemporary",
                body: "Period-authentic glazing bars for conservation contexts, or clean minimal sightlines for modern extensions — made to order.",
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
            Creating a rear extension or replacing ageing bi-fold doors? Our supply-only service delivers vacuum-glazed bi-fold doors with full technical drawings and installation notes — direct to your contractor.
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
                Totally bespoke vacuum bi-fold doors
              </h2>
              <p className="mt-6 leading-relaxed text-secondary/80">
                Every bi-fold system we supply is configured to your exact aperture. Two to six panels in same-side or split configurations; overall widths from 1,200mm to 5,500mm. Corner configurations connecting two elevations and combined sliding-and-folding systems are available for large-span projects.
              </p>
              <p className="mt-4 leading-relaxed text-secondary/80">
                Period-authentic profiles with applied Georgian bars, marginal bars or horizontal bar patterns can be specified for any panel. Contemporary minimal profiles with clean unbarred panes are available for modern extension schemes. All finishes are Teknos factory-applied with 10-year warranty.
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
                src={fcMansionImg}
                alt="Bespoke bi-fold doors on a grand period London property"
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
                alt="Engineered laminated timber frame cross-section showing bi-fold door construction"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Materials</p>
              <h2 className="font-display text-3xl text-secondary md:text-4xl">
                Softwood or hardwood timber frames
              </h2>
              <p className="mt-6 leading-relaxed text-secondary/80">
                Our bi-fold door frames are manufactured from certified sustainably sourced engineered laminated timber — eliminating the warping and distortion common in solid-section frames. We offer two standard species:
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
                    desc: "Class 1 durability, ultra-stable, 50-year above-ground guarantee. The premier choice for demanding exposures. FSC certified.",
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

      {/* ── Heritage section ─────────────────────────────────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Heritage</p>
              <h2 className="font-display text-3xl text-secondary md:text-4xl">
                Period-authentic bi-fold doors for conservation areas
              </h2>
              <p className="mt-6 leading-relaxed text-secondary/80">
                Timber bi-fold doors with period-style applied glazing bars are regularly approved for rear extensions of listed buildings and conservation area properties where aluminium and uPVC systems are refused. Our 7mm vacuum units replicate original single-glazed panel proportions, and our factory finishes match any heritage colour to BS or NCS specification.
              </p>
              <p className="mt-4 leading-relaxed text-secondary/80">
                Standard vacuum units achieve a U-value of 1.0&nbsp;W/m²K — compliant with building regulations and accepted by virtually all planning authorities. Our 0.4&nbsp;W/m²K premium units deliver 60% better performance than the guideline minimum — the highest thermal performance available in any timber bi-fold system.
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
                alt="Period-authentic bi-fold doors on a heritage stone property"
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
                src={fcHandleImg}
                alt="Period handle on a timber bi-fold door panel"
                className="h-full w-full object-cover opacity-80"
              />
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Performance</p>
              <h2 className="font-display text-3xl md:text-4xl">
                High performance vacuum bi-fold doors
              </h2>
              <p className="mt-6 leading-relaxed text-white/80">
                Acoustic performance up to 36&nbsp;dB. Standard vacuum units deliver a U-value of 1.0&nbsp;W/m²K — 7% better than Part&nbsp;L 2023 guidelines. Our premium units achieve 0.4&nbsp;W/m²K — 60% better, the best thermal performance available in any timber bi-fold system.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                {[
                  ["1.0", "W/m²K", "Standard unit"],
                  ["0.4", "W/m²K", "Premium unit"],
                  ["36", "dB", "Acoustic reduction"],
                  ["90%", "", "Aperture opening"],
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
          <PanelLeftOpen className="mx-auto h-12 w-12 text-primary" strokeWidth={1.4} />
          <h2 className="mt-6 font-display text-3xl text-secondary md:text-4xl">
            Ready for the October 2026 EPC standards
          </h2>
          <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-secondary/80">
            Our vacuum-glazed bi-fold panels exceed Part&nbsp;L 2023 building regulations — standard units are 7% better than the guideline minimum and premium units are 60% better. For rear extensions and renovations requiring 2026 EPC compliance, our 0.4&nbsp;W/m²K units are the highest-performing option available in any timber bi-fold door system.
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
          <h2 className="mb-10 font-display text-3xl text-secondary md:text-4xl">Bi-fold door FAQ</h2>
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
                q: "The bi-fold doors have completely transformed the rear of our Victorian house. Opening all four panels on a summer day creates an incredible indoor-outdoor space. The vacuum glazing means we can also use the room in winter — genuinely comfortable throughout the year.",
                n: "Anna · Chiswick, W4",
              },
              {
                q: "We specified Vacuum Glazed Windows Ltd's bi-fold doors with period-style Georgian bars for a rear extension on a conservation area property. The heritage appearance was critical to planning approval and the 0.4 W/m²K premium units achieved the EPC rating required.",
                n: "Robert · Architect, Hammersmith",
              },
              {
                q: "The six-panel split configuration across the full rear elevation is extraordinary — 5.2 metres of full-width opening. The precision of the hardware, the quality of the timber and the factory finish are all first class.",
                n: "Claire · Developer, Barnes",
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
          <img src={lcMewsImg} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl">Ready to specify bi-fold doors?</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
            Send us your aperture dimensions and preferred panel count. We'll return a full supply price and technical drawing pack within 24 hours.
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
