import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, ThermometerSun, Layers, Building2 } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ClickableGallery } from "@/components/site/ClickableGallery";
import ssHeroImg from "@/assets/ss-hero.png";
import ssGreenArchImg from "@/assets/ss-green-arch.png";
import ssFitchViewImg from "@/assets/ss-fitch-view.png";
import ssDarkFitchImg from "@/assets/ss-dark-fitch.png";
import ssGlazingBarsImg from "@/assets/ss-glazing-bars.png";
import ssFrameSectionImg from "@/assets/ss-frame-section.png";
import ssTimberImg from "@/assets/ss-timber.png";
import ssVacuumUnitImg from "@/assets/ss-vacuum-unit.png";
import ssFitchGardenImg from "@/assets/ss-fitch-garden.png";
import ssVacuumEdgeImg from "@/assets/ss-vacuum-edge.png";

export const Route = createFileRoute("/vacuum-windows/sliding-sash")({
  head: () => ({
    meta: [
      { title: "Sliding Sash Windows — Vacuum Glazed | Vacuum Glazed Windows Ltd" },
      {
        name: "description",
        content:
          "Vacuum glazed sliding sash windows in authentic period profiles. 7mm units, 0.4 W/m²K, sash horns and putty chamfers matched to your originals. Conservation area approved.",
      },
    ],
  }),
  component: SlidingSashPage,
});

const GALLERY_IMAGES = [
  { src: ssGreenArchImg, alt: "Green painted sliding sash windows in an arched yellow-brick facade" },
  { src: ssFitchViewImg, alt: "Period brass fitch fastener with London brick streetscape beyond" },
  { src: ssDarkFitchImg, alt: "Dark painted sliding sash window with brass ironmongery and period lantern" },
  { src: ssGlazingBarsImg, alt: "Close-up of glazing bars on a white sliding sash window" },
];

const TABS = ["Styles", "Glazing", "Ironmongery", "Security", "Performance", "Technical"] as const;
type Tab = (typeof TABS)[number];

const FAQS = [
  {
    q: "What is a sliding sash window?",
    a: "A sliding sash window has two sashes — upper and lower — that slide vertically past each other within a frame. The lower sash rises and the upper sash descends to create ventilation at both top and bottom simultaneously. This is the defining window type of Georgian, Regency, Victorian and Edwardian London architecture.",
  },
  {
    q: "What is the difference between box sash and spiral balance sash?",
    a: "A box sash (traditional) uses cast-iron weights suspended on sash cords within hollow box jambs to counterbalance each sash. A spiral balance sash uses modern spring-loaded spiral mechanisms concealed within the stiles. Box sash is the period-correct option for pre-1940 properties and preferred by conservation officers; spiral balance is lighter, requires no box jamb, and is ideal for replacements where the original box no longer exists.",
  },
  {
    q: "Are vacuum-glazed sliding sash windows accepted in conservation areas?",
    a: "Yes. Because our 7mm vacuum units fit within original rebate depths and our profiles replicate original putty-face sight lines, conservation officers cannot distinguish our installed windows from original single glazing at street level. We have supplied vacuum-glazed sash windows to listed buildings and conservation areas across London, including Grades I and II* listed properties.",
  },
  {
    q: "Can you replicate original sash profiles exactly?",
    a: "Yes. We can match original ovolo or lambs tongue glazing bar profiles, sash horn sizes, putty chamfer depths, staff bead widths and parting bead profiles. Send us a photograph or a measured drawing and our draughtsmen will produce a replication drawing for your approval before manufacture.",
  },
  {
    q: "What ironmongery options are available for sash windows?",
    a: "We offer period-authentic sash furniture in 10+ finishes: Georgian fitch, Brighton fitch and New York fitch fasteners; sash lifts in plain, flush and ring patterns; sash locks, inline security restrictors and dummy sash stays. Finishes include Antique Brass, Polished Brass, Antique Black, Polished Chrome, Satin Chrome, Polished Nickel and Gunmetal.",
  },
  {
    q: "What lead time should I expect for vacuum-glazed sliding sash windows?",
    a: "Our supply-only lead time is 8–10 weeks from order confirmation. We supply to homeowners, architects and joinery contractors across the UK with a full specification pack, technical drawings and installation notes included.",
  },
];

