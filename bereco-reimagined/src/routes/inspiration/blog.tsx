import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import heroImg from "@/assets/hero-homes.jpg";
import case1 from "@/assets/case-1.jpg";
import case2 from "@/assets/case-2.jpg";
import case3 from "@/assets/case-3.jpg";
import installImg from "@/assets/install.jpg";

export const Route = createFileRoute("/inspiration/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Heritage Glazing Guides & Advice | Vacuum Glazed Windows Ltd" },
      { name: "description", content: "Expert guides on vacuum glazing, EPC 2026 for listed buildings, conservation area planning, timber window maintenance and more." },
    ],
  }),
  component: BlogPage,
});

const POSTS = [
  { img: case1, category: "EPC & Planning", date: "April 2026", title: "EPC 2026: What It Means for Listed Buildings", summary: "New minimum EPC requirements come into force in October 2026. We explain what this means for owners of listed buildings and how vacuum glazing is often the only compliant solution." },
  { img: case2, category: "Technical Guide", date: "March 2026", title: "Vacuum Glazing vs Double Glazing: The Complete Comparison", summary: "A head-to-head comparison of vacuum and conventional double glazing across U-value, thickness, acoustic performance, condensation risk and planning compliance." },
  { img: case3, category: "Heritage Advice", date: "February 2026", title: "How to Get Listed Building Consent for New Windows", summary: "A step-by-step guide to the listed building consent process for window replacement, with advice on how to present a vacuum glazing proposal to your conservation officer." },
  { img: installImg, category: "Technical Guide", date: "January 2026", title: "Understanding U-Values: A Plain-English Guide", summary: "U-values explained simply — what they mean, how they're measured, and what U-value you need to meet current and upcoming EPC standards for windows and doors." },
  { img: heroImg, category: "Maintenance", date: "December 2025", title: "Caring for Timber Windows in Winter", summary: "How to maintain timber window frames through cold and damp winter months — checking seals, lubricating hardware and protecting painted surfaces." },
  { img: case1, category: "Case Study Insight", date: "November 2025", title: "Supply-Only vs Full-Service: Which is Right for Your Project?", summary: "We compare supply-only and full-service window replacement for period properties — the cost differences, lead time implications, and when each approach works best." },
];

function BlogPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Inspiration</p>
          <h1 className="font-display text-4xl text-secondary md:text-5xl">Expert guides & advice</h1>
          <p className="mt-5 text-lg text-secondary/80">Technical guides, planning advice, EPC 2026 updates and news from the heritage glazing world.</p>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <a href="#" className="group grid overflow-hidden rounded-2xl bg-card transition md:grid-cols-2">
            <div className="overflow-hidden">
              <img src={POSTS[0].img} alt={POSTS[0].title} className="h-full max-h-[400px] w-full object-cover transition duration-700 group-hover:scale-105" />
            </div>
            <div className="flex flex-col justify-center p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{POSTS[0].category} · {POSTS[0].date}</p>
              <h2 className="mt-3 font-display text-3xl text-secondary">{POSTS[0].title}</h2>
              <p className="mt-4 text-muted-foreground">{POSTS[0].summary}</p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary-deep">
                Read article <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* Posts grid */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {POSTS.slice(1).map((p) => (
              <a key={p.title} href="#" className="group block overflow-hidden rounded-2xl bg-card transition">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{p.category} · {p.date}</p>
                  <h2 className="mt-2 text-lg font-semibold text-secondary">{p.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-deep">
                    Read more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
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
