import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SpecTable } from "@/components/site/SpecTable";
import { Faq } from "@/components/site/Faq";
import { CtaBand } from "@/components/site/CtaBand";
import img from "@/assets/about-hero.jpg";

export const Route = createFileRoute("/epc-2026")({
  head: () => ({
    meta: [
      { title: "EPC 2026 Guide — Vitrum Heritage" },
      { name: "description", content: "What the October 2026 minimum EPC standards mean for owners of period and listed homes — and how to comply." },
      { property: "og:title", content: "EPC 2026: A Heritage Owner's Guide" },
      { property: "og:description", content: "Understand the new standards and your compliance options." },
      { property: "og:image", content: img },
    ],
  }),
  component: EpcPage,
});

function EpcPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="EPC 2026"
        title="The October 2026 EPC standards — what they mean for period homes"
        lede="A plain-English guide for owners of listed and conservation-area properties facing the new minimum energy performance requirements."
        image={img}
        crumbs={[{ label: "EPC 2026" }]}
      />

      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4">
          <SectionHeading eyebrow="The headline" title="What's actually changing?" />
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-secondary/80">
            <p>From October 2026, new minimum EPC ratings come into force across the UK private rented sector — and the trajectory of policy points towards owner-occupied homes following.</p>
            <p>For owners of period and listed buildings, the practical question is simple: how do you reach a higher EPC band when standard double glazing isn't permitted, and external insulation would damage architectural detail?</p>
            <p>Vacuum glazing is one of the few interventions that genuinely solves this — combining significant U-value improvement with full preservation of the original window appearance.</p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeading eyebrow="Comparison" title="How the options stack up" />
          <div className="mt-10">
            <SpecTable caption="Heritage-compatible glazing options" rows={[
              { label: "Original single glazing", value: "5.4 W/m²K" },
              { label: "Slim double glazing", value: "1.8 W/m²K", note: "rarely conservation-approved" },
              { label: "Vacuum glazing (standard)", value: "1.0 W/m²K" },
              { label: "Vacuum glazing (premium)", value: "0.4 W/m²K" },
              { label: "Secondary glazing", value: "1.6 W/m²K", note: "with original retained" },
            ]} />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-3xl px-4">
          <SectionHeading eyebrow="FAQ" title="Common questions about the new standards" align="center" />
          <div className="mt-12">
            <Faq items={[
              { q: "Does it apply to listed buildings?", a: "Listed buildings have historically been treated as exemptions, but updated guidance reduces the scope of automatic exemption. We strongly recommend acting before the deadline." },
              { q: "What rating do I need to reach?", a: "Most rental properties will need to reach EPC C or higher. Owner-occupied policy is still in consultation, but trajectory is clearly upward." },
              { q: "Will vacuum glazing alone get me there?", a: "It is one of the highest-impact single measures available for a period home — especially when combined with draughtproofing and roof insulation." },
              { q: "Do I need listed-building consent?", a: "Often yes. We handle the application on your behalf as part of our service." },
            ]} />
          </div>
        </div>
      </section>

      <CtaBand title="Get a personal compliance assessment" body="Our specialists will assess your property and outline a clear path to compliance." secondary={{ label: "Talk to us", to: "/contact" }} />
    </PageLayout>
  );
}
