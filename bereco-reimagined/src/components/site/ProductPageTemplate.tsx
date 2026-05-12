import { PageLayout } from "./PageLayout";
import heroImg from "@/assets/hero-homes.jpg";
import case1 from "@/assets/case-1.jpg";
import case2 from "@/assets/case-2.jpg";
import case3 from "@/assets/case-3.jpg";

interface Spec { value: string; unit: string; label: string }
interface Feature { title: string; description: string }

interface Props {
  category: string;
  title: string;
  tagline: string;
  description: string;
  specs: Spec[];
  features: Feature[];
  backLink: { label: string; href: string };
  ctaHref?: string;
}

export function ProductPageTemplate({
  category, title, tagline, description, specs, features, backLink, ctaHref = "/contact",
}: Props) {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[480px] w-full overflow-hidden">
          <img src={heroImg} alt={title} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-secondary/30 to-secondary/70" />
          <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">{category}</p>
            <h1 className="max-w-3xl text-balance font-display text-4xl text-white md:text-5xl lg:text-6xl">{title}</h1>
            <p className="mt-4 max-w-xl text-lg text-white/85">{tagline}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href={ctaHref} className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition hover:bg-primary-deep">
                Request a quote
              </a>
              <a href={backLink.href} className="rounded-full bg-white/10 px-7 py-3.5 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/20">
                {backLink.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Specs bar */}
      <section className="border-b border-border bg-background py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-4 md:grid-cols-4">
          {specs.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-4xl text-primary-deep md:text-5xl">
                {s.value}<span className="ml-1 text-sm text-muted-foreground">{s.unit}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Description + features */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Overview</p>
              <h2 className="font-display text-3xl text-secondary md:text-4xl">{title}</h2>
              <p className="mt-6 text-lg leading-relaxed text-secondary/80">{description}</p>
              <a href={ctaHref} className="mt-8 inline-block rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-deep">
                Get a supply price
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((f) => (
                <div key={f.title} className="rounded-2xl bg-background p-6">
                  <h3 className="font-semibold text-secondary">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Gallery</p>
            <h2 className="font-display text-3xl text-secondary md:text-4xl">Project examples</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {([case1, case2, case3] as string[]).map((img, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                <img src={img} alt={`${title} project ${i + 1}`} loading="lazy" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-secondary py-20 text-white">
        <div className="absolute inset-0 -z-10 opacity-20">
          <img src={heroImg} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-3xl md:text-5xl">Ready to specify {title}?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Send us your sizes and we'll return a full specification and supply price within 24 hours.
          </p>
          <a href={ctaHref} className="mt-8 inline-block rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition hover:bg-primary-deep">
            Request a supply quote
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
