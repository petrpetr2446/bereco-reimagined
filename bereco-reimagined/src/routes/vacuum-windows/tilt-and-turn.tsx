import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, ThermometerSun, Layers, RotateCw } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ClickableGallery } from "@/components/site/ClickableGallery";
import ttHeroImg from "@/assets/tt-hero.png";
import ttGallery1Img from "@/assets/tt-gallery-1.png";
import ttGallery2Img from "@/assets/tt-gallery-2.png";
import ttGallery3Img from "@/assets/tt-gallery-3.png";
import ttGallery4Img from "@/assets/tt-gallery-4.png";
import ttBespokeImg from "@/assets/tt-bespoke.png";
import ttTimberImg from "@/assets/tt-timber.png";
import ttStoneImg from "@/assets/tt-stone.png";
import ttHandleImg from "@/assets/tt-handle.png";
import lcTerraceImg from "@/assets/lc-terrace.png";

export const Route = createFileRoute("/vacuum-windows/tilt-and-turn")({
  head: () => ({
    meta: [
      { title: "Tilt & Turn Windows — Vacuum Glazed | Vacuum Glazed Windows Ltd" },
      {
        name: "description",
        content:
          "Vacuum glazed tilt and turn windows in premium European timber. Dual-mode operation: tilt for ventilation, turn for full opening. 7mm units, 0.4 W/m²K. Conservation area approved.",
      },
    ],
  }),
  component: TiltAndTurnPage,
});

const GALLERY_IMAGES = [
  { src: ttGallery1Img, alt: "Tilt and turn window — interior view showing dual-mode operation" },
  { src: ttGallery2Img, alt: "Green painted tilt and turn window on a period London property" },
  { src: ttGallery3Img, alt: "Tilt and turn windows in a kitchen with quality painted timber frames" },
  { src: ttGallery4Img, alt: "Dark painted tilt and turn windows on a contemporary London mews" },
];

const TABS = ["Styles", "Glazing", "Ironmongery", "Security", "Performance", "Technical"] as const;
type Tab = (typeof TABS)[number];

const FAQS = [
  {
    q: "What is a tilt and turn window?",
    a: "A tilt and turn window has a single sash that operates in two modes controlled by a single handle. Rotate the handle 90° to tilt the top of the sash inward for secure background ventilation. Rotate the handle 180° to swing the sash fully open inward as a casement for maximum airflow and easy cleaning. The dual-mode mechanism is a central European standard, widely used in high-performance timber windows.",
  },
  {
    q: "How does the dual-mode handle work?",
    a: "The handle has three positions: closed (handle horizontal), tilt (handle pointing up — sash tilts inward at the top), and turn (handle pointing down — sash swings fully open inward from the side). The mechanism is a precision multi-point lock that engages the frame perimeter in all three positions for weather tightness and security.",
  },
  {
    q: "Are tilt and turn windows accepted in conservation areas?",
    a: "Yes, where large apertures are required in conservation areas. The European profile maximises glass area with minimal frame section — well suited to extensions and new-build schemes within conservation area boundaries where traditional casements would be architecturally inappropriate. Conservation officers regularly accept our timber tilt and turn windows on rear elevations and extensions.",
  },
  {
    q: "Can you clean both glass faces from inside?",
    a: "Yes. In the turn position, the sash swings fully open inward, giving unobstructed access to both faces of the glass from inside the room. This eliminates the need for scaffolding, ladders or external access for routine cleaning — a significant advantage on upper floors.",
  },
  {
    q: "What timber options are available?",
    a: "We offer slow-grown European softwood (Scots Pine / Redwood) and hardwood (Dark Red Meranti), both from FSC/PEFC certified forests. Accoya® (acetylated radiata pine) is available as our premium option with a 50-year above-ground durability guarantee. All frames are factory-finished using Teknos water-based paint or stain in any RAL, NCS or BS colour.",
  },
  {
    q: "What lead time should I expect for vacuum-glazed tilt and turn windows?",
    a: "Our supply-only lead time is 8–10 weeks from order confirmation. We supply to homeowners, architects and joinery contractors across the UK with a full specification pack, technical drawings and installation notes included.",
  },
];

