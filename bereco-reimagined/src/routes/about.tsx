import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import heroImg from "@/assets/hero-homes.jpg";
import installImg from "@/assets/install.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Vacuum Glazed Windows Ltd | UK Heritage Glazing Supply Specialists" },
      { name: "description", content: "About Vacuum Glazed Windows Ltd — UK supply specialists in ultra-thin vacuum glazed timber windows and doors sourced from Lithuania and Poland." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[420px] w-full overflow-hidden">
          <img src={heroImg} alt="About Vacuum Glazed Windows Ltd" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-secondary/30 to-secondary/70" />
          <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">About Us</p>
            <h1 className="max-w-3xl text-balance font-display text-4xl text-white md:text-5xl">
              UK supply specialists in vacuum glazed timber joinery
            </h1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Our story</p>
              <h2 className="font-display text-4xl text-secondary md:text-5xl">Built on a simple observation</h2>
              <p className="mt-6 text-lg text-secondary/80">
                The UK has more listed buildings and conservation areas than any other country in Europe. And most of them have single-glazed timber windows that are leaking heat, admitting noise, and heading towards EPC failure in 2026.
              </p>
              <p className="mt-4 text-secondary/80">
                Standard double glazing can't solve the problem — it's too thick to fit inside original frames without structural changes that would be refused by conservation officers. Vacuum glazing at 7mm can. But it was only available through expensive, slow, full-service installers — until now.
              </p>
              <p className="mt-4 text-secondary/80">
                Vacuum Glazed Windows Ltd was founded to bring supply-direct vacuum glazed timber joinery to homeowners, architects and installers across the UK. We source from the best specialist manufacturers in Europe and supply directly — cutting weeks off lead times and significant cost from the bill.
              </p>
            </div>
            <img src={installImg} alt="Timber window manufacture" loading="lazy" className="rounded-3xl object-cover h-[450px] w-full" />
          </div>
        </div>
      </section>

      {/* European sourcing */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Our supply chain</p>
            <h2 className="font-display text-4xl text-secondary md:text-5xl">European precision. UK expertise.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Lithuania & Poland", body: "Our manufacturing partners are specialist timber joinery factories with decades of experience producing high-specification windows and doors for the European heritage market." },
              { title: "Slow-Grown Timber", body: "Northern European timber grows slowly in cold conditions, producing tight grain and exceptional dimensional stability — far superior to plantation softwood." },
              { title: "Factory Finishing", body: "All finishes are applied under factory conditions using high-build microporous systems — more durable and consistent than site-applied paint." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-card p-8">
                <h3 className="text-xl font-semibold text-secondary">{item.title}</h3>
                <p className="mt-3 text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary py-20 text-white">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-10 text-center md:grid-cols-3">
            {[
              ["Precision", "We manufacture to exact sizes. Every order is made to measure — there are no standard sizes and no compromise on fit."],
              ["Transparency", "Our supply prices are clear and final. No hidden charges, no sales visits, no obligation."],
              ["Heritage", "We exist to preserve the character of historic buildings. Every product we supply is designed to fit within original frames without alteration."],
            ].map(([title, body]) => (
              <div key={title as string}>
                <h3 className="font-display text-2xl text-primary">{title}</h3>
                <p className="mt-3 text-white/70">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-3xl text-secondary md:text-4xl">Want to find out more?</h2>
          <p className="mx-auto mt-4 max-w-xl text-secondary/80">Visit our London showroom at 14 Marylebone Lane, or request a quote online and we'll be in touch within 24 hours.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="/contact" className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-deep">Get in touch</a>
            <a href="/vacuum-windows" className="rounded-full border border-secondary/30 px-7 py-3 text-sm font-semibold text-secondary transition hover:bg-secondary hover:text-white">Browse windows</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
