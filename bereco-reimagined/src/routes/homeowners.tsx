import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import heroImg from "@/assets/hero-homes.jpg";
import installImg from "@/assets/install.jpg";

export const Route = createFileRoute("/homeowners")({
  head: () => ({
    meta: [
      { title: "For Homeowners — Supply-Only Vacuum Glazing | Vacuum Glazed Windows Ltd" },
      { name: "description", content: "How our supply-only model works for homeowners. 8–10 week lead times, competitive supply prices, your own joiner fits them. Request a free quote." },
    ],
  }),
  component: HomeownersPage,
});

const STEPS = [
  { n: "01", title: "Request a Quote", body: "Send us your window or door sizes and tell us about your property. We'll return a full specification and indicative supply price within 24 hours — no obligation." },
  { n: "02", title: "Design Consultation", body: "We confirm timber species, finish colour, ironmongery, glazing type (standard 1.0 or premium 0.4 W/m²K) and any special requirements such as glazing bars or conservation profiles." },
  { n: "03", title: "Manufacture", body: "Your order goes to our manufacturing partners in Lithuania or Poland. Lead time is typically 8–10 weeks from order confirmation." },
  { n: "04", title: "Delivery to Site", body: "Units are shipped directly to your property or installer on a dedicated vehicle, packaged to our specification for zero transit damage." },
  { n: "05", title: "Your Installer Fits Them", body: "Any competent joiner or window installer can fit our products. We supply full installation guides and are available by phone to support your installer." },
];

function HomeownersPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[480px] w-full overflow-hidden">
          <img src={heroImg} alt="Period home with vacuum glazed timber windows" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-secondary/30 to-secondary/70" />
          <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">For Homeowners</p>
            <h1 className="max-w-3xl text-balance font-display text-4xl text-white md:text-5xl">
              Better windows. Faster. At supply price.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/85">
              Our supply-only model gives homeowners direct access to premium vacuum glazed timber windows and doors — without the markup of a traditional installer.
            </p>
            <a href="/contact" className="mt-8 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition hover:bg-primary-deep">
              Request a free quote
            </a>
          </div>
        </div>
      </section>

      {/* Why supply-only */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Why supply-only?</p>
              <h2 className="font-display text-4xl text-secondary md:text-5xl">Direct access to premium joinery — without the installer markup</h2>
              <p className="mt-6 text-lg text-secondary/80">
                Traditional window companies bundle supply and installation together. That means you pay for a sales team, an installation crew, project management and profit at each layer. Our supply-only model removes all of that — you pay for the product, and your own joiner fits it.
              </p>
              <p className="mt-4 text-secondary/80">
                Most competent joiners and window fitters can install our products in a single day for a typical house. The cost saving is significant — often 30–40% compared to a traditional full-service quote.
              </p>
            </div>
            <img src={installImg} alt="Timber window installation" loading="lazy" className="rounded-3xl object-cover h-[450px] w-full" />
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">The process</p>
            <h2 className="font-display text-4xl text-secondary md:text-5xl">How it works</h2>
          </div>
          <div className="space-y-6">
            {STEPS.map((s) => (
              <div key={s.n} className="flex gap-6 rounded-2xl bg-card p-7">
                <span className="font-display text-4xl text-primary/40 shrink-0">{s.n}</span>
                <div>
                  <h3 className="text-xl font-semibold text-secondary">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Common questions</p>
            <h2 className="font-display text-3xl text-secondary md:text-4xl">Homeowner FAQs</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "Do I need a specialist installer?", a: "No. Any competent joiner or window fitter can install our products. We provide installation guides and phone support. We can also recommend local installers in many areas." },
              { q: "What sizes can you supply?", a: "We manufacture to any size. There are no standard sizes — every order is made to your exact measurements." },
              { q: "Can I see a sample before ordering?", a: "Yes. We can send timber and glass samples, and can arrange a showroom visit to our London premises at 14 Marylebone Lane." },
              { q: "Is vacuum glazing covered by warranty?", a: "Yes. Our standard vacuum insulated units carry a 15-year seal warranty. Premium units carry a 25-year seal warranty. Timber frames carry a 10-year structural warranty." },
              { q: "Do you supply to the whole of the UK?", a: "Yes. We deliver to any address in mainland Great Britain. Additional charges apply for some remote areas and Northern Ireland." },
            ].map(({ q, a }) => (
              <details key={q} className="group rounded-2xl bg-background">
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-7 py-5 text-base font-semibold text-secondary">
                  {q}
                  <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-open:rotate-90 text-primary" />
                </summary>
                <p className="px-7 pb-6 text-muted-foreground">{a}</p>
              </details>
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
          <h2 className="font-display text-3xl md:text-5xl">Ready to get started?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">Send us your sizes and we'll return a specification and supply price within 24 hours.</p>
          <a href="/contact" className="mt-8 inline-block rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition hover:bg-primary-deep">
            Request a free quote
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
