import { Link } from "@tanstack/react-router";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { SpecTable } from "@/components/site/SpecTable";
import { Faq } from "@/components/site/Faq";
import { CtaBand } from "@/components/site/CtaBand";

export interface ProductPageProps {
  eyebrow: string;
  title: string;
  lede: string;
  heroImage: string;
  intro: { heading: string; body: string[] };
  features: { icon: LucideIcon; title: string; body: string }[];
  spec: { caption: string; rows: { label: string; value: string; note?: string }[] };
  faqs: { q: string; a: string }[];
  related?: { label: string; to: string }[];
  crumbs?: { label: string; to?: string }[];
}

export function ProductPage(p: ProductPageProps) {
  return (
    <PageLayout>
      <PageHero
        eyebrow={p.eyebrow}
        title={p.title}
        lede={p.lede}
        image={p.heroImage}
        crumbs={p.crumbs ?? [{ label: "Glazing" }, { label: p.eyebrow }]}
      />

      <section className="bg-cream py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2 lg:items-center">
          <img src={p.heroImage} alt={p.title} loading="lazy" className="rounded-2xl object-cover shadow-xl" />
          <div>
            <SectionHeading eyebrow="Overview" title={p.intro.heading} />
            {p.intro.body.map((para, i) => (
              <p key={i} className="mt-5 text-lg leading-relaxed text-secondary/80">{para}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Why it works" title="Built for heritage homes" align="center" />
          <div className="mt-12">
            <FeatureGrid items={p.features} />
          </div>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2 lg:items-start">
          <SectionHeading eyebrow="Performance" title="Specifications & data" lede="Independently verified figures from our standard installation. Bespoke configurations available on request." />
          <SpecTable caption={p.spec.caption} rows={p.spec.rows} />
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="FAQs" title="Common questions" align="center" />
          <div className="mt-12">
            <Faq items={p.faqs} />
          </div>
        </div>
      </section>

      {p.related && p.related.length > 0 && (
        <section className="bg-secondary py-20 text-white">
          <div className="mx-auto max-w-7xl px-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Continue exploring</p>
            <h3 className="font-display text-3xl md:text-4xl">Related glazing</h3>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {p.related.map((r) => (
                <Link key={r.to} to={r.to as any} className="group flex items-center justify-between rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition hover:bg-white/10">
                  <span className="font-display text-xl">{r.label}</span>
                  <ArrowRight className="h-5 w-5 text-primary transition group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand secondary={{ label: "Talk to us", to: "/contact" }} />
    </PageLayout>
  );
}
