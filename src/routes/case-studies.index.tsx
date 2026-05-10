import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import case1 from "@/assets/case-1.jpg";
import case2 from "@/assets/case-2.jpg";
import case3 from "@/assets/case-3.jpg";
import sash from "@/assets/product-sash.jpg";
import casement from "@/assets/product-casement.jpg";
import workshop from "@/assets/workshop.jpg";

export const cases = [
  { slug: "notting-hill-stucco-terrace", img: case1, area: "Notting Hill · W11", title: "Stucco-fronted Victorian terrace, 18 sash windows", period: "Victorian", windows: 18, uvalue: "1.4" },
  { slug: "holland-park-edwardian-villa", img: case2, area: "Holland Park · W14", title: "Listed Edwardian villa with conservation-approved bay restoration", period: "Edwardian", windows: 24, uvalue: "1.3" },
  { slug: "chelsea-georgian-townhouse", img: case3, area: "Chelsea · SW3", title: "Grade II Georgian townhouse: whole-house vacuum glazing", period: "Georgian", windows: 32, uvalue: "1.2" },
  { slug: "kensington-mansion-block", img: sash, area: "Kensington · W8", title: "Mansion block phased upgrade across 14 leasehold flats", period: "Victorian", windows: 96, uvalue: "1.4" },
  { slug: "fulham-edwardian-terrace", img: casement, area: "Fulham · SW6", title: "Edwardian terrace with leaded casement encapsulation", period: "Edwardian", windows: 12, uvalue: "1.3" },
  { slug: "marylebone-georgian-mews", img: workshop, area: "Marylebone · W1", title: "Georgian mews house — conservation area whole-property upgrade", period: "Georgian", windows: 9, uvalue: "1.2" },
];

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title: "Case Studies — Vitrum Heritage" },
      { name: "description", content: "Heritage glazing case studies from Notting Hill to Chelsea, Kensington to Marylebone." },
      { property: "og:title", content: "Case Studies" },
      { property: "og:description", content: "Recent vacuum glazing projects across central London." },
      { property: "og:image", content: case1 },
    ],
  }),
  component: CaseStudiesIndex,
});

function CaseStudiesIndex() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Case Studies"
        title="Recent heritage projects across central London"
        lede="A small selection of the period homes and listed buildings we've upgraded — from single sash retrofits to whole-block phased programmes."
        crumbs={[{ label: "Case Studies" }]}
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cases.map((c) => (
              <Link key={c.slug} to="/case-studies/$slug" params={{ slug: c.slug }} className="group block overflow-hidden rounded-2xl bg-card ring-1 ring-border transition hover:ring-primary">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={c.img} alt={c.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-primary">{c.area}</p>
                  <h3 className="mt-2 text-lg font-semibold leading-snug text-secondary">{c.title}</h3>
                  <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{c.period}</span><span>·</span><span>{c.windows} windows</span><span>·</span><span>U {c.uvalue}</span>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-deep">
                    View case study <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </PageLayout>
  );
}
