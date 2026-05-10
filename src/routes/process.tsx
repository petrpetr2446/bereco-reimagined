import { createFileRoute } from "@tanstack/react-router";
import { ClipboardList, PencilRuler, Hammer, Truck, ShieldCheck, HeartHandshake } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import workshopImg from "@/assets/workshop.jpg";

const steps = [
  { icon: ClipboardList, title: "Free survey", body: "A heritage glazing specialist visits your property, photographs every window, assesses suitability and discusses your priorities." },
  { icon: PencilRuler, title: "Design & quotation", body: "A clear written specification, indicative pricing, programme and warranty — including any conservation paperwork required." },
  { icon: Hammer, title: "Workshop restoration", body: "Sashes are removed and restored off-site by our in-house joiners. Vacuum units are manufactured and quality-checked to your dimensions." },
  { icon: Truck, title: "Install on site", body: "Most properties take 3–10 days. Rooms are dust-sheeted and protected; one window-bay is completed at a time." },
  { icon: ShieldCheck, title: "Handover & warranty", body: "Snagging walkthrough, full operating instructions and registered 25-year vacuum-seal and 10-year joinery warranties." },
  { icon: HeartHandshake, title: "5-year aftercare", body: "We return at year 5 to inspect, lubricate and re-tension every sash — included as standard." },
];

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process — Vitrum Heritage" },
      { name: "description", content: "Survey to aftercare: how we deliver heritage glazing on every project." },
      { property: "og:title", content: "Our Process" },
      { property: "og:description", content: "Six clear stages from survey to 5-year aftercare." },
      { property: "og:image", content: workshopImg },
    ],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Our Process"
        title="Six stages, one team — from first survey to five-year aftercare"
        lede="Every Vitrum project follows the same considered process. You always know who is in your home, what's happening that day, and what comes next."
        image={workshopImg}
        crumbs={[{ label: "Process" }]}
      />

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4">
          <ol className="space-y-6">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <li key={s.title} className="grid grid-cols-[64px_1fr] gap-6 rounded-2xl border border-border bg-card p-7 md:grid-cols-[80px_1fr]">
                  <div className="flex flex-col items-center">
                    <div className="grid h-14 w-14 place-items-center rounded-full bg-primary/15 text-primary-deep">
                      <Icon className="h-6 w-6" strokeWidth={1.6} />
                    </div>
                    <span className="mt-3 font-display text-sm text-muted-foreground">0{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-secondary">{s.title}</h3>
                    <p className="mt-2 text-muted-foreground">{s.body}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <CtaBand />
    </PageLayout>
  );
}
