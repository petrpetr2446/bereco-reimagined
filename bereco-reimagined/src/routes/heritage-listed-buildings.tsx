import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Building2, Leaf, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import heroImg from "@/assets/hero-homes.jpg";
import case1 from "@/assets/case-1.jpg";
import case2 from "@/assets/case-2.jpg";
import case3 from "@/assets/case-3.jpg";

export const Route = createFileRoute("/heritage-listed-buildings")({
  head: () => ({
    meta: [
      { title: "Heritage & Listed Buildings — Vacuum Glazing | Vacuum Glazed Windows Ltd" },
      { name: "description", content: "Vacuum glazing is the only solution slim enough for most conservation areas and listed buildings. 7mm units accepted where standard double glazing is refused. EPC 2026 compliant." },
    ],
  }),
  component: HeritagePage,
});

function HeritagePage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[520px] w-full overflow-hidden">
          <img src={heroImg} alt="Listed building with period timber windows" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-secondary/30 to-secondary/70" />
          <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">Heritage · Listed Buildings · Conservation Areas</p>
            <h1 className="max-w-4xl text-balance font-display text-4xl text-white md:text-5xl lg:text-6xl">
              The only glazing solution for most listed buildings
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/85">
              Standard double glazing is typically refused on listed buildings and in conservation areas. Vacuum glazing at 7mm is the only technology that delivers EPC-compliant U-values within original timber frame rebates.
            </p>
            <a href="/contact" className="mt-8 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition hover:bg-primary-deep">
              Request a heritage consultation
            </a>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">The challenge</p>
              <h2 className="font-display text-4xl text-secondary md:text-5xl">Why standard double glazing fails heritage buildings</h2>
              <p className="mt-6 text-lg text-secondary/80">
                Standard double-glazed units are 24–28mm thick. The rebate depth of a typical Georgian or Victorian sash window is 8–12mm. Installing standard double glazing requires either:
              </p>
              <ul className="mt-4 space-y-3 text-secondary/80">
                {[
                  "Replacing the original frame with a new, deeper-section window — typically refused in conservation areas",
                  "Reducing the glass area by fitting a stepped sub-frame — visually unacceptable to conservation officers",
                  "Accepting single glazing and failing future EPC minimum standards",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-cream p-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">The solution</p>
              <h3 className="font-display text-3xl text-secondary">Why vacuum glazing succeeds</h3>
              <p className="mt-4 text-secondary/80">At just 7mm total thickness, vacuum glazed units fit within the original rebate depth of almost any period timber window — with no modification to the frame, no change to the sightlines, and no visual difference from street level.</p>
              <div className="mt-6 grid grid-cols-2 gap-6">
                {[
                  ["7mm", "Total unit thickness — fits original rebates"],
                  ["0.4", "W/m²K premium U-value — better than triple glazing"],
                  ["1.0", "W/m²K standard U-value — exceeds most EPC requirements"],
                  ["No", "structural alteration required to timber frames"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <div className="font-display text-3xl text-primary">{v}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key benefits */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Our heritage credentials</p>
            <h2 className="font-display text-4xl text-secondary md:text-5xl">Accepted where others are refused</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "Conservation Area Approved", body: "Our 7mm vacuum units have been accepted across conservation areas throughout the UK. We can provide evidence of prior approvals to support your planning application." },
              { icon: Building2, title: "Listed Building Consent", body: "Vacuum glazing is the primary glazing solution recommended by many heritage consultants and conservation officers for Grade I, II* and Grade II listed buildings." },
              { icon: Leaf, title: "EPC 2026 Compliant", body: "Our standard units achieve 1.0 W/m²K and premium units 0.4 W/m²K — exceeding the U-value requirements expected under the October 2026 EPC standards, even for listed buildings." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl bg-background p-8">
                <Icon className="h-9 w-9 text-primary" strokeWidth={1.5} />
                <h3 className="mt-4 text-xl font-semibold text-secondary">{title}</h3>
                <p className="mt-3 text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Heritage projects</p>
              <h2 className="font-display text-4xl text-secondary md:text-5xl">Recent listed building work</h2>
            </div>
            <a href="/inspiration/case-studies" className="text-sm font-semibold text-primary-deep underline underline-offset-4 hover:text-primary">All case studies →</a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { img: case1, grade: "Grade II Listed · W11", title: "Victorian terrace: 18 sash windows, conservation area approval first time" },
              { img: case2, grade: "Grade II* Listed · W14", title: "Edwardian villa: bay and casement windows, listed building consent granted" },
              { img: case3, grade: "Grade I Listed · SW3", title: "Georgian townhouse: whole-house programme, Heritage England engagement" },
            ].map((c) => (
              <a key={c.title} href="/inspiration/case-studies" className="group block overflow-hidden rounded-2xl bg-background transition">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={c.img} alt={c.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-primary">{c.grade}</p>
                  <h3 className="mt-2 text-lg font-semibold leading-snug text-secondary">{c.title}</h3>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-deep">View case study <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-secondary py-24 text-white">
        <div className="absolute inset-0 -z-10 opacity-20">
          <img src={heroImg} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl">Talk to our heritage specialists</h2>
          <p className="mx-auto mt-6 max-w-xl text-white/80">We can advise on conservation area and listed building applications, supply evidence of prior approvals, and provide the technical specifications required by your conservation officer.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="/contact" className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-deep">Request a consultation</a>
            <a href="/vacuum-windows" className="rounded-full bg-white/10 px-7 py-3.5 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/20">Browse windows</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
