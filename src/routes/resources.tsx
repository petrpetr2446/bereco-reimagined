import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileText, BookOpen, Download } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";

const resources = [
  { icon: BookOpen, title: "EPC 2026 — A Heritage Owner's Guide", desc: "Plain-English summary of the new minimum standards.", to: "/epc-2026" },
  { icon: FileText, title: "Performance Data Pack", desc: "Independent U-values, acoustic and certification data.", to: "/performance" },
  { icon: Download, title: "Listed Building Brochure", desc: "Precedent projects and conservation officer references.", to: "/contact" },
  { icon: BookOpen, title: "Architects' Technical Pack", desc: "CAD details, NBS clauses and specification language.", to: "/architects" },
  { icon: FileText, title: "Process Overview", desc: "What to expect from survey through to aftercare.", to: "/process" },
  { icon: BookOpen, title: "Vacuum Glazing Explained", desc: "How vacuum insulated glass works, in 5 minutes.", to: "/vacuum-glazing" },
];

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Vitrum Heritage" },
      { name: "description", content: "Guides, technical data and brochures for owners, architects and managing agents." },
      { property: "og:title", content: "Resources" },
      { property: "og:description", content: "Heritage glazing guides and technical packs." },
    ],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="Resources" title="Guides, brochures & technical data" lede="Everything we'd hand to a homeowner, architect or managing agent at our showroom — collected in one place." crumbs={[{ label: "Resources" }]} />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((r) => {
              const Icon = r.icon;
              return (
                <Link key={r.title} to={r.to as any} className="group block rounded-2xl border border-border bg-card p-7 transition hover:border-primary">
                  <Icon className="h-9 w-9 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-5 text-xl font-semibold text-secondary">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-deep">Open <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </PageLayout>
  );
}
