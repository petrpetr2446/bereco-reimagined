import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import heroImg from "@/assets/hero-homes.jpg";
import case1 from "@/assets/case-1.jpg";
import case2 from "@/assets/case-2.jpg";
import case3 from "@/assets/case-3.jpg";

export const Route = createFileRoute("/inspiration/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Heritage Vacuum Glazing Projects | Vacuum Glazed Windows Ltd" },
      { name: "description", content: "Case studies of vacuum glazed timber window and door projects across the UK — listed buildings, conservation areas, Victorian terraces and Georgian townhouses." },
    ],
  }),
  component: CaseStudiesPage,
});

const CASES = [
  { img: case1, grade: "Grade II Listed · Notting Hill W11", title: "Victorian Terrace — 18 Sash Windows", summary: "Complete sash window upgrade for a five-storey stucco-fronted Victorian terrace. Conservation area approval achieved first time. U-value improved from 5.7 to 1.0 W/m²K across all 18 windows." },
  { img: case2, grade: "Grade II* Listed · Holland Park W14", title: "Edwardian Villa — Bay & Casement Windows", summary: "Bespoke bay window restoration with conservation-approved vacuum glazed units. Original frames retained and restored by our manufacturing partners; vacuum units installed on site in three days." },
  { img: case3, grade: "Grade I Listed · Chelsea SW3", title: "Georgian Townhouse — Whole-House Programme", summary: "Whole-house vacuum glazing programme for a six-storey Grade I listed Georgian townhouse. Heritage England pre-application engagement supported; listed building consent granted. 32 windows completed over two phases." },
  { img: heroImg, grade: "Conservation Area · Kensington W8", title: "Mid-Victorian Terrace — Mixed Window Types", summary: "Eight sash windows and four casements upgraded in a single programme. EPC rating improved from E to C. Heat loss reduced by an estimated 58% across the window envelope." },
  { img: case1, grade: "Grade II Listed · Islington N1", title: "Georgian Terrace — Front Elevation Sashes", summary: "Front elevation sash window upgrade for a mid-terrace Georgian property in a sensitive conservation area. Conservation officer pre-application consultation included in project management." },
  { img: case2, grade: "Conservation Area · Richmond TW9", title: "Edwardian Semi-Detached — Full Programme", summary: "Twelve windows across all elevations upgraded with vacuum glazed units. Combination of sash and casement windows; timber frames restored and refinished as part of the supply contract." },
];

function CaseStudiesPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[400px] w-full overflow-hidden">
          <img src={heroImg} alt="Heritage glazing case studies" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-secondary/30 to-secondary/70" />
          <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">Inspiration</p>
            <h1 className="max-w-3xl text-balance font-display text-4xl text-white md:text-5xl">Case studies</h1>
            <p className="mt-4 max-w-xl text-lg text-white/85">Real projects. Real results. From Grade I listed townhouses to Victorian terraces across the UK.</p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {CASES.map((c) => (
              <article key={c.title} className="group overflow-hidden rounded-2xl bg-card transition">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={c.img} alt={c.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-7">
                  <p className="text-xs uppercase tracking-[0.18em] text-primary">{c.grade}</p>
                  <h2 className="mt-2 text-xl font-semibold text-secondary">{c.title}</h2>
                  <p className="mt-3 text-sm text-muted-foreground">{c.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary-deep">
                    Read more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
