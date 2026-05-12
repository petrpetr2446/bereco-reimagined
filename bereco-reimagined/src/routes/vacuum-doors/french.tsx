import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, ThermometerSun, Layers, DoorOpen } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ClickableGallery } from "@/components/site/ClickableGallery";
import lcExtensionImg from "@/assets/lc-extension.png";
import fcBayImg from "@/assets/fc-bay.png";
import lcTerraceImg from "@/assets/lc-terrace.png";
import fcGreenImg from "@/assets/fc-green.png";
import fcInteriorImg from "@/assets/fc-interior.png";
import fcMansionImg from "@/assets/fc-mansion.png";
import fcTimberImg from "@/assets/fc-timber.png";
import fcStoneImg from "@/assets/fc-stone.png";
import fcHandleImg from "@/assets/fc-handle.png";
import fcVacuumImg from "@/assets/fc-vacuum.png";

export const Route = createFileRoute("/vacuum-doors/french")({
  head: () => ({
    meta: [
      { title: "Vacuum Glazed French Doors | Vacuum Glazed Windows Ltd" },
      {
        name: "description",
        content:
          "Elegant twin-leaf timber French doors with vacuum glazed units. Outswing or inswing, period and contemporary profiles. 7mm units, 0.4 W/m²K. Conservation area approved.",
      },
    ],
  }),
  component: FrenchDoorPage,
});

const GALLERY_IMAGES = [
  { src: fcBayImg, alt: "French doors opening onto a London period garden" },
  { src: lcTerraceImg, alt: "French doors on a Victorian terrace rear elevation" },
  { src: fcGreenImg, alt: "Green painted French doors with Georgian glazing bars" },
  { src: fcInteriorImg, alt: "French doors — interior view looking onto a London garden square" },
];

const TABS = ["Styles", "Glazing", "Hardware", "Security", "Performance", "Technical"] as const;
type Tab = (typeof TABS)[number];

const FAQS = [
  {
    q: "What is the difference between outswing and inswing French doors?",
    a: "Outswing French doors open outward (away from you into the garden or terrace) — the traditional period configuration for Victorian and Georgian properties. Inswing doors open inward into the room — better for restricted external spaces or where an outward-opening door would obstruct a path. Both configurations are available to the same specification and performance.",
  },
  {
    q: "Can French doors include sidelights and over-lights?",
    a: "Yes. We supply French doors with matching sidelights (flanking lights), over-lights (transoms above), and full surround configurations including both. All glazed elements use the same 7mm vacuum units as the door leaves, giving a consistent thermal and visual specification across the entire assembly.",
  },
  {
    q: "Are vacuum-glazed French doors accepted in conservation areas?",
    a: "Yes. Our 7mm vacuum units replicate the sight lines of original single-glazed French doors exactly — conservation officers cannot distinguish the installed unit from period glazing at street level. French doors are commonly approved for rear elevations of listed buildings and conservation area properties where the original doors were single-glazed.",
  },
  {
    q: "How are both leaves locked?",
    a: "Both leaves are secured by independent multi-point espagnolette locking operated from the active leaf. Flush bolts secure the passive leaf at top and bottom of the frame. This gives secure multi-point perimeter locking on both leaves simultaneously. PAS 24:2022 certification is available across the full range.",
  },
  {
    q: "What timber species are available for French doors?",
    a: "Our French doors are available in European Redwood (Scots Pine softwood), Dark Red Meranti hardwood, and Accoya® (acetylated radiata pine) as our premium option. All are from FSC/PEFC certified sources and factory-finished with Teknos water-based paint or stain in any RAL, NCS or BS colour.",
  },
  {
    q: "What is the lead time for vacuum-glazed French doors?",
    a: "Our supply-only lead time is 8–10 weeks from order confirmation. We supply to homeowners, architects and joinery contractors with a full specification pack, technical drawings and installation notes included.",
  },
];

