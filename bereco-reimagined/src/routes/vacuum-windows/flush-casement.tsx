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
import fcHeroImg from "@/assets/fc-hero.png";
import fcVictorianImg from "@/assets/fc-victorian.png";
import fcGreenImg from "@/assets/fc-green.png";
import fcInteriorImg from "@/assets/fc-interior.png";
import fcBayImg from "@/assets/fc-bay.png";
import fcMansionImg from "@/assets/fc-mansion.png";
import fcTimberImg from "@/assets/fc-timber.png";
import fcStoneImg from "@/assets/fc-stone.png";
import fcHandleImg from "@/assets/fc-handle.png";
import fcVacuumImg from "@/assets/fc-vacuum.png";

export const Route = createFileRoute("/vacuum-windows/flush-casement")({
  head: () => ({
    meta: [
      { title: "Flush Casement Windows — Vacuum Glazed | Vacuum Glazed Windows Ltd" },
      {
        name: "description",
        content:
          "Vacuum glazed flush casement windows in premium European timber. 7mm units, 0.4 W/m²K, conservation area approved. Supply specialists.",
      },
    ],
  }),
  component: FlushCasementPage,
});

const GALLERY_IMAGES = [
  { src: fcVictorianImg, alt: "White flush casement windows on a London Victorian terrace" },
  { src: fcGreenImg, alt: "Green painted flush casement with Georgian glazing bars, Victorian brick" },
  { src: fcInteriorImg, alt: "Triple flush casement interior looking onto a London garden square" },
  { src: fcBayImg, alt: "Flush casement bay window on a London Victorian terrace" },
];

const TABS = ["Styles", "Glazing", "Ironmongery", "Security", "Performance", "Technical"] as const;
type Tab = (typeof TABS)[number];

const FAQS = [
  {
    q: "What is a flush casement window?",
    a: "A flush casement window has its opening sash set perfectly level with the outer face of the frame, creating the clean, unbroken sight line characteristic of Georgian and Victorian architecture. Our vacuum-glazed flush casements replicate this profile exactly while delivering modern thermal performance.",
  },
  {
    q: "How do vacuum glazed units compare to double glazing in a flush casement?",
    a: "Our 7mm vacuum insulated units achieve a centre-pane U-value of 1.0 W/m²K (standard) or 0.4 W/m²K (premium) — matching or exceeding the best triple glazing, yet only 7mm thick. Standard 28mm double glazed units cannot fit within original timber sections without structural alteration.",
  },
  {
    q: "Are flush casements with vacuum glazing accepted in conservation areas?",
    a: "Yes. Because the 7mm unit sits within the existing sight lines and requires no structural alteration to the frame, conservation officers have approved our vacuum-glazed flush casements on listed buildings and in conservation areas where standard double glazing would be refused.",
  },
  {
    q: "What timber options are available?",
    a: "We offer slow-grown European softwood (Scots Pine / Redwood) and hardwood (Dark Red Meranti), both from FSC/PEFC certified forests. All frames are factory-finished using Teknos water-based paint or stain systems in any RAL, NCS or BS colour.",
  },
  {
    q: "Do flush casement windows comply with Part Q?",
    a: "Part Q security requirements apply to new-build dwellings and relevant extensions. Our flush casements with PAS 24:2022 certified multi-point espagnolette locking handles meet Part Q as standard. For replacement windows in existing homes, Part Q does not apply — though we always include high-security locking as standard.",
  },
  {
    q: "What lead time should I expect for vacuum-glazed flush casements?",
    a: "Our supply-only lead time is 8–10 weeks from order confirmation. We supply to homeowners, architects and joinery contractors across the UK with a full specification pack, technical drawings and installation notes included.",
  },
];

