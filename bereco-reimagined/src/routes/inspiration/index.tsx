import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import heroImg from "@/assets/hero-homes.jpg";
import case1 from "@/assets/case-1.jpg";
import case2 from "@/assets/case-2.jpg";
import case3 from "@/assets/case-3.jpg";

export const Route = createFileRoute("/inspiration/")({
  head: () => ({
    meta: [
      { title: "Inspiration — Case Studies, Blog & Gallery | Vacuum Glazed Windows Ltd" },
      { name: "description", content: "Browse our case studies, project gallery and blog for inspiration and technical guidance on vacuum glazed timber windows and doors for heritage properties." },
    ],
  }),
  component: InspirationPage,
});

function InspirationPage() {
  return (
    <PageLayout>
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Inspiration</p>
          <h1 className="font-display text-4xl text-secondary md:text-5xl">Projects, ideas and expert guidance</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: "Case Studies", desc: "Real projects across the UK — from Grade I listed townhouses to Edwardian villas and Victorian terraces.", href: "/inspiration/case-studies", img: case1 },
              { title: "Blog", desc: "Technical guides, planning advice, EPC 2026 updates and news from the heritage glazing world.", href: "/inspiration/blog", img: case2 },
              { title: "Gallery", desc: "Browse our project photography — window and door installations across London and the wider UK.", href: "/inspiration/gallery", img: case3 },
            ].map((item) => (
              <a key={item.href} href={item.href} className="group block overflow-hidden rounded-2xl bg-card transition">
                <div className="aspect-[3/2] overflow-hidden">
                  <img src={item.img} alt={item.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-7">
                  <h2 className="text-2xl font-semibold text-secondary">{item.title}</h2>
                  <p className="mt-2 text-muted-foreground">{item.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary-deep">
                    Browse {item.title.toLowerCase()} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
