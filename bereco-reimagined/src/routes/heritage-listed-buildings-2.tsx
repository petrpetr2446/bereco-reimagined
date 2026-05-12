import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import fcMansionImg from "@/assets/fc-mansion.png";
import fcVictorianImg from "@/assets/fc-victorian.png";
import fcBayImg from "@/assets/fc-bay.png";
import fcGreenImg from "@/assets/fc-green.png";
import fcStoneImg from "@/assets/fc-stone.png";
import fcInteriorImg from "@/assets/fc-interior.png";
import fcTimberImg from "@/assets/fc-timber.png";
import case1 from "@/assets/case-1.jpg";
import case2 from "@/assets/case-2.jpg";
import case3 from "@/assets/case-3.jpg";

export const Route = createFileRoute("/heritage-listed-buildings-2")({
  head: () => ({
    meta: [
      { title: "Vacuum Glazing for Listed Buildings & Conservation Areas | Vacuum Glazed Windows Ltd" },
      { name: "description", content: "7mm vacuum glazing for listed buildings and conservation areas. Conservation-approved, 0.4 W/m²K, EPC 2026 compliant. UK supply specialists." },
      { property: "og:title", content: "Vacuum Glazing for Listed Buildings & Conservation Areas | Vacuum Glazed Windows Ltd" },
      { property: "og:description", content: "7mm vacuum glazing for listed buildings and conservation areas. Conservation-approved, 0.4 W/m²K, EPC 2026 compliant. UK supply specialists." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Vacuum Glazing for Listed Buildings & Conservation Areas | Vacuum Glazed Windows Ltd" },
      { name: "twitter:description", content: "7mm vacuum glazing for listed buildings and conservation areas. Conservation-approved, 0.4 W/m²K, EPC 2026 compliant. UK supply specialists." },
    ],
  }),
  component: HeritagePage2,
});

const COMPARISON_ROWS = [
  { attr: "Centre-pane U-value",                   repair: "~5.0 W/m²K",            secondary: "~2.7 W/m²K",       slim: "~1.4–1.8 W/m²K",          vacuum: "0.4–1.0 W/m²K" },
  { attr: "Fits in original rebate",               repair: "Yes",                    secondary: "N/A — sits internally", slim: "Sometimes (12–14mm)",   vacuum: "Yes (7mm)" },
  { attr: "Visual change at street",               repair: "None",                   secondary: "None externally",   slim: "Visible thicker glass line", vacuum: "None" },
  { attr: "Acceptable for listed buildings",       repair: "Always",                 secondary: "Usually",           slim: "Case-by-case",              vacuum: "Generally accepted" },
  { attr: "Acceptable in conservation areas",      repair: "Always",                 secondary: "Always",            slim: "Often",                     vacuum: "Yes" },
  { attr: "Meets Part L 2023 (1.4 W/m²K)",        repair: "No",                     secondary: "No",                slim: "Marginal",                  vacuum: "Yes — by 65%+" },
  { attr: "Meets EPC 2026 fabric performance C",   repair: "No",                     secondary: "Borderline",        slim: "Likely no",                 vacuum: "Yes" },
  { attr: "Acoustic reduction",                    repair: "~25 dB",                 secondary: "~35–45 dB",         slim: "~30 dB",                    vacuum: "Up to 36 dB" },
  { attr: "Reversible",                            repair: "Fully",                  secondary: "Fully",             slim: "Partially",                 vacuum: "Largely — glass swap only" },
];

const UVALUES = [
  { label: "Original single glazing",       range: "5.0–5.8", highlight: false, vsPartL: "4× worse" },
  { label: "Single glazing + secondary",    range: "2.5–2.7", highlight: false, vsPartL: "Borderline" },
  { label: "Slim-profile double glazing",   range: "1.4–1.8", highlight: false, vsPartL: "At or worse than threshold" },
  { label: "Standard double glazing",       range: "1.1–1.4", highlight: false, vsPartL: "Meets" },
  { label: "Our standard vacuum unit",      range: "1.0",     highlight: true,  vsPartL: "Better" },
  { label: "Triple glazing (typical)",      range: "0.6–0.8", highlight: false, vsPartL: "Better" },
  { label: "Our premium vacuum unit",       range: "0.4",     highlight: true,  vsPartL: "3.5× better" },
  { label: "Solid brick wall (reference)",  range: "~0.4",    highlight: false, vsPartL: "—" },
];

const FAQS = [
  {
    q: "Will vacuum glazing actually be approved on a Grade II listed building?",
    a: "In our experience, yes — provided the application is supported by proper documentation and the original frame and glazing bars are retained. Approval rates vary by local authority and by the discretion of individual conservation officers. We supply the technical pack needed to make the case.",
  },
  {
    q: "What happens to my single glazing? Is the original glass discarded?",
    a: "If the existing glass has historic value (cylinder, crown, or hand-pulled glass dating before c.1900), we strongly recommend retention by storing it or relocating it to a less visible elevation. Most period properties have later replacement float glass, in which case it is straightforwardly replaced.",
  },
  {
    q: "Do the sashes need new weights?",
    a: "Vacuum units weigh slightly more than original single glazing because of the second pane and the laminated build-up. For sliding sash windows, we recommend a counterweight check; in most cases an additional 0.5–1.0 kg per sash is needed. We provide unit weights with every quote.",
  },
  {
    q: "Will my EPC actually improve?",
    a: "Yes — substantially. A typical Victorian terrace with single glazing rates F or G on fabric performance alone. Upgrading all windows to vacuum glazing typically lifts the fabric score by 15–25 SAP points, which is normally enough on its own to push the property into band D, and combined with other measures into band C.",
  },
  {
    q: "What is the lifespan of a vacuum glazed unit?",
    a: "Manufacturers warranty the vacuum seal for 15 years and project working life of 25+ years. Field data from the earliest large-scale installations (Japan, late 1990s) shows units still performing within specification after 20+ years.",
  },
  {
    q: "Can it be specified for buildings that aren't listed but are pre-1919?",
    a: "Yes. Most of our work is on properties that aren't listed but are either in conservation areas, subject to Article 4, or simply where the owner wants to preserve the architectural integrity. Pre-1919 buildings are also explicitly recognised in Part L 2023 as eligible for the relaxed 1.2 W/m²K centre-pane standard where preserving appearance matters.",
  },
  {
    q: "Is there a heritage exemption from MEES in 2030?",
    a: "No clear exemption has been confirmed. The October 2026 EPC reform explicitly removes the existing heritage exemption from EPC requirements. Listed building owners and landlords should plan on the basis that they will need to demonstrate compliance — and that vacuum glazing is one of the few interventions that delivers it.",
  },
];

function HeritagePage2() {
  return (
    <PageLayout>

      {/* ── Section 1: Hero ──────────────────────────────────────── */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-14">

          {/* Eyebrow */}
          <div className="mb-10 flex items-center gap-5">
            <div className="h-px w-14 bg-secondary/25" />
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-deep">
              Heritage &middot; Listed &middot; Conservation Areas
            </p>
          </div>

          {/* Editorial headline — each line drops slightly in scale */}
          <h1 className="font-display leading-[1.02] text-secondary">
            <span className="block text-[clamp(2.6rem,7.5vw,6rem)]">The only glazing</span>
            <span className="block text-[clamp(2.6rem,7.5vw,6rem)]">
              slim enough for{" "}
              <em className="not-italic text-primary">conservation</em>
            </span>
            <span className="block text-[clamp(2rem,5vw,4rem)] font-normal text-secondary/45">
              — and warm enough for 2030.
            </span>
          </h1>

          {/* Thin rule */}
          <div className="my-10 h-px bg-secondary/12" />

          {/* Sub-headline + CTAs — two-column on desktop */}
          <div className="grid gap-8 md:grid-cols-[2fr_auto] md:items-end">
            <p className="max-w-prose text-lg leading-relaxed text-secondary/65">
              7mm vacuum insulated glass fits inside original timber frames without altering sightlines, sash weights, or rebates. At 0.4&nbsp;W/m²K, it meets the fabric performance standards coming into force from October 2026 — including for buildings that until recently were exempt.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="/contact"
                className="rounded-full bg-primary px-7 py-3.5 text-center text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-deep"
              >
                Request a heritage quote
              </a>
              <a
                href="tel:02038761234"
                className="rounded-full border border-secondary/25 px-7 py-3.5 text-center text-sm font-semibold text-secondary transition hover:bg-secondary/5"
              >
                Speak to a specialist
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ── Section 2: The 2026 regulatory shift ─────────────────── */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">What's changing</p>
            <h2 className="font-display text-4xl text-secondary md:text-5xl">
              Heritage buildings are no longer outside the regulations.
            </h2>
            <p className="mt-6 text-lg text-secondary/80">
              For decades, listed buildings and many homes in conservation areas operated under a de facto EPC exemption. From October 2026, that exemption is gone. The government's January 2026 partial response to the Reform of the Energy Performance of Buildings regime confirmed three changes that affect every heritage property owner, landlord, and architect working on period stock:
            </p>
          </div>

          {/* Timeline — desktop only */}
          <div className="relative mb-16 hidden md:block">
            <div className="absolute left-0 right-0 top-[4.5rem] h-0.5 bg-primary/25" />
            <div className="relative grid grid-cols-3">
              {[
                { year: "2023",          label: "Part L tightened",                        above: true },
                { year: "October 2026",  label: "New EPCs, heritage exemption removed",     above: false },
                { year: "October 2030",  label: "MEES at EPC C",                            above: true },
              ].map(({ year, label, above }) => (
                <div key={year} className="flex flex-col items-center">
                  {above && (
                    <div className="mb-3 text-center">
                      <p className="text-sm font-semibold text-secondary">{year}</p>
                      <p className="mt-1 max-w-[14ch] text-xs text-muted-foreground">{label}</p>
                    </div>
                  )}
                  {!above && <div className="h-[4.25rem]" />}
                  <div className="relative z-10 h-4 w-4 rounded-full border-2 border-background bg-primary ring-2 ring-primary" />
                  {!above && (
                    <div className="mt-3 text-center">
                      <p className="text-sm font-semibold text-secondary">{year}</p>
                      <p className="mt-1 max-w-[14ch] text-xs text-muted-foreground">{label}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Three columns */}
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                h3: "October 2026: new EPCs",
                body: "A new four-metric EPC replaces the single rating. One of the four metrics, Fabric Performance, measures the building envelope independently — walls, roof, floors, and windows. Glazing performance becomes visible on the certificate rather than hidden inside a composite score.",
              },
              {
                h3: "Heritage exemption removed",
                body: "The same response confirmed that heritage properties will require an EPC when they are marketed, rented, or sold — closing the loophole that previously allowed listed properties to operate outside the EPC framework.",
              },
              {
                h3: "October 2030: MEES at EPC C",
                body: "All privately rented homes in England and Wales must reach EPC band C (or equivalent under the new metrics) by 1 October 2030. The deadline is a single date — there is no phased rollout. Cost cap: £10,000 per property. Penalties of up to £30,000 per breach.",
              },
            ].map(({ h3, body }) => (
              <div key={h3} className="rounded-2xl bg-cream p-8">
                <h3 className="font-display text-xl text-secondary">{h3}</h3>
                <p className="mt-3 text-secondary/75">{body}</p>
              </div>
            ))}
          </div>

          {/* Pull-quote callout */}
          <div className="mt-10 border-l-4 border-primary py-2 pl-6">
            <p className="text-lg italic leading-relaxed text-secondary/85">
              "The combined effect: for the first time, the windows on a Grade II Georgian townhouse will be measured by the same yardstick as those on a 2020 new-build — and the cost of getting it wrong (or doing nothing) is no longer theoretical."
            </p>
          </div>
          <div className="mt-6">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-deep underline underline-offset-4 hover:text-primary"
            >
              Talk to our heritage team about your property <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Section 3: Why vacuum — not the alternatives ─────────── */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">The choice</p>
          <h2 className="font-display text-4xl text-secondary md:text-5xl">
            Four options. One that satisfies both your conservation officer and your EPC.
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-secondary/80">
            Heritage glazing decisions usually come down to four options. The right one depends on what's listed, what your local conservation officer will accept, and what fabric performance you need to reach. Here is how they compare on the things that matter for conservation approval and 2026 compliance.
          </p>

          {/* Comparison table — desktop */}
          <div className="mt-10 hidden overflow-x-auto md:block">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="w-44 py-4 pr-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground" />
                  {[
                    { label: "Repair & draught-proof", highlight: false },
                    { label: "Secondary glazing",        highlight: false },
                    { label: "Slim-profile double glazing", highlight: false },
                    { label: "Vacuum glazing (7mm)",     highlight: true },
                  ].map(({ label, highlight }) => (
                    <th
                      key={label}
                      className={`px-4 py-4 text-left text-sm font-semibold border-b ${
                        highlight
                          ? "bg-primary text-white rounded-t-xl border-primary"
                          : "text-secondary border-border"
                      }`}
                    >
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={row.attr} className={i % 2 === 0 ? "bg-background/60" : ""}>
                    <td className="py-3 pr-4 text-xs font-semibold text-secondary/65">{row.attr}</td>
                    <td className="px-4 py-3 text-secondary/75">{row.repair}</td>
                    <td className="px-4 py-3 text-secondary/75">{row.secondary}</td>
                    <td className="px-4 py-3 text-secondary/75">{row.slim}</td>
                    <td className="bg-primary/10 px-4 py-3 font-semibold text-secondary">{row.vacuum}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile: stacked cards per option */}
          <div className="mt-10 grid gap-4 md:hidden">
            {[
              { title: "Repair & draught-proof",        getData: (r: typeof COMPARISON_ROWS[0]) => r.repair,    highlight: false },
              { title: "Secondary glazing",              getData: (r: typeof COMPARISON_ROWS[0]) => r.secondary, highlight: false },
              { title: "Slim-profile double glazing",    getData: (r: typeof COMPARISON_ROWS[0]) => r.slim,      highlight: false },
              { title: "Vacuum glazing (7mm)",           getData: (r: typeof COMPARISON_ROWS[0]) => r.vacuum,    highlight: true },
            ].map(({ title, getData, highlight }) => (
              <div
                key={title}
                className={`rounded-2xl p-6 ${highlight ? "bg-primary/10 ring-2 ring-primary" : "bg-background"}`}
              >
                <h3 className={`mb-4 font-semibold ${highlight ? "text-primary-deep" : "text-secondary"}`}>{title}</h3>
                <dl className="space-y-3">
                  {COMPARISON_ROWS.map((row) => (
                    <div key={row.attr} className="flex justify-between gap-4 text-sm">
                      <dt className="shrink-0 text-muted-foreground">{row.attr}</dt>
                      <dd className="text-right text-secondary/80">{getData(row)}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs italic text-muted-foreground">
            Figures are indicative centre-pane values; whole-window U-values depend on frame and installation detail.
          </p>

          {/* Three sub-sections */}
          <div className="mt-16 space-y-10">
            {[
              {
                h3: "Why repair and draught-proofing alone is no longer enough",
                body: "Historic England's current guidance (HEAG014) still recommends repair and draught-proofing as the first option for genuinely historic glazing. We agree — where the glass itself has historic value (cylinder glass, crown glass, hand-pulled panes), it should not be touched. But for the vast majority of period properties where the glass is later replacement and only the frame is original, draught-proofing alone takes a single-glazed window from a U-value of around 5.0 down to perhaps 4.0 W/m²K. That is nowhere near the fabric performance the new EPC will require.",
              },
              {
                h3: "Why secondary glazing is now an outdated default",
                body: "Secondary glazing was for years the conservation officer's recommended compromise. It works well acoustically and is fully reversible — but it doubles the cleaning, doubles the visible glass lines from inside, complicates window operation, and leaves the primary glazing performing at single-glazing levels. Vacuum glazing typically achieves a better whole-window U-value than secondary glazing while being completely invisible internally.",
              },
              {
                h3: "Why slim-profile double glazing isn't enough",
                body: "Slim-profile units are typically 12–14mm thick — too deep for many original rebates without routing out the frame, which conservation officers may refuse. Their U-values (1.4–1.8 W/m²K) will not meet the fabric performance standard expected under the new EPC framework. Vacuum glazing achieves substantially better thermal performance in roughly half the thickness.",
              },
            ].map(({ h3, body }) => (
              <div key={h3} className="max-w-3xl">
                <h3 className="font-display text-2xl text-secondary">{h3}</h3>
                <p className="mt-3 leading-relaxed text-secondary/75">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Conservation officer's view ───────────────── */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">What planners accept</p>
          <h2 className="mb-12 font-display text-4xl text-secondary md:text-5xl">
            Why 7mm vacuum units pass planning where 14mm slim-profile units don't.
          </h2>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="space-y-5 leading-relaxed text-secondary/80">
              <p>
                When a conservation officer reviews a window application, three things are looked at first:{" "}
                <strong className="text-secondary">sightlines, profile depth, and reversibility.</strong>{" "}
                Vacuum glazing performs on all three in ways that standard insulated units cannot.
              </p>
              <p>
                <strong className="text-secondary">Sightlines.</strong> The 7mm unit sits within the existing rebate of an original sash or casement frame, with no widening of glazing bars or putty lines. Externally, the glass plane reads identically to the original single-pane glazing — including at the close inspection distances conservation officers use.
              </p>
              <p>
                <strong className="text-secondary">Profile depth.</strong> Conservation officers regularly refuse 14mm slim-profile units because they require the rebate to be deepened, altering the historic timber section. The 7mm vacuum unit fits the original 8–10mm rebate of most pre-war windows without any modification to the frame.
              </p>
              <p>
                <strong className="text-secondary">Reversibility.</strong> Because the glass swap takes place within the original frame, the intervention is largely reversible — a key test in listed building consent applications. If a future owner wanted to return to single glazing, the frame and joinery are untouched.
              </p>
              <p>
                Historic England's published guidance confirms that "installation of secondary glazing to windows or slim-profile/vacuum double-glazing within historic frames will generally be acceptable" — provided original glazing bars are retained and the windows are simultaneously refurbished and draught-proofed (HEAG014, Energy Efficiency and Historic Buildings).
              </p>
            </div>
            <div className="overflow-hidden rounded-3xl">
              <img
                src={fcTimberImg}
                alt="Cross-section of a timber frame showing the 7mm vacuum unit fitting within the original rebate"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-14 rounded-2xl bg-cream p-10">
            <div className="mb-4 flex gap-0.5 text-primary">
              {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
            </div>
            <blockquote className="font-display text-2xl leading-relaxed text-secondary">
              "The 7mm profile is the only option for our conservation projects. It's now our default specification for all heritage work."
            </blockquote>
            <figcaption className="mt-4 text-sm font-semibold text-primary-deep">— Marika, Studio Vere Architects</figcaption>
          </div>
        </div>
      </section>

      {/* ── Section 5: Listed building consent & conservation areas ─ */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Permissions</p>
          <h2 className="font-display text-4xl text-secondary md:text-5xl">
            Understanding what you need before you specify.
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-secondary/80">
            The permissions framework around heritage windows is one of the most misunderstood areas of the UK planning system. The rules differ depending on whether your building is listed, in a conservation area, both, or neither. Here's the practical version.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {[
              {
                h3: "Listed buildings (Grade I, II*, II)",
                body: "Listed building consent is required for any work to windows, internal or external. There is no \"like-for-like\" exemption. Around 90% of listed building consent applications are approved nationally, but the case must be made with a Heritage Statement explaining the impact on the building's special interest. We provide technical specifications, cross-section drawings, and U-value calculations to support applications.",
              },
              {
                h3: "Conservation areas with an Article 4 Direction",
                body: "Article 4 Directions remove permitted development rights — meaning even like-for-like window replacement requires planning permission. Around 10,000 conservation areas exist in England; a significant minority carry Article 4 Directions. Check your local authority's website or ask the conservation officer.",
              },
              {
                h3: "Conservation areas without Article 4",
                body: "Like-for-like replacement in matching material and design generally falls under permitted development. Switching from timber to uPVC, or changing the glazing pattern, will not.",
              },
              {
                h3: "Non-designated heritage assets",
                body: "For pre-1919 properties that are not listed and not in a conservation area, Part L 2023 building regulations apply — but Approved Document L paragraph 4.19 allows replacement windows to meet a 1.2 W/m²K centre-pane standard where preserving the external appearance is necessary. Vacuum glazing comfortably clears this threshold.",
              },
            ].map(({ h3, body }) => (
              <div key={h3} className="rounded-2xl bg-background p-8">
                <h3 className="text-xl font-semibold text-secondary">{h3}</h3>
                <p className="mt-3 text-secondary/75">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-deep underline underline-offset-4 hover:text-primary"
            >
              Tell us about your property — we'll advise on what consent you'll need <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Section 6: Performance numbers ──────────────────────── */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Performance</p>
          <h2 className="font-display text-4xl text-secondary md:text-5xl">What 0.4 W/m²K actually means.</h2>
          <p className="mt-6 max-w-3xl text-lg text-secondary/80">
            U-values are often quoted without context. Here's a like-for-like comparison of the glazing options most often specified for heritage projects, against the new and existing regulatory thresholds.
          </p>

          {/* U-value table with highlighted vacuum rows */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-border">
            <div className="grid grid-cols-[1fr_auto_auto] bg-secondary/5 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <span>Glazing type</span>
              <span className="px-4 text-right">Centre-pane U-value (W/m²K)</span>
              <span className="text-right">vs Part L 2023</span>
            </div>
            <div className="divide-y divide-border">
              {UVALUES.map(({ label, range, highlight, vsPartL }) => (
                <div
                  key={label}
                  className={`grid grid-cols-[1fr_auto_auto] items-center px-6 py-4 ${
                    highlight ? "bg-primary/10" : ""
                  }`}
                >
                  <span className={`text-sm ${highlight ? "font-semibold text-primary-deep" : "text-secondary/80"}`}>
                    {label}
                  </span>
                  <span
                    className={`px-4 text-right text-sm tabular-nums ${
                      highlight ? "font-semibold text-primary-deep" : "text-muted-foreground"
                    }`}
                  >
                    {range}
                  </span>
                  <span className="text-right text-xs text-muted-foreground">{vsPartL}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-border bg-secondary/5 px-6 py-3">
              <p className="text-xs text-muted-foreground">Part L 2023 threshold: 1.4 W/m²K (centre-pane)</p>
            </div>
          </div>

          {/* Pull-out callout */}
          <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/10 px-8 py-7">
            <p className="text-lg font-semibold text-primary-deep">
              Our premium 7mm vacuum unit has the thermal performance of a brick wall — in a unit thinner than a pencil.
            </p>
          </div>

          {/* Four-stat strip */}
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "1.0 W/m²K", label: "Standard unit" },
              { value: "0.4 W/m²K", label: "Premium unit" },
              { value: "36 dB",      label: "Acoustic reduction" },
              { value: "7mm",        label: "Total unit thickness" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-display text-3xl text-primary-deep md:text-4xl">{value}</div>
                <p className="mt-2 text-[14px] leading-snug text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 7: Suitable property types ──────────────────── */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Where it works</p>
          <h2 className="mb-12 font-display text-4xl text-secondary md:text-5xl">
            Vacuum glazing is specified across every period of British architecture.
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                img: fcMansionImg,
                h3: "Georgian townhouses (1714–1830)",
                body: "Sash windows with fine glazing bars, where slim sightlines are non-negotiable.",
              },
              {
                img: fcVictorianImg,
                h3: "Victorian terraces (1837–1901)",
                body: "Larger panes, often with horns; vacuum units retain the visual flatness of original glass.",
              },
              {
                img: fcBayImg,
                h3: "Edwardian villas (1901–1910)",
                body: "Mixed casement and sash configurations, often with leaded top lights.",
              },
              {
                img: fcGreenImg,
                h3: "Arts & Crafts and inter-war (1910–1939)",
                body: "Steel and timber casements with original metalwork.",
              },
              {
                img: fcStoneImg,
                h3: "Cotswold and rural stone cottages",
                body: "Small panes, deep reveals, where 14mm units physically don't fit.",
              },
              {
                img: fcInteriorImg,
                h3: "20th-century listed buildings",
                body: "Including post-war modernist listings, where original window detail is part of the protected character.",
              },
            ].map(({ img, h3, body }) => (
              <div key={h3} className="overflow-hidden rounded-2xl bg-background">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={img}
                    alt={h3}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-secondary">{h3}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 8: How we work ───────────────────────────────── */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Process</p>
          <h2 className="font-display text-4xl text-secondary md:text-5xl">
            Supply specialists — designed for the heritage workflow.
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-secondary/80">
            We are a supply-only specialist. Our work begins when you send us drawings and ends when the units arrive at your site, perfectly packed, with full technical documentation. Most projects use our team alongside the homeowner's own conservation architect and an experienced installer or joiner.
          </p>
          <div className="mt-14 divide-y divide-border">
            {[
              {
                n: "01",
                title: "Specification",
                body: "Send us frame sizes, the listing grade (if any), and any planning correspondence. We return a full supply quote and technical drawing pack within 24 hours.",
              },
              {
                n: "02",
                title: "Documentation for consent",
                body: "We provide cross-section drawings, U-value certificates, glazing specifications, and product literature suitable for inclusion in a listed building consent or planning application. Most conservation officers in London and the home counties are now familiar with the technology.",
              },
              {
                n: "03",
                title: "Manufacture",
                body: "8–10 week lead time from European specialist manufacturers in Lithuania and Poland. Every unit is made to measure.",
              },
              {
                n: "04",
                title: "Delivery",
                body: "Units arrive crated, with installation guidance for your joiner. We can recommend installers in London and the South East if needed.",
              },
            ].map(({ n, title, body }) => (
              <div key={n} className="grid gap-4 py-10 md:grid-cols-[5rem_1fr_2fr] md:items-start">
                <div className="font-display text-5xl leading-none text-primary/25">{n}</div>
                <h3 className="font-display text-2xl text-secondary">{title}</h3>
                <p className="leading-relaxed text-secondary/75">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 9: Case studies ──────────────────────────────── */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Recent heritage projects</p>
              <h2 className="font-display text-4xl text-secondary md:text-5xl">Conservation-approved across the UK.</h2>
            </div>
            <a
              href="/inspiration/case-studies"
              className="text-sm font-semibold text-primary-deep underline underline-offset-4 hover:text-primary"
            >
              View all case studies →
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { img: case1, location: "Chelsea · SW3",       title: "Grade II Georgian townhouse — whole-house vacuum glazing programme, 32 windows" },
              { img: case2, location: "Holland Park · W14",  title: "Grade II* Edwardian villa — listed building consent secured first time" },
              { img: case3, location: "Notting Hill · W11",  title: "Conservation area Victorian terrace — 18 sash windows, Article 4 direction" },
            ].map((c) => (
              <a
                key={c.title}
                href="/inspiration/case-studies"
                className="group block overflow-hidden rounded-2xl bg-background transition"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-primary">{c.location}</p>
                  <h3 className="mt-2 text-lg font-semibold leading-snug text-secondary">{c.title}</h3>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-deep">
                    View case study <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 10: FAQ ──────────────────────────────────────── */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-3xl px-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Common questions</p>
          <h2 className="mb-10 font-display text-4xl text-secondary md:text-5xl">Heritage &amp; listed building FAQ.</h2>
          <Accordion type="single" collapsible>
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-secondary hover:no-underline hover:text-primary">
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

      {/* ── Section 11: Closing CTA ──────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-secondary py-24 text-white">
        <div className="absolute inset-0 -z-10 opacity-20">
          <img src={fcInteriorImg} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl">
            Plan your heritage project with specialists who know the regulations.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
            Send us your frame sizes, a few photographs, and any planning correspondence — and we'll return a full supply quote, technical drawing pack, and a clear view of what consent your project will need. Within 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="/contact"
              className="rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition hover:bg-primary-deep"
            >
              Request a heritage quote
            </a>
            <a
              href="tel:02038761234"
              className="rounded-full border border-white/30 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Call 020 3876 1234
            </a>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