function TabContent({ tab }: { tab: Tab }) {
  if (tab === "Styles") {
    const styles = [
      { name: "Single Side-Hung", desc: "One opening sash — simple, elegant" },
      { name: "Single Top-Hung", desc: "Opens from top — ideal for high or restricted positions" },
      { name: "Double (Pair)", desc: "Two side-by-side sashes with flying mullion" },
      { name: "Double + Double Top Lights", desc: "Two mains with two individual top lights above" },
      { name: "Double + Single Top Light", desc: "Two mains with a spanning top light above" },
      { name: "Triple", desc: "Three sashes side-by-side for wide openings" },
      { name: "Fixed Light", desc: "Non-opening vacuum glazed for maximum thermal performance" },
    ];
    return (
      <div>
        <h2 className="font-display text-2xl text-secondary">Versatile styles for every opening</h2>
        <p className="mt-3 leading-relaxed text-secondary/75">
          Every style is available with our 7mm vacuum glazed units, applied glazing bars, and any colour or ironmongery combination.
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
          Our 7mm vacuum insulated glass eliminates convection, condensation and the need for thick spacer bars — delivering triple-glazing performance in a single-glazing profile.
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
          Applied bars: 16mm lambs tongue · 25mm / 35mm ovolo. Patterns: Georgian, cottage, marginal, horizontal.
        </p>
      </div>
    );
  }

  if (tab === "Ironmongery") {
    const handles = [
      "Antique Brass Bulb End",
      "Antique Black Monkey Tail",
      "Bronze Bulb End",
      "Satin Chrome Bar",
      "Polished Nickel Peg",
      "Gunmetal Round Bar",
      "Matt Black Casement Peg",
      "Stainless Steel Radius",
    ];
    return (
      <div>
        <h2 className="font-display text-2xl text-secondary">Heritage ironmongery</h2>
        <p className="mt-3 leading-relaxed text-secondary/75">
          Multi-point espagnolette locking systems with 10+ metal finishes. Every handle is available in matching casement stays, fasteners and dummy bolts.
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
      "Multi-point espagnolette locking handles as standard",
      "Easy-clean or egress friction hinges",
      "Secure night-vent position on every opening sash",
      "Child safety restrictors available",
      "Internally glazed as standard",
      "Toughened or laminated glass options",
    ];
    return (
      <div>
        <h2 className="font-display text-2xl text-secondary">Security you can rely on</h2>
        <p className="mt-3 leading-relaxed text-secondary/75">
          Every flush casement we supply exceeds the security requirements for residential use, with PAS 24:2022 certification and multi-point locking as standard.
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

  // Technical tab
  const sizes: [string, string, string][] = [
    ["Single Side-Hung", "W 300–1100mm", "H 330–1800mm"],
    ["Single Top-Hung", "W 400–1400mm", "H 310–1300mm"],
    ["Double (Pair)", "W 828–2200mm", "H 300–1800mm"],
    ["Combination", "W 700–2500mm", "H 300–2500mm"],
    ["Fixed Light", "W 300–2500mm", "H 300–2500mm"],
  ];
  return (
    <div>
      <h2 className="font-display text-2xl text-secondary">Technical specifications</h2>
      <p className="mt-3 leading-relaxed text-secondary/75">
        Standard size ranges. Bespoke frames available up to 5m wide across five lights — contact us for non-standard configurations.
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
          <span className="font-semibold">Bars:</span> 16mm lambs tongue · 25mm / 35mm / 48mm ovolo
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

function FlushCasementPage() {
  const [tab, setTab] = useState<Tab>("Styles");

  return (
    <PageLayout>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative h-[520px] overflow-hidden">
        <img
          src={fcHeroImg}
          alt="Flush casement windows on a grand stucco Belgravia townhouse"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-secondary/10" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Vacuum Windows</p>
          <h1 className="max-w-2xl font-display text-5xl text-white md:text-6xl">
            Flush Casement<br />Windows
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">
            Conservation-approved vacuum glazing in traditional flush casement frames — 0.4&nbsp;W/m²K in just 7mm.
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
              <p className="text-[10px] uppercase tracking-widest">Conservation</p>
              <p className="mt-1 font-display text-xl leading-tight">Approved</p>
              <p className="mt-1 text-[10px] opacity-90">7mm unit →</p>
            </div>
          </a>
        </div>
      </section>


{/* ── Key benefits ─────────────────────────────────────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Why flush casement</p>
          <h2 className="mb-12 font-display text-3xl text-secondary md:text-4xl">
            Vacuum-glazed flush casement windows
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Layers className="h-8 w-8 text-primary" strokeWidth={1.5} />,
                title: "7mm Vacuum Units",
                body: "Fits within original timber sections without structural alteration — the thinnest high-performance glazing available anywhere in the UK.",
              },
              {
                icon: <ThermometerSun className="h-8 w-8 text-primary" strokeWidth={1.5} />,
                title: "High Performing",
                body: "0.4 W/m²K premium U-value exceeds the best triple glazing on the market in a unit 75% thinner.",
              },
              {
                icon: <Building2 className="h-8 w-8 text-primary" strokeWidth={1.5} />,
                title: "Conservation Approved",
                body: "Accepted in conservation areas and for listed buildings where standard double glazing is refused by planners.",
              },
              {
                icon: <ShieldCheck className="h-8 w-8 text-primary" strokeWidth={1.5} />,
                title: "Excellent Security",
                body: "PAS 24:2022 certified multi-point locking, internal glazing, and friction hinges with secure night-vent position.",
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
            Replacing windows in your period home? Our supply-only service delivers conservation-grade vacuum glazed flush casements with full technical drawings and installation notes — direct to your door or contractor.
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
                Totally bespoke vacuum flush casement windows
              </h2>
              <p className="mt-6 leading-relaxed text-secondary/80">
                Every frame we supply is made-to-measure. Standard openings up to 2,500mm wide and 2,500mm tall, with bespoke configurations up to 5 metres wide across five lights. We can accommodate oriel bay projections, curved heads, swept sills, and swept heads, as well as traditional bar patterns in Georgian, cottage, marginal and horizontal arrangements.
              </p>
              <p className="mt-4 leading-relaxed text-secondary/80">
                Lead detailing is available in diamond, square and Queen Anne patterns — in antique black, silver, gold and old gold finishes.
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
                alt="Grand Georgian townhouse with bespoke flush casement windows across all floors"
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
                alt="Engineered laminated timber frame cross-section showing the flush casement construction"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Materials</p>
              <h2 className="font-display text-3xl text-secondary md:text-4xl">
                Softwood or hardwood timber frames
              </h2>
              <p className="mt-6 leading-relaxed text-secondary/80">
                Our flush casement frames are manufactured from certified sustainably sourced engineered laminated timber — eliminating the movement and distortion common in solid-section frames. We offer two species:
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "European Redwood",
                    sub: "Scots Pine · Softwood",
                    desc: "Ideal for painted finishes. Close, even grain gives a smooth factory-finished surface. FSC/PEFC certified.",
                    badge: null,
                  },
                  {
                    name: "Dark Red Meranti",
                    sub: "Hardwood",
                    desc: "Open grain accepts stain beautifully. More naturally durable, ideal for external exposures. FSC/PEFC certified.",
                    badge: null,
                  },
                  {
                    name: "Accoya®",
                    sub: "Acetylated Radiata Pine · Premium",
                    desc: "Class 1 durability, ultra-stable, 50-year above-ground guarantee. The premier choice for demanding exposures. FSC certified.",
                    badge: null,
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
                Ideal for conservation areas and listed buildings
              </h2>
              <p className="mt-6 leading-relaxed text-secondary/80">
                Our vacuum-glazed flush casements use the same timber sections and sight lines as the original single-glazed windows they replace. The 7mm unit sits entirely within the existing rebate — conservation officers cannot distinguish the installed unit from original single glazing at street level.
              </p>
              <p className="mt-4 leading-relaxed text-secondary/80">
                Standard vacuum units achieve a U-value of 1.0&nbsp;W/m²K — compliant with building regulations and acceptable to the vast majority of planning authorities. Where the most demanding EPC 2026 compliance is required, our 0.4&nbsp;W/m²K premium units exceed any other glazing technology available at this profile.
              </p>
              <a
                href="/heritage-listed-buildings"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary-deep underline underline-offset-4 hover:text-primary"
              >
                Heritage & listed building guide <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="overflow-hidden rounded-3xl">
              <img
                src={fcStoneImg}
                alt="White flush casement windows on a Cotswold stone heritage building"
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
                alt="Black heritage handle on a flush casement window, London street lamp reflected"
                className="h-full w-full object-cover opacity-80"
              />
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Performance</p>
              <h2 className="font-display text-3xl md:text-4xl">
                High performance vacuum flush casement windows
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
            Our vacuum-glazed flush casements exceed Part&nbsp;L 2023 building regulations — with standard units 7% better than the guideline minimum and premium units 60% better. For October 2026, our 0.4&nbsp;W/m²K premium units are often the only glazing technology thin enough for heritage buildings that also achieves compliance.
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
          <h2 className="mb-10 font-display text-3xl text-secondary md:text-4xl">Flush casement FAQ</h2>
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
                q: "The flush casements are stunning — indistinguishable from the original single glazing at street level, but the warmth difference is remarkable. Our conservation officer approved them without hesitation.",
                n: "Caroline · Holland Park, W11",
              },
              {
                q: "We specified Vacuum Glazed Windows Ltd's vacuum-glazed flush casements across the whole Georgian terrace. The 7mm units were the only option our listed building consent would allow. Performance has been exceptional.",
                n: "Adrian · Notting Hill, W10",
              },
              {
                q: "As an architect, flush casements with vacuum glazing are now our default specification for every conservation project. The sight lines are perfect and the thermal performance is genuinely impressive.",
                n: "Marika · Studio Vere Architects",
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
          <h2 className="font-display text-4xl md:text-5xl">Ready to specify flush casement windows?</h2>
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