function TabContent({ tab }: { tab: Tab }) {
  if (tab === "Styles") {
    const styles = [
      { name: "Pair Outswing", desc: "Two leaves opening outward — the classic period configuration" },
      { name: "Pair Inswing", desc: "Two leaves opening inward — ideal for restricted external spaces" },
      { name: "Pair + Over-light", desc: "Twin leaves with a fixed or opening transom above" },
      { name: "Pair + Sidelights", desc: "Twin leaves with fixed flanking sidelights — wider openings" },
      { name: "Full Surround", desc: "Pair with sidelights and over-light — grand openings" },
      { name: "Contemporary Minimal", desc: "Clean unornamented profile with large panes — modern extensions" },
    ];
    return (
      <div>
        <h2 className="font-display text-2xl text-secondary">Configurations for every opening</h2>
        <p className="mt-3 leading-relaxed text-secondary/75">
          Every configuration is available in period-authentic or contemporary profiles, with outswing or inswing operation, and any timber, colour or hardware combination.
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
        <h2 className="font-display text-2xl text-secondary">Vacuum glazed door lights</h2>
        <p className="mt-3 leading-relaxed text-secondary/75">
          Our 7mm vacuum units fit both door leaves, sidelights and over-lights — delivering triple-glazing performance in an authentic period-depth profile.
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
          Astragal bar patterns: Georgian, marginal, horizontal. Applied bars, not structural — removable for cleaning.
        </p>
      </div>
    );
  }

  if (tab === "Hardware") {
    const items = [
      "Antique Brass Espagnolette Handle",
      "Polished Chrome Lever Handle",
      "Matt Black Bar Handle",
      "Satin Nickel Knob Handle",
      "Brass Flush Bolt — Passive Leaf",
      "Chrome Flush Bolt — Passive Leaf",
      "Threshold Bar — Rebated Sill",
      "Low-Profile Aluminium Threshold",
    ];
    return (
      <div>
        <h2 className="font-display text-2xl text-secondary">French door hardware</h2>
        <p className="mt-3 leading-relaxed text-secondary/75">
          Multi-point espagnolette locking on the active leaf with matching flush bolts on the passive leaf. Full range of period and contemporary handle sets in 10+ metal finishes.
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
      "PAS 24:2022 Enhanced Security certification",
      "Multi-point espagnolette locking — active leaf",
      "Flush bolts top and bottom — passive leaf",
      "Secured by Design upgrade available",
      "Anti-lift security pins on both leaves",
      "Hinge bolts — 2 per leaf as standard",
      "Internally glazed panels as standard",
      "Toughened or laminated glass options",
    ];
    return (
      <div>
        <h2 className="font-display text-2xl text-secondary">Security you can rely on</h2>
        <p className="mt-3 leading-relaxed text-secondary/75">
          Every French door we supply exceeds residential security requirements. Multi-point espagnolette locking on the active leaf and flush bolts on the passive leaf give secure perimeter locking on both leaves simultaneously.
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
      ["Security Standard", "PAS 24:2022"],
      ["EPC Compliance", "2026 ready"],
    ];
    return (
      <div>
        <h2 className="font-display text-2xl text-secondary">Product specification</h2>
        <p className="mt-3 leading-relaxed text-secondary/75">
          Vacuum insulated units in door leaves and sidelights exceed Part L 2023 requirements across the entire assembly.
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
    ["Pair Outswing / Inswing", "W 1200–2400mm", "H 1800–2500mm"],
    ["Pair + Over-light", "W 1200–2400mm", "H 2200–3200mm"],
    ["Pair + Sidelights", "W 1800–3500mm", "H 1800–2500mm"],
    ["Full Surround", "W 2000–4000mm", "H 2200–3500mm"],
    ["Single Leaf", "W 750–1100mm", "H 1800–2500mm"],
  ];
  return (
    <div>
      <h2 className="font-display text-2xl text-secondary">Technical specifications</h2>
      <p className="mt-3 leading-relaxed text-secondary/75">
        Standard size ranges. Fully bespoke French door assemblies available — contact us for non-standard apertures or configurations.
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
          <span className="font-semibold">Operation:</span> Outswing or inswing — specify at order
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

function FrenchDoorPage() {
  const [tab, setTab] = useState<Tab>("Styles");

  return (
    <PageLayout>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative h-[520px] overflow-hidden">
        <img
          src={lcExtensionImg}
          alt="Vacuum glazed French doors connecting a period London home to the garden"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-secondary/10" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Vacuum Doors</p>
          <h1 className="max-w-2xl font-display text-5xl text-white md:text-6xl">
            French<br />Doors
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">
            Elegant twin-leaf timber doors with vacuum glazing — outswing or inswing, period or contemporary, 0.4&nbsp;W/m²K in just 7mm.
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
            href="/heritage-listed-buildings"
            className="pointer-events-auto grid h-40 w-40 place-items-center rounded-full bg-primary text-center text-primary-foreground shadow-xl ring-8 ring-white/20"
          >
            <div className="px-4">
              <p className="text-[10px] uppercase tracking-widest">In or</p>
              <p className="mt-1 font-display text-xl leading-tight">Outswing</p>
              <p className="mt-1 text-[10px] opacity-90">7mm unit →</p>
            </div>
          </a>
        </div>
      </section>

      {/* ── Key benefits ─────────────────────────────────────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Why French doors</p>
          <h2 className="mb-12 font-display text-3xl text-secondary md:text-4xl">
            Vacuum-glazed timber French doors
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <DoorOpen className="h-8 w-8 text-primary" strokeWidth={1.5} />,
                title: "Twin-Leaf Precision",
                body: "Both leaves close flush with equal reveal, creating a seamless visual and thermal connection between your interior and garden or terrace.",
              },
              {
                icon: <Layers className="h-8 w-8 text-primary" strokeWidth={1.5} />,
                title: "7mm Vacuum Units",
                body: "All door glass, sidelights and over-lights fitted with vacuum insulated units — 0.4 W/m²K in the thinnest high-performance glazing available.",
              },
              {
                icon: <ThermometerSun className="h-8 w-8 text-primary" strokeWidth={1.5} />,
                title: "Outswing or Inswing",
                body: "Traditional outswing for period properties or space-saving inswing where external access is restricted — same specification, your choice.",
              },
              {
                icon: <ShieldCheck className="h-8 w-8 text-primary" strokeWidth={1.5} />,
                title: "Multi-Point Locking",
                body: "Espagnolette multi-point locking on the active leaf and flush bolts on the passive leaf. PAS 24:2022 certified as standard.",
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
            Replacing French doors or opening up a rear wall? Our supply-only service delivers bespoke vacuum-glazed French doors with full technical drawings and installation notes — direct to your door or contractor.
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
                Totally bespoke vacuum French doors
              </h2>
              <p className="mt-6 leading-relaxed text-secondary/80">
                Every French door we supply is made-to-measure. Pairs up to 2,400mm wide and 2,500mm tall; full surround configurations with sidelights and over-lights up to 4,000mm wide. We accommodate square and arched heads, swept sill details, fanlight designs and any astragal bar pattern — from Georgian to contemporary horizontal.
              </p>
              <p className="mt-4 leading-relaxed text-secondary/80">
                Both outswing and inswing are available with the same complete specification. Lead detailing is available in diamond, square and Queen Anne patterns in antique black, silver, gold and old gold finishes.
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
                alt="Bespoke French doors on a grand period London property"
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
                alt="Engineered laminated timber cross-section showing French door construction"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Materials</p>
              <h2 className="font-display text-3xl text-secondary md:text-4xl">
                Softwood or hardwood timber frames
              </h2>
              <p className="mt-6 leading-relaxed text-secondary/80">
                Our French door frames are manufactured from certified sustainably sourced engineered laminated timber — eliminating the warping and distortion common in solid-section door frames. We offer two standard species:
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
                    desc: "Class 1 durability, ultra-stable, 50-year above-ground guarantee. The premier choice for rear-elevation doors. FSC certified.",
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

      {/* ── Garden connection section ────────────────────────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">The garden connection</p>
              <h2 className="font-display text-3xl text-secondary md:text-4xl">
                Ideal for rear elevations and garden extensions
              </h2>
              <p className="mt-6 leading-relaxed text-secondary/80">
                French doors are the natural choice for period London properties opening onto a garden, terrace or rear courtyard. Conservation officers regularly approve vacuum-glazed timber French doors for listed buildings and conservation area properties — our 7mm units replicate the original period sight lines exactly.
              </p>
              <p className="mt-4 leading-relaxed text-secondary/80">
                Standard vacuum units achieve a U-value of 1.0&nbsp;W/m²K — compliant with Part L 2023 and acceptable to the vast majority of planning authorities. Our premium 0.4&nbsp;W/m²K units deliver 60% better performance than the guideline minimum, ideal for properties requiring compliance with the 2026 EPC standard.
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
                alt="French doors on a heritage stone period property"
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
                alt="Period espagnolette handle on a timber French door"
                className="h-full w-full object-cover opacity-80"
              />
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Performance</p>
              <h2 className="font-display text-3xl md:text-4xl">
                High performance vacuum-glazed French doors
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
          <DoorOpen className="mx-auto h-12 w-12 text-primary" strokeWidth={1.4} />
          <h2 className="mt-6 font-display text-3xl text-secondary md:text-4xl">
            Ready for the October 2026 EPC standards
          </h2>
          <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-secondary/80">
            Our vacuum-glazed French doors exceed Part&nbsp;L 2023 building regulations — standard units are 7% better than the guideline minimum and premium units are 60% better. For period properties facing the 2026 EPC minimum, our 7mm units are often the only glazing technology conservation officers will approve that also achieves full compliance.
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
          <h2 className="mb-10 font-display text-3xl text-secondary md:text-4xl">French door FAQ</h2>
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
                q: "The French doors have completely transformed the rear of our Victorian terrace. The vacuum glazing has eliminated the draught we had with the original single-glazed doors, and the conservation officer had no objections at all.",
                n: "Sophie · Clapham, SW4",
              },
              {
                q: "We specified Vacuum Glazed Windows Ltd's French doors for a rear extension on a conservation area property. The outswing configuration matched the original exactly and the thermal performance has made the extension genuinely habitable in winter.",
                n: "David · Architect, Richmond",
              },
              {
                q: "The quality of the factory finish is exceptional — the sage green paint matches the original period ironwork perfectly. Installation was straightforward from Vacuum Glazed Windows Ltd's technical pack. Highly recommended.",
                n: "Emma · Contractor, West London",
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
          <h2 className="font-display text-4xl md:text-5xl">Ready to specify French doors?</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
            Send us your aperture size and preferred configuration. We'll return a full supply price and technical drawing pack within 24 hours.
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
