import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, ThermometerSun, Layers, KeyRound } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ClickableGallery } from "@/components/site/ClickableGallery";
import fcHeroImg from "@/assets/fc-hero.png";
import lcMansionImg from "@/assets/lc-mansion.png";
import fcMansionImg from "@/assets/fc-mansion.png";
import lcTerraceImg from "@/assets/lc-terrace.png";
import fcVictorianImg from "@/assets/fc-victorian.png";
import lcExtensionImg from "@/assets/lc-extension.png";
import fcTimberImg from "@/assets/fc-timber.png";
import fcStoneImg from "@/assets/fc-stone.png";
import lcHandleImg from "@/assets/lc-handle.png";
import fcVacuumImg from "@/assets/fc-vacuum.png";

export const Route = createFileRoute("/vacuum-doors/entrance")({
  head: () => ({
    meta: [
      { title: "Vacuum Glazed Entrance Doors | Vacuum Glazed Windows Ltd" },
      {
        name: "description",
        content:
          "Solid European timber entrance doors with vacuum glazed panels. Period and contemporary designs, multi-point security locking, factory finishes. PAS 24:2022 certified.",
      },
    ],
  }),
  component: EntranceDoorPage,
});

const GALLERY_IMAGES = [
  { src: lcMansionImg, alt: "Bespoke entrance door on a large Arts and Crafts period property" },
  { src: fcMansionImg, alt: "Grand entrance door on a Georgian London townhouse" },
  { src: lcTerraceImg, alt: "Period entrance door on a Victorian London terrace" },
  { src: fcVictorianImg, alt: "Painted timber entrance door on a Victorian brick terrace" },
];

const TABS = ["Styles", "Glazing", "Hardware", "Security", "Performance", "Technical"] as const;
type Tab = (typeof TABS)[number];

const FAQS = [
  {
    q: "What timber species are available for entrance doors?",
    a: "Our entrance doors are available in European Redwood (Scots Pine softwood), Dark Red Meranti hardwood, and Accoya® (acetylated radiata pine) as our premium option. All are from FSC/PEFC certified sources and factory-finished with Teknos water-based paint or stain in any RAL, NCS or BS colour.",
  },
  {
    q: "Can vacuum-glazed panels be used in fanlights and sidelights?",
    a: "Yes. Our 7mm vacuum units can be used in any door panel, fanlight or sidelight. Vision panels, circular fanlights, sidelights and transom lights all accept our standard and premium vacuum units — giving the whole entrance assembly consistent thermal performance at the same 7mm profile.",
  },
  {
    q: "Do your entrance doors meet Part Q security requirements?",
    a: "Yes. Part Q applies to new-build dwellings and relevant extensions. Our entrance doors with PAS 24:2022 multi-point locking and 3-point deadlocking meet Part Q as standard. Secured by Design certification is available for projects requiring it. For replacement doors in existing homes, Part Q does not apply — though we always include high-security locking as standard.",
  },
  {
    q: "Can you match an existing door design or original profile?",
    a: "Yes. Our draughtsmen can work from photographs, site measurements or existing drawings to replicate any panel arrangement, moulding profile, glazing bar pattern or fanlight design. We can also match any colour currently on the market and mix external and internal colours as standard.",
  },
  {
    q: "What is the standard glazing specification for entrance door panels?",
    a: "All door panels are supplied with our standard vacuum unit as default (1.0 W/m²K, 7mm). Our premium unit (0.4 W/m²K, 7mm) is available for any panel. For properties on busy streets, our acoustic vacuum unit (up to 36 dB, 7mm) can be specified for all or selected panels.",
  },
  {
    q: "What is the lead time for a bespoke entrance door?",
    a: "Our supply-only lead time is 8–10 weeks from order confirmation. For fully bespoke designs with custom carved panels or non-standard hardware, allow 10–12 weeks. We supply to homeowners, architects and joinery contractors with a full specification pack, technical drawings and installation notes.",
  },
];

