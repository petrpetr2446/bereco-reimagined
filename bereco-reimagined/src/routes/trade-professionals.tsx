import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import heroImg from "@/assets/hero-homes.jpg";

export const Route = createFileRoute("/trade-professionals")({
  head: () => ({
    meta: [
      { title: "Trade & Professionals — Vacuum Glazing Supply | Vacuum Glazed Windows Ltd" },
      { name: "description", content: "Trade accounts for architects, joiners, developers and managing agents. Technical specifications, trade pricing, project support and CPD available." },
    ],
  }),
  component: TradePage,
});

const TRADE_TYPES = [
  { title: "Architects & Designers", body: "Access to full technical specifications, NBS clause library, performance data sheets, and BIM objects. We support conservation statements and heritage planning submissions." },
  { title: "Joiners & Installers", body: "Trade account pricing with volume discounts from the first order. Dedicated account manager, installation guides, and phone support during fitting." },
  { title: "Developers & Contractors", body: "Project-scale supply with phased delivery to site. We work with contractors on refurbishment programmes and heritage-sensitive new-build schemes." },
  { title: "Managing Agents", body: "Ongoing supply relationships for portfolio-scale window replacement programmes. Consistent specifications and pricing across multiple properties." },
];

function TradePage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[480px] w-full overflow-hidden">
          <img src={heroImg} alt="Heritage building project" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-secondary/30 to-secondary/70" />
          <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">Trade & Professionals</p>
            <h1 className="max-w-3xl text-balance font-display text-4xl text-white md:text-5xl">
              The vacuum glazing supply partner for heritage professionals
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/85">
              Trade accounts, technical support, project pricing and CPD for architects, joiners, developers and managing agents.
            </p>
            <a href="/contact" className="mt-8 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition hover:bg-primary-deep">
              Apply for a trade account
            </a>
          </div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Who we work with</p>
            <h2 className="font-display text-4xl text-secondary md:text-5xl">Built for professionals</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {TRADE_TYPES.map((t) => (
              <div key={t.title} className="rounded-2xl bg-card p-8">
                <h3 className="text-xl font-semibold text-secondary">{t.title}</h3>
                <p className="mt-3 text-muted-foreground">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical resources */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Technical resources</p>
            <h2 className="font-display text-4xl text-secondary md:text-5xl">Everything you need to specify</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Performance Data Sheets", "U-value calculations, acoustic test reports, and condensation resistance data for all product lines."],
              ["Technical Drawings", "DWG and PDF section drawings for all window and door styles in standard and bespoke sizes."],
              ["NBS Clause Library", "Pre-written NBS specification clauses for all product categories, maintained and updated annually."],
              ["BIM Objects", "Revit families for all standard window and door styles, available on request."],
              ["Conservation Statements", "Evidence files of prior planning approvals and listed building consents for vacuum glazing across the UK."],
              ["CPD Presentations", "RIBA-accredited CPD on vacuum glazing technology, heritage applications and EPC compliance."],
            ].map(([title, body]) => (
              <div key={title as string} className="rounded-2xl bg-background p-6">
                <h3 className="font-semibold text-secondary">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-secondary py-20 text-white">
        <div className="absolute inset-0 -z-10 opacity-20">
          <img src={heroImg} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-3xl md:text-5xl">Open a trade account</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">Apply for a trade account and get access to trade pricing, technical resources, and a dedicated account manager.</p>
          <a href="/contact" className="mt-8 inline-block rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition hover:bg-primary-deep">
            Apply now
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