function TabContent({ tab }: { tab: Tab }) {
  if (tab === "Styles") {
    const styles = [
      { name: "Single Tilt & Turn", desc: "One sash, dual-mode — the standard configuration for any aperture" },
      { name: "Tilt-Only", desc: "Top-hung tilt position only — ideal for ventilation where full opening is not required" },
      { name: "Fixed + Tilt & Turn", desc: "Fixed light alongside an operating sash — maximises glass area" },
      { name: "Coupled Pair", desc: "Two adjacent tilt and turn sashes — for wide openings" },
      { name: "Triple Combination", desc: "Fixed centre flanked by two tilt and turn sashes" },
      { name: "Passive House Specification", desc: "Enhanced seals and triple-vacuum glazed option for ultra-low energy builds" },
    ];
    return (
      <div>
        <h2 className="font-display text-2xl text-secondary">Configurations for every aperture</h2>
        <p className="mt-3 leading-relaxed text-secondary/75">
          Every configuration is available with our 7mm vacuum glazed units, contemporary or period-style applied bars, and any colour or ironmongery combination.
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
          Our 7mm vacuum insulated glass eliminates convection, condensation and the need for thick spacer bars — delivering triple-glazing performance in a slim European profile.
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
          Applied bars available: 16mm lambs tongue · 25mm / 35mm ovolo. Georgian, cottage and horizontal patterns.
        </p>
      </div>
    );
  }

  if (tab === "Ironmongery") {
    const handles = [
      "Cockspur Turn Handle — Chrome",
      "Cockspur Turn Handle — Brass",
      "Square-section Bar Handle — Matt Black",
      "Square-section Bar Handle — Stainless",
      "Lever Turn Handle — Satin Nickel",
      "Lever Turn Handle — Gunmetal",
      "Tilt-only Restrictor Bar",
      "Child Safety Tilt Restrictor",
    ];
    return (
      <div>
        <h2 className="font-display text-2xl text-secondary">Tilt and turn ironmongery</h2>
        <p className="mt-3 leading-relaxed text-secondary/75">
          Precision multi-position locking handles in 10+ metal finishes. The dual-mode mechanism engages the full frame perimeter in every handle position for continuous weather tightness.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {handles.map((h) => (
            <div key={h} className="flex items-center gap-2 rounded-lg border border-border px-3 py-2.5">
              <span className="h-1.5 w-1.5 flex-none rounded-full bg-primary" />
              <span className="text-xs text-secondary/80">{h}</span>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm text-secondary/70">
          Finishes: Antique Brass · Antique Black · Bronze · Polished Brass · Polished Chrome · Polished Nickel · Satin Chrome · Satin Nickel · Gunmetal · Stainless Steel
        </p>
      </div>
    );
  }

  if (tab === "Security") {
    const features = [
      "PAS 24:2022 Enhanced Security certification",
      "Multi-point perimeter locking in all three handle positions",
      "Tilt-mode secure ventilation — no gap large enough to reach handle",
      "Internal locking mode — handle key-lockable on request",
      "Child safety tilt restrictors available",
      "Internally glazed as standard",
      "Toughened or laminated glass options",
    ];
    return (
      <div>
        <h2 className="font-display text-2xl text-secondary">Security you can rely on</h2>
        <p className="mt-3 leading-relaxed text-secondary/75">
          The tilt and turn mechanism provides multi-point perimeter locking in every handle position — even the tilt ventilation position is fully secured against forced entry.
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
    ["Single Tilt & Turn", "W 400–1200mm", "H 500–2200mm"],
    ["Tilt-Only", "W 400–1400mm", "H 400–1400mm"],
    ["Fixed + Tilt & Turn", "W 700–2500mm", "H 500–2200mm"],
    ["Coupled Pair", "W 900–2500mm", "H 500–2200mm"],
    ["Triple Combination", "W 1200–4000mm", "H 500–2200mm"],
  ];
  return (
    <div>
      <h2 className="font-display text-2xl text-secondary">Technical specifications</h2>
      <p className="mt-3 leading-relaxed text-secondary/75">
        Standard size ranges. Bespoke apertures available — contact us for non-standard configurations or passive house detailing.
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
          <span className="font-semibold">Operation:</span> Dual-mode tilt and turn as standard; tilt-only on request
        </p>
      </div>
      <div className="mt-5 overflow-hidden rounded-xl border border-border divide-y divide-border">
        <div className="grid grid-cols-3 bg-secondary/5 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          <span>Style</span>
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

function TiltAndTurnPage() {
  const [tab, setTab] = useState<Tab>("Styles");

  return (
    <PageLayout>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative h-[520px] overflow-hidden">
        <img
          src={ttHeroImg}
          alt="Vacuum glazed tilt and turn windows on a period London home extension"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-secondary/10" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Vacuum Windows</p>
          <h1 className="max-w-2xl font-display text-5xl text-white md:text-6xl">
            Tilt &amp; Turn<br />Windows
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">
            Versatile European-style dual-mode opening in premium vacuum-glazed timber — 0.4&nbsp;W/m²K, easy internal cleaning, maximum glass area.
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
            href="/contact"
            className="pointer-events-auto grid h-40 w-40 place-items-center rounded-full bg-primary text-center text-primary-foreground shadow-xl ring-8 ring-white/20"
          >
            <div className="px-4">
              <p className="text-[10px] uppercase tracking-widest">Dual-Mode</p>
              <p className="mt-1 font-display text-xl leading-tight">Easy Clean</p>
              <p className="mt-1 text-[10px] opacity-90">7mm unit →</p>
            </div>
          </a>
        </div>
      </section>

      {/* ── Key benefits ─────────────────────────────────────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Why tilt and turn</p>
          <h2 className="mb-12 font-display text-3xl text-secondary md:text-4xl">
            Vacuum-glazed tilt and turn windows
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <RotateCw className="h-8 w-8 text-primary" strokeWidth={1.5} />,
                title: "Dual-Mode Operation",
                body: "Tilt the top inward for secure background ventilation; swing the sash fully open for maximum airflow — one handle controls both modes.",
              },
              {
                icon: <Layers className="h-8 w-8 text-primary" strokeWidth={1.5} />,
                title: "Easy Internal Cleaning",
                body: "In the turn position, the sash swings inward giving complete access to both glass faces from inside — no scaffold, no ladders.",
              },
              {
                icon: <ThermometerSun className="h-8 w-8 text-primary" strokeWidth={1.5} />,
                title: "Maximum Glass Area",
                body: "The slim European profile minimises frame section to maximise glazed area — more light, better views, 0.4 W/m²K in just 7mm.",
              },
              {
                icon: <ShieldCheck className="h-8 w-8 text-primary" strokeWidth={1.5} />,
                title: "Secure in Every Position",
                body: "Multi-point perimeter locking engages in all handle positions — even the tilt ventilation mode is fully secured against forced entry.",
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
            Adding a rear extension or replacing windows with a large-format opening? Our supply-only service delivers vacuum glazed tilt and turn windows with full technical drawings and installation notes.
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
            Architects and developers: tilt and turn windows are the preferred specification for large-aperture conservation area schemes. We provide full CAD packs, NCS colour matching and site delivery.
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
                Totally bespoke tilt and turn windows
              </h2>
              <p className="mt-6 leading-relaxed text-secondary/80">
                Every frame we supply is made-to-measure. Single sashes up to 1,200mm wide and 2,200mm tall; coupled and combination configurations up to 4,000mm wide. We accommodate square and arched heads, horizontal transom combinations, and passive house detailing with enhanced thermal breaks and triple vacuum glazing.
              </p>
              <p className="mt-4 leading-relaxed text-secondary/80">
                Applied glazing bars in Georgian, cottage and horizontal patterns are available for tilt and turn sashes where a period appearance is required on rear elevations or sensitive new-build schemes within conservation areas.
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
                src={ttBespokeImg}
                alt="Large period property with bespoke large-format tilt and turn windows"
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
                src={ttTimberImg}
                alt="Engineered laminated timber frame cross-section showing tilt and turn window construction"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Materials</p>
              <h2 className="font-display text-3xl text-secondary md:text-4xl">
                Softwood or hardwood timber frames
              </h2>
              <p className="mt-6 leading-relaxed text-secondary/80">
                Our tilt and turn frames are manufactured from certified sustainably sourced engineered laminated timber — eliminating the movement and distortion common in solid-section frames. We offer two standard species:
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

      {/* ── Conservation/Feature section ─────────────────────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Conservation areas</p>
              <h2 className="font-display text-3xl text-secondary md:text-4xl">
                Ideal for extensions and new-build within conservation areas
              </h2>
              <p className="mt-6 leading-relaxed text-secondary/80">
                Conservation officers across London regularly approve tilt and turn windows for rear extensions and sensitive new-build schemes. The European profile maximises glass area within a minimal frame section — well-suited to larger apertures where traditional casements would not perform or where planning guidance requires a contemporary approach on non-street-facing elevations.
              </p>
              <p className="mt-4 leading-relaxed text-secondary/80">
                Our 7mm vacuum units achieve a U-value of 1.0&nbsp;W/m²K as standard, with our premium units reaching 0.4&nbsp;W/m²K — the best thermal performance available for any timber window of equivalent profile. Both are accepted under Part L 2023 and are suitable for the 2026 EPC upgrade requirement.
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
                src={ttStoneImg}
                alt="Period property with large tilt and turn windows on a heritage stone elevation"
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
                src={ttHandleImg}
                alt="Multi-position tilt and turn handle on a timber window frame"
                className="h-full w-full object-cover opacity-80"
              />
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Performance</p>
              <h2 className="font-display text-3xl md:text-4xl">
                High performance vacuum tilt and turn windows
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
          <RotateCw className="mx-auto h-12 w-12 text-primary" strokeWidth={1.4} />
          <h2 className="mt-6 font-display text-3xl text-secondary md:text-4xl">
            Ready for the October 2026 EPC standards
          </h2>
          <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-secondary/80">
            Our vacuum-glazed tilt and turn windows exceed Part&nbsp;L 2023 building regulations. Standard units are 7% better than the guideline minimum; premium units are 60% better. For extension and renovation projects requiring compliance with the 2026 EPC minimum, our 0.4&nbsp;W/m²K units are the highest-performing option available in a timber tilt and turn profile.
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
          <h2 className="mb-10 font-display text-3xl text-secondary md:text-4xl">Tilt and turn FAQ</h2>
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
                q: "We specified Vacuum Glazed Windows Ltd's tilt and turn windows for a rear extension on a Victorian terrace in a conservation area. Large format, minimal frame, vacuum glazed — the planning officer had no objections and the performance is outstanding.",
                n: "George · Architect, Southwark",
              },
              {
                q: "The tilt mode is a revelation — secure ventilation on an upper floor with no concern about security. And cleaning both sides of the glass from inside the room has made maintenance genuinely easy for the first time.",
                n: "Helena · Notting Hill, W11",
              },
              {
                q: "We used Vacuum Glazed Windows Ltd's tilt and turn units for the entire new-build scheme within the conservation area. The 7mm vacuum units met the EPC requirement and the design team was delighted with the minimal sightlines.",
                n: "Marcus · Developer, Kensington",
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
          <img src={lcTerraceImg} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl">Ready to specify tilt and turn windows?</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
            Send us your aperture sizes and specification. We'll return a full supply price and technical drawing pack within 24 hours.
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