function TabContent({ tab }: { tab: Tab }) {
  if (tab === "Styles") {
    const styles = [
      { name: "Classic 4-Panel", desc: "Two top, two bottom panels — the definitive Georgian and Victorian arrangement" },
      { name: "Victorian 2-Panel", desc: "Two stacked panels — late Victorian and Edwardian terraces" },
      { name: "Georgian Fanlight", desc: "Solid or glazed panels with radial fanlight above — Regency and Georgian" },
      { name: "Contemporary Minimal", desc: "Unornamented profile with large glazed panels — modern extensions and new-build" },
      { name: "Large Glass Panel", desc: "Single full-height glazed panel for maximum light and garden views" },
      { name: "Door + Sidelights", desc: "Door leaf with matching flanking sidelights — wide openings and grand entrances" },
    ];
    return (
      <div>
        <h2 className="font-display text-2xl text-secondary">Designs for every property</h2>
        <p className="mt-3 leading-relaxed text-secondary/75">
          Every design is available with vacuum glazed panels, any timber species, and a full range of hardware and colour options. Entirely made-to-measure.
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
        <h2 className="font-display text-2xl text-secondary">Vacuum glazed door panels</h2>
        <p className="mt-3 leading-relaxed text-secondary/75">
          Our 7mm vacuum units fit all vision panels, fanlights and sidelights without altering sight lines — delivering triple-glazing performance in a period-authentic profile.
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
          Glazing bar patterns for panels: Georgian, marginal, horizontal. Lead detailing available.
        </p>
      </div>
    );
  }

  if (tab === "Hardware") {
    const items = [
      "Antique Brass Door Knob",
      "Polished Chrome Lever Handle",
      "Antique Black Pull Bar",
      "Brass Letter Plate",
      "Chrome Letter Plate",
      "Cast Iron Lion Knocker",
      "Polished Brass Knocker",
      "Satin Nickel Numerals",
    ];
    return (
      <div>
        <h2 className="font-display text-2xl text-secondary">Period door hardware</h2>
        <p className="mt-3 leading-relaxed text-secondary/75">
          Multi-point security locking with a full range of period and contemporary door furniture in 10+ metal finishes. Matching letterboxes, knockers, numerals and pull bars supplied to order.
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
      "Minimum 3-point deadlocking as standard",
      "5-point locking upgrade available",
      "Secured by Design certification on request",
      "Anti-drill, anti-pick, anti-bump cylinder as standard",
      "Hinge bolts — 2 per leaf",
      "Internally glazed panels as standard",
      "Toughened or laminated glass in all panels",
    ];
    return (
      <div>
        <h2 className="font-display text-2xl text-secondary">Security you can rely on</h2>
        <p className="mt-3 leading-relaxed text-secondary/75">
          Every entrance door we supply exceeds Part Q security requirements, with PAS 24:2022 certification and multi-point locking as standard. Secured by Design available for all designs.
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
      ["Panel UW Range", "1.0 – 0.4 W/m²K"],
      ["Acoustic Range", "29 – 36 dB"],
      ["Air Permeability", "600 Pa (Class 4)"],
      ["Water Tightness", "400 Pa (Class 8A)"],
      ["Wind Load Resistance", "2000 Pa (Class 5C)"],
      ["Panel Thickness", "7 mm"],
      ["Security Standard", "PAS 24:2022"],
      ["Finish Warranty", "10 years"],
    ];
    return (
      <div>
        <h2 className="font-display text-2xl text-secondary">Product specification</h2>
        <p className="mt-3 leading-relaxed text-secondary/75">
          Vacuum insulated door panels exceed Part L 2023 requirements. Full thermal performance across the entire door assembly including frame, panels and hardware.
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
    ["Single Leaf", "W 750–1100mm", "H 1980–2500mm"],
    ["Single + Fanlight", "W 750–1100mm", "H 2200–3000mm"],
    ["Pair (Double)", "W 1500–2200mm", "H 1980–2500mm"],
    ["Pair + Sidelights", "W 1800–3500mm", "H 1980–2500mm"],
    ["Full Surround", "W 2000–4000mm", "H 2200–3500mm"],
  ];
  return (
    <div>
      <h2 className="font-display text-2xl text-secondary">Technical specifications</h2>
      <p className="mt-3 leading-relaxed text-secondary/75">
        Standard size ranges. Fully bespoke entrance doors available to match any aperture — send us your dimensions and preferred design for a quotation.
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
          <span className="font-semibold">Security:</span> PAS 24:2022 · multi-point locking · hinge bolts · anti-drill cylinder
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

function EntranceDoorPage() {
  const [tab, setTab] = useState<Tab>("Styles");

  return (
    <PageLayout>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative h-[520px] overflow-hidden">
        <img
          src={fcHeroImg}
          alt="Vacuum glazed entrance door on a white stucco London townhouse"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-secondary/10" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Vacuum Doors</p>
          <h1 className="max-w-2xl font-display text-5xl text-white md:text-6xl">
            Entrance<br />Doors
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">
            Solid European timber entrance doors with vacuum glazed panels — period or contemporary, PAS 24:2022 certified, factory-finished in any colour.
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
              <p className="text-[10px] uppercase tracking-widest">PAS 24</p>
              <p className="mt-1 font-display text-xl leading-tight">Certified</p>
              <p className="mt-1 text-[10px] opacity-90">7mm panels →</p>
            </div>
          </a>
        </div>
      </section>

      {/* ── Key benefits ─────────────────────────────────────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Why Vacuum Glazed Windows Ltd entrance doors</p>
          <h2 className="mb-12 font-display text-3xl text-secondary md:text-4xl">
            Vacuum-glazed timber entrance doors
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Layers className="h-8 w-8 text-primary" strokeWidth={1.5} />,
                title: "Solid Timber Construction",
                body: "Engineered laminated solid European timber — superior stability, no warping or distortion. FSC/PEFC certified softwood, hardwood or Accoya®.",
              },
              {
                icon: <ThermometerSun className="h-8 w-8 text-primary" strokeWidth={1.5} />,
                title: "Vacuum Glazed Panels",
                body: "7mm vacuum units in all vision panels, fanlights and sidelights — 0.4 W/m²K, the thinnest high-performance glazing available.",
              },
              {
                icon: <KeyRound className="h-8 w-8 text-primary" strokeWidth={1.5} />,
                title: "Multi-Point Security",
                body: "Minimum 3-point deadlocking as standard. PAS 24:2022 certified. Secured by Design upgrade available for any design.",
              },
              {
                icon: <ShieldCheck className="h-8 w-8 text-primary" strokeWidth={1.5} />,
                title: "Factory-Applied Finish",
                body: "Teknos microporous paint or stain in any RAL, NCS or BS colour. 10-year finish warranty. Dual-colour (internal/external) as standard.",
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
            Replacing your front door? Our supply-only service delivers a bespoke vacuum-glazed entrance door matched to your property with full technical drawings and installation notes — direct to your door or joiner.
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
                Totally bespoke vacuum-glazed entrance doors
              </h2>
              <p className="mt-6 leading-relaxed text-secondary/80">
                Every door we supply is made-to-measure to your exact aperture and specification. Panel arrangements, glazing bar patterns, fanlight designs and moulding profiles are all drawn from your brief — whether replicating an original or designing something entirely new. We accommodate single leaves up to 1,100mm wide, pairs up to 2,200mm wide, and full surrounds including sidelights and over-lights up to 4,000mm wide.
              </p>
              <p className="mt-4 leading-relaxed text-secondary/80">
                Lead detailing in diamond, square and Queen Anne patterns is available in antique black, silver, gold and old gold finishes for any glazed panel or fanlight.
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
                alt="Bespoke entrance door on a period London property at dusk"
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
                alt="Engineered laminated timber cross-section showing entrance door construction"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Materials</p>
              <h2 className="font-display text-3xl text-secondary md:text-4xl">
                Softwood or hardwood timber doors
              </h2>
              <p className="mt-6 leading-relaxed text-secondary/80">
                Our entrance doors are manufactured from certified sustainably sourced engineered laminated timber — eliminating the warping and distortion common in solid-section doors. We offer two standard species:
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
                    desc: "Class 1 durability, ultra-stable, 50-year above-ground guarantee. The premier choice for front elevations. FSC certified.",
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
                Heritage-approved entrance doors for conservation areas
              </h2>
              <p className="mt-6 leading-relaxed text-secondary/80">
                Conservation officers across London and the UK regularly approve our entrance doors for period properties, conservation areas and listed buildings. Because our 7mm vacuum panels replicate the original single-glazed sight lines exactly, the installed door is visually indistinguishable from the original at street level.
              </p>
              <p className="mt-4 leading-relaxed text-secondary/80">
                Standard vacuum panel units achieve a U-value of 1.0&nbsp;W/m²K — compliant with building regulations and acceptable to the vast majority of planning authorities. Where the most demanding EPC 2026 compliance is required, our 0.4&nbsp;W/m²K premium units exceed any other panel technology available at this profile.
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
                alt="Heritage entrance door on a Cotswold stone period building"
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
                alt="Period door handle and multi-point locking on a timber entrance door"
                className="h-full w-full object-cover opacity-80"
              />
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Performance</p>
              <h2 className="font-display text-3xl md:text-4xl">
                High performance vacuum-glazed entrance doors
              </h2>
              <p className="mt-6 leading-relaxed text-white/80">
                Acoustic performance up to 36&nbsp;dB in glazed panels. Standard vacuum units deliver a U-value of 1.0&nbsp;W/m²K — 7% better than Part&nbsp;L 2023 guidelines. Our premium units achieve 0.4&nbsp;W/m²K — 60% better, comparable to a solid brick panel.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                {[
                  ["1.0", "W/m²K", "Standard panels"],
                  ["0.4", "W/m²K", "Premium panels"],
                  ["36", "dB", "Acoustic reduction"],
                  ["3+", "point", "Security locking"],
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
          <KeyRound className="mx-auto h-12 w-12 text-primary" strokeWidth={1.4} />
          <h2 className="mt-6 font-display text-3xl text-secondary md:text-4xl">
            Ready for the October 2026 EPC standards
          </h2>
          <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-secondary/80">
            Our vacuum-glazed entrance door panels exceed Part&nbsp;L 2023 building regulations — with standard units 7% better than the guideline minimum and premium units 60% better. For heritage properties facing the 2026 EPC minimum, our 7mm panel units are the only glazing technology thin enough for conservation-area approval that also achieves compliance.
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
          <h2 className="mb-10 font-display text-3xl text-secondary md:text-4xl">Entrance door FAQ</h2>
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
                q: "The new entrance door is stunning — the conservation officer approved it immediately. The vacuum-glazed fanlight is indistinguishable from the original single glazing and the draught reduction is remarkable.",
                n: "Victoria · Kensington, W8",
              },
              {
                q: "We specified Vacuum Glazed Windows Ltd's entrance doors across a Grade II listed terrace in Marylebone. The 7mm glazed panels were the only option the Heritage Officer would accept. Delivery, quality and installation have been flawless.",
                n: "James · Architect, Westminster",
              },
              {
                q: "As a joinery contractor, I've installed dozens of Vacuum Glazed Windows Ltd doors. The factory finish quality is exceptional and the specification packs make installation straightforward. Our clients are always delighted.",
                n: "Mark · Joinery Contractor, South London",
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
          <h2 className="font-display text-4xl md:text-5xl">Ready to specify an entrance door?</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
            Send us your aperture size and preferred design. We'll return a full supply price and technical drawing pack within 24 hours.
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
