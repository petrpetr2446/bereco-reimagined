import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SpecTable } from "@/components/site/SpecTable";
import { CtaBand } from "@/components/site/CtaBand";
import { cases } from "./case-studies.index";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const item = cases.find((c) => c.slug === params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.item.title ?? "Case Study"} — Vitrum Heritage` },
      { name: "description", content: `${loaderData?.item.area}: ${loaderData?.item.title}.` },
      { property: "og:title", content: loaderData?.item.title ?? "Case Study" },
      { property: "og:description", content: `${loaderData?.item.windows} windows, whole-window U ${loaderData?.item.uvalue} W/m²K.` },
      { property: "og:image", content: loaderData?.item.img },
    ],
  }),
  errorComponent: () => <div className="p-12 text-center">Couldn't load this case study.</div>,
  notFoundComponent: () => (
    <PageLayout>
      <div className="mx-auto max-w-3xl px-4 py-32 text-center">
        <h1 className="font-display text-4xl text-secondary">Case study not found</h1>
        <Link to="/case-studies" className="mt-6 inline-block text-primary-deep underline">Back to all case studies</Link>
      </div>
    </PageLayout>
  ),
  component: CaseStudyDetail,
});

function CaseStudyDetail() {
  const { item } = Route.useLoaderData();
  const others = cases.filter((c) => c.slug !== item.slug).slice(0, 3);

  return (
    <PageLayout>
      <PageHero
        eyebrow={item.area}
        title={item.title}
        lede={`A ${item.period.toLowerCase()} property in central London — restored, vacuum-glazed and ready for a second century.`}
        image={item.img}
        crumbs={[{ label: "Case Studies", to: "/case-studies" }, { label: item.area }]}
      />

      <section className="border-b border-border bg-cream">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 text-center md:grid-cols-4">
          {[
            ["Period", item.period],
            ["Windows upgraded", String(item.windows)],
            ["Whole-window U", `${item.uvalue} W/m²K`],
            ["Programme", "3–6 weeks"],
          ].map(([l, v]) => (
            <div key={l}>
              <div className="font-display text-3xl text-primary-deep">{v}</div>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading eyebrow="The brief" title="Modern comfort, original character" />
            <p className="mt-5 text-lg leading-relaxed text-secondary/80">
              The owners had lived with the original single-glazed windows for a decade — beautiful in summer, brutal in winter. With a young family and a planned long stay in the property, they wanted a heritage-faithful upgrade that wouldn't compromise the building's listed character.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-secondary/80">
              We surveyed every window, secured listed-building consent for the slim vacuum units, and phased the install across two visits to minimise family disruption.
            </p>
          </div>
          <SpecTable caption="Project specification" rows={[
            { label: "Glazing unit", value: "8.3 mm VIG" },
            { label: "Acoustic gain", value: "+13 dB" },
            { label: "Heat-loss reduction", value: "≈58%" },
            { label: "Joinery warranty", value: "10 years" },
            { label: "Glazing warranty", value: "25 years" },
          ]} />
        </div>
      </section>

      <section className="bg-secondary py-20 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="font-display text-3xl leading-snug">"Identical from the street, transformed inside. We barely noticed the install — and we haven't touched the heating since."</p>
          <p className="mt-6 text-sm uppercase tracking-widest text-primary">Owner · {item.area}</p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="More projects" title="Recent case studies" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {others.map((c) => (
              <Link key={c.slug} to="/case-studies/$slug" params={{ slug: c.slug }} className="group block overflow-hidden rounded-2xl bg-card ring-1 ring-border transition hover:ring-primary">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={c.img} alt={c.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-primary">{c.area}</p>
                  <h3 className="mt-2 text-lg font-semibold leading-snug text-secondary">{c.title}</h3>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-deep">View <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
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
