import type { LucideIcon } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FeatureGrid } from "@/components/site/FeatureGrid";
import { CtaBand } from "@/components/site/CtaBand";

export interface AudiencePageProps {
  eyebrow: string;
  title: string;
  lede: string;
  heroImage: string;
  painPoints: { icon: LucideIcon; title: string; body: string }[];
  workflow: { step: string; title: string; body: string }[];
  ctaTitle?: string;
}

export function AudiencePage(p: AudiencePageProps) {
  return (
    <PageLayout>
      <PageHero eyebrow={p.eyebrow} title={p.title} lede={p.lede} image={p.heroImage} crumbs={[{ label: "Who we help" }, { label: p.eyebrow }]} />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="What you're up against" title="The challenges we solve" align="center" />
          <div className="mt-12">
            <FeatureGrid items={p.painPoints} />
          </div>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeading eyebrow="How we work with you" title="A process built for your role" align="center" />
          <ol className="mt-14 space-y-6">
            {p.workflow.map((s) => (
              <li key={s.step} className="grid gap-4 rounded-2xl bg-background p-7 ring-1 ring-border md:grid-cols-[120px_1fr] md:gap-8">
                <div className="font-display text-5xl text-primary">{s.step}</div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand title={p.ctaTitle ?? "Start a conversation"} secondary={{ label: "Visit showroom", to: "/showroom" }} />
    </PageLayout>
  );
}