function TabContent({ tab }: { tab: Tab }) {
  if (tab === "Styles") {
    const styles = [
      { name: "2-over-2 (Paired)", desc: "Two panes upper, two panes lower — classic Victorian town house" },
      { name: "6-over-6", desc: "Six panes per sash — Georgian and Regency pattern" },
      { name: "4-over-4", desc: "Four panes per sash — late Georgian to early Victorian" },
      { name: "1-over-1", desc: "Full pane each sash — late Victorian and Edwardian, plain meeting rail" },
      { name: "8-over-8", desc: "Eight panes per sash — early Georgian, narrow glazing bars" },
      { name: "Venetian (3-over-3)", desc: "Three panes each — common in double-depth bays" },
      { name: "Fixed / Dummy Sash", desc: "Non-opening sash for matching areas where ventilation is not required" },
    ];
    return (
      <div>
        <h2 className="font-display text-2xl text-secondary">Glazing bar arrangements</h2>
        <p className="mt-3 leading-relaxed text-secondary/75">
          Every arrangement is available with our 7mm vacuum glazed units, applied glazing bars, and any colour or ironmongery combination. Box sash or spiral balance — specify at order.
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
        <h2 className="font-display text-2xl text-secondary">Choice of vacuum glazing</h2>
        <p className="mt-3 leading-relaxed text-secondary/75">
          Our 7mm vacuum insulated glass sits within original sash rebate depths without structural alteration — delivering triple-glazing performance in a profile indistinguishable from original single glazing.
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
          Glazing bar profiles: 16mm lambs tongue · 25mm / 35mm ovolo · 48mm bold ovolo. Applied bars, not structural.
        </p>
      </div>
    );
  }

  if (tab === "Ironmongery") {
    const items = [
      "Georgian Fitch Fastener",
      "Brighton Fitch Fastener",
      "New York Fitch Fastener",
      "Sash Lift — Plain Bar",
      "Sash Lift — Ring Pull",
      "Sash Lift — Flush",
      "Inline Sash Lock",
      "Casement Stay / Restrictor",
    ];
    return (
      <div>
        <h2 className="font-display text-2xl text-secondary">Period sash ironmongery</h2>
        <p className="mt-3 leading-relaxed text-secondary/75">
          Every handle and fastener is available in 10+ period metal finishes. Matching sash lifts, fitch fasteners and inline security restrictors supplied with every frame.
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
          Finishes: Antique Brass · Polished Brass · Antique Black · Bronze · Polished Chrome · Satin Chrome · Polished Nickel · Satin Nickel · Gunmetal · Stainless Steel
        </p>
      </div>
    );
  }

  if (tab === "Security") {
    const features = [
      "Inline sash locks on lower and upper meeting rail",
      "Dual-screw window locks for both sashes",
      "Hinge-bolt restrictors — secure night-vent position",
      "Child safety inline restrictors",
      "Internally glazed as standard",
      "Toughened or laminated glass options",
      "PAS 24:2022 Enhanced Security available on request",
    ];
    return (
      <div>
        <h2 className="font-display text-2xl text-secondary">Security you can rely on</h2>
        <p className="mt-3 leading-relaxed text-secondary/75">
          Every sliding sash we supply includes sash locks and restrictors as standard. PAS 24:2022 certification is available across our full range.
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
      ["Air Leakage", "0.2 m³/hr"],
      ["Unit Thickness", "7 mm"],
      ["EPC Compliance", "2026 ready"],
    ];
    return (
      <div>
        <h2 className="font-display text-2xl text-secondary">Product specification</h2>
        <p className="mt-3 leading-relaxed text-secondary/75">
          Vacuum insulated glass exceeds Part L 2023 requirements and is designed to meet the 2026 EPC minimum standards for all property types.
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
    ["Box Sash — Single", "W 400–1050mm", "H 900–2200mm"],
    ["Box Sash — Pair", "W 800–2100mm", "H 900–2200mm"],
    ["Spiral Balance — Single", "W 400–1050mm", "H 700–2200mm"],
    ["Spiral Balance — Pair", "W 800–2100mm", "H 700–2200mm"],
    ["Fixed / Dummy Sash", "W 400–2100mm", "H 400–2200mm"],
  ];
  return (
    <div>
      <h2 className="font-display text-2xl text-secondary">Technical specifications</h2>
      <p className="mt-3 leading-relaxed text-secondary/75">
        Standard size ranges. Bespoke sash windows available to match any existing opening — send us your frame measurements for a custom quotation.
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
          <span className="font-semibold">Balance:</span> Box sash (weights + cord) or spiral balance — specify at order
        </p>
      </div>
      <div className="mt-5 overflow-hidden rounded-xl border border-border divide-y divide-border">
        <div className="grid grid-cols-3 bg-secondary/5 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          <span>Type</span>
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

function SlidingSashPage() {
  const [tab, setTab] = useState<Tab>("Styles");

  return (
    <PageLayout>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative h-[520px] overflow-hidden">
        <img
          src={ssHeroImg}
          alt="Grand Georgian interior with full-height sliding sash windows overlooking a garden"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-secondary/10" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Vacuum Windows</p>
          <h1 className="max-w-2xl font-display text-5xl text-white md:text-6xl">
            Sliding Sash<br />Windows
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">
            The quintessential British period window — vacuum glazed for the 21st century. 0.4&nbsp;W/m²K in just 7mm, indistinguishable from original single glazing.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-deep"
            >
              Request a quote
            </a>
            <a
              href="/vacuum-windows"
              className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              All windows
            </a>
          </div>
        </div>
        <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 lg:block">
          <a
            href="/heritage-listed-buildings"
            className="pointer-events-auto grid h-40 w-40 place-items-center rounded-full bg-primary text-center text-primary-foreground shadow-xl ring-8 ring-white/20"
          >
            <div className="px-4">
              <p className="text-[10px] uppercase tracking-widest">Period</p>
              <p className="mt-1 font-display text-xl leading-tight">Authentic</p>
              <p className="mt-1 text-[10px] opacity-90">7mm unit →</p>
            </div>
          </a>
        </div>
      </section>

      {/* ── Key benefits ─────────────────────────────────────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Why sliding sash</p>
          <h2 className="mb-12 font-display text-3xl text-secondary md:text-4xl">
            Vacuum-glazed sliding sash windows
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Layers className="h-8 w-8 text-primary" strokeWidth={1.5} />,
                title: "Period-Accurate Profiles",
                body: "Authentic sash horns, putty chamfers and glazing bar mouldings matched to your originals — indistinguishable from period single glazing at street level.",
              },
              {
                icon: <ThermometerSun className="h-8 w-8 text-primary" strokeWidth={1.5} />,
                title: "7mm Vacuum Units",
                body: "Fits within original sash rebate depths without structural alteration — 0.4 W/m²K in the same profile as your existing windows.",
              },
              {
                icon: <Building2 className="h-8 w-8 text-primary" strokeWidth={1.5} />,
                title: "Conservation Approved",
                body: "Accepted in conservation areas and for listed buildings where standard double glazing is refused. Our 7mm profile is the only glazing technology thin enough to comply.",
              },
              {
                icon: <ShieldCheck className="h-8 w-8 text-primary" strokeWidth={1.5} />,
                title: "Box or Spiral Balance",
                body: "Traditional box sash with weights and cord for period authenticity, or modern spiral balance for lighter, box-free installation — both to the same thermal specification.",
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
            Replacing sash windows in your period home? Our supply-only service delivers conservation-grade vacuum glazed sash windows with full technical drawings and installation notes — direct to your door or joiner.
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
                Totally bespoke vacuum sliding sash windows
              </h2>
              <p className="mt-6 leading-relaxed text-secondary/80">
                Every sash window we supply is made-to-measure. We can replicate any existing sash profile — from narrow 16mm Georgian glazing bars to bold Edwardian 48mm ovolos — with sash horns sized and profiled to match your originals. Box dimensions, parting beads, staff beads and weathering bars are all drawn from your measurements.
              </p>
              <p className="mt-4 leading-relaxed text-secondary/80">
                We accommodate horned and unhorned sashes, curved heads, swept arches, Venetian windows and Palladian arrangements. Lead detailing is available in diamond, square and Queen Anne patterns in antique black, silver, gold and old gold finishes.
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
                src={ssFrameSectionImg}
                alt="Cross-section of a bespoke sliding sash window frame showing sash construction detail"
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
                src={ssTimberImg}
                alt="Engineered laminated timber frame cross-section showing sash window construction detail"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Materials</p>
              <h2 className="font-display text-3xl text-secondary md:text-4xl">
                Softwood or hardwood timber frames
              </h2>
              <p className="mt-6 leading-relaxed text-secondary/80">
                Our sash window frames are manufactured from certified sustainably sourced engineered laminated timber — eliminating the movement and distortion common in solid-section frames. We offer two standard species:
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

      {/* ── Conservation section ─────────────────────────────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Heritage</p>
              <h2 className="font-display text-3xl text-secondary md:text-4xl">
                The original London window — authentically restored
              </h2>
              <p className="mt-6 leading-relaxed text-secondary/80">
                The sliding sash window is the defining feature of the Georgian, Regency, Victorian and Edwardian streetscape. Conservation officers across all 33 London boroughs specify that replacement windows must replicate original profiles exactly — and our vacuum-glazed sash windows are the only high-performance option that achieves this without compromise.
              </p>
              <p className="mt-4 leading-relaxed text-secondary/80">
                Standard vacuum units achieve a U-value of 1.0&nbsp;W/m²K — compliant with Part L 2023 and acceptable to virtually all planning authorities. Our 0.4&nbsp;W/m²K premium units deliver 60% better performance than the guideline minimum, making them the definitive solution for the 2026 EPC upgrade requirement.
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
                src={ssVacuumUnitImg}
                alt="Close-up of vacuum glazing unit with pillar dot spacers seated in a sliding sash rebate"
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
                src={ssFitchGardenImg}
                alt="Period fitch fastener on a white sliding sash window overlooking a garden"
                className="h-full w-full object-cover opacity-80"
              />
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Performance</p>
              <h2 className="font-display text-3xl md:text-4xl">
                High performance vacuum sliding sash windows
              </h2>
              <p className="mt-6 leading-relaxed text-white/80">
                Acoustic performance up to 36&nbsp;dB. Standard vacuum units deliver a U-value of 1.0&nbsp;W/m²K — 7% better than Part&nbsp;L 2023 guidelines. Our premium units achieve 0.4&nbsp;W/m²K — 60% better, comparable to a brick wall.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                {[
                  ["1.0", "W/m²K", "Standard unit"],
                  ["0.4", "W/m²K", "Premium unit"],
                  ["36", "dB", "Acoustic reduction"],
                  ["7", "mm", "Unit thickness"],
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
          <Building2 className="mx-auto h-12 w-12 text-primary" strokeWidth={1.4} />
          <h2 className="mt-6 font-display text-3xl text-secondary md:text-4xl">
            Ready for the October 2026 EPC standards
          </h2>
          <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-secondary/80">
            Our vacuum-glazed sash windows exceed Part&nbsp;L 2023 building regulations — with standard units 7% better than the guideline minimum and premium units 60% better. For period properties facing the 2026 EPC minimum, our 7mm units are often the only glazing technology conservation officers will accept that also achieves compliance.
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
          <h2 className="mb-10 font-display text-3xl text-secondary md:text-4xl">Sliding sash FAQ</h2>
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
                q: "Our Victorian terrace had original single-glazed sash windows — draughty and cold in winter. Vacuum Glazed Windows Ltd matched every dimension and profile exactly. The conservation officer approved without hesitation. Thermal difference is night and day.",
                n: "Rachel · Islington, N1",
              },
              {
                q: "We specified vacuum-glazed sash windows across a Grade II listed terrace in Hackney. The 7mm units were the only option the listing officer would accept. Performance has been exceptional across all twelve units.",
                n: "Ben · Conservation Architect, Hackney",
              },
              {
                q: "As the property manager for a Georgian estate, I needed sash windows that matched the originals precisely and performed to modern standards. Vacuum Glazed Windows Ltd delivered on both — the workmanship is superb.",
                n: "Catherine · Estate Manager, Chelsea",
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
          <img src={ssVacuumEdgeImg} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl">Ready to specify sliding sash windows?</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
            Send us your frame sizes and specification. We'll return a full supply price and technical drawing pack within 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="/contact"
              className="rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition hover:bg-primary-deep"
            >
              Request a supply quote
            </a>
            <a
              href="/vacuum-windows"
              className="rounded-full border border-white/30 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View all windows
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
