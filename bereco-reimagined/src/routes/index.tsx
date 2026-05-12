import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ThermometerSun, Volume2, Layers, ShieldCheck, Building2, Hammer } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import heroImg from "@/assets/hero-homes.jpg";
import installImg from "@/assets/install.jpg";
import case1 from "@/assets/case-1.jpg";
import case2 from "@/assets/case-2.jpg";
import case3 from "@/assets/case-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vacuum Glazed Windows Ltd — Ultra-Thin Heritage Glazing for Period Homes" },
      { name: "description", content: "Supply specialists in 7mm vacuum-glazed timber windows and doors for heritage, listed and period properties across the UK. 0.4 W/m²K. EPC 2026 ready." },
      { property: "og:title", content: "Vacuum Glazed Windows Ltd" },
      { property: "og:description", content: "Ultra-thin 7mm vacuum insulated glass in premium European timber frames for period and listed buildings." },
    ],
  }),
  component: Home,
});

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="font-display text-4xl text-primary-deep md:text-5xl">{value}</div>
      <p className="mt-3 max-w-[18ch] mx-auto text-[15px] leading-snug text-muted-foreground">{label}</p>
    </div>
  );
}

function RangeCard({ title, blurb, img, href }: { title: string; blurb: string; img: string; href: string }) {
  return (
    <a href={href} className="group block overflow-hidden rounded-2xl bg-card transition">
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img src={img} alt={title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="p-6">
        <p className="text-xs uppercase tracking-[0.18em] text-primary">Find out more</p>
        <h3 className="mt-2 text-xl font-semibold text-secondary">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{blurb}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-deep">
          Read more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </a>
  );
}

function Home() {
  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative">
        <div className="relative h-[640px] w-full overflow-hidden">
          <img src={heroImg} alt="Period London townhouses with timber sash windows" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-secondary/20 to-secondary/60" />
          <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">Vacuum Glazed Timber Windows · UK Supply Specialists</p>
            <h1 className="max-w-4xl text-balance font-display text-5xl text-white md:text-6xl lg:text-7xl">
              Ultra-thin vacuum glazing — in your original timber frames
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/85">
              7mm vacuum insulated glass that fits inside existing timber sash and casement frames. The thermal performance of a brick wall in a unit thinner than your thumbnail.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a href="/contact" className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition hover:bg-primary-deep">
                Request a free quote
              </a>
              <a href="/vacuum-windows" className="rounded-full bg-secondary/80 px-7 py-3.5 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-secondary">
                Explore our windows
              </a>
            </div>
          </div>
        </div>

        {/* EPC badge */}
        <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 lg:block">
          <a href="/heritage-listed-buildings" className="pointer-events-auto grid h-44 w-44 place-items-center rounded-full bg-primary text-center text-primary-foreground shadow-xl ring-8 ring-white/20">
            <div className="px-4">
              <p className="text-xs uppercase tracking-widest">Get ready</p>
              <p className="mt-1 font-display text-2xl leading-tight">EPC 2026<br />Standards</p>
              <p className="mt-1 text-[10px] opacity-90">Heritage guide →</p>
            </div>
          </a>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border bg-background py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 md:grid-cols-3">
          <div className="flex flex-col items-center">
            <ThermometerSun className="mb-5 h-10 w-10 text-primary" strokeWidth={1.5} />
            <Stat value="0.4 W/m²K" label="U-value — thermal performance of a brick wall" />
          </div>
          <div className="flex flex-col items-center">
            <Volume2 className="mb-5 h-10 w-10 text-primary" strokeWidth={1.5} />
            <Stat value="36 dB" label="Noise reduction for busy urban environments" />
          </div>
          <div className="flex flex-col items-center">
            <Layers className="mb-5 h-10 w-10 text-primary" strokeWidth={1.5} />
            <Stat value="7mm" label="Total unit thickness — slimmer than a pencil" />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Performance. Heritage. Supply.</p>
          <h2 className="font-display text-4xl text-secondary md:text-5xl">Warmer. Quieter. Compliant. Beautiful.</h2>
          <p className="mt-6 text-lg leading-relaxed text-secondary/80">
            <a className="underline decoration-primary underline-offset-4" href="/about">Vacuum Glazed Windows Ltd</a> sources and supplies premium European-manufactured timber windows and doors, fitted with ultra-thin 7mm vacuum insulated glass — the only glazing technology slim enough for listed buildings and conservation areas where standard double glazing would be refused by planners.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-secondary/80">
            Our supply-only model means faster lead times, lower cost, and direct access to the most advanced vacuum glazing available anywhere in the UK.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href="/vacuum-windows" className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-deep">Browse windows</a>
            <a href="/contact" className="rounded-full border border-secondary/30 px-7 py-3 text-sm font-semibold text-secondary transition hover:bg-secondary hover:text-white">Get a quote</a>
          </div>
        </div>
      </section>

      {/* RANGE */}
      <section id="products" className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Our range</p>
            <h2 className="font-display text-4xl text-secondary md:text-5xl">Vacuum glazed windows & doors</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <RangeCard title="Sliding Sash Windows" blurb="Vacuum glazed upgrades for original timber sash frames — period-perfect, thermally transformed." img={case1} href="/vacuum-windows/sliding-sash" />
            <RangeCard title="Casement Windows" blurb="Flush and lipped casements in premium European timber with 7mm vacuum glazed units." img={case2} href="/vacuum-windows/flush-casement" />
            <RangeCard title="Heritage & Listed Buildings" blurb="Vacuum glazing is the only solution slim enough for most conservation and listed requirements." img={installImg} href="/heritage-listed-buildings" />
            <RangeCard title="Vacuum Glazed Doors" blurb="Entrance, French, sliding patio and bi-fold doors in vacuum-glazed premium timber." img={case3} href="/vacuum-doors" />
          </div>
        </div>
      </section>

      {/* EXPERTS */}
      <section className="relative">
        <div className="grid lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <img src={installImg} alt="Timber sash window with vacuum glazing in a period London property" loading="lazy" className="h-full max-h-[700px] w-full object-cover" />
          </div>
          <div className="order-1 flex items-center bg-secondary px-6 py-20 text-white lg:order-2 lg:px-16">
            <div className="max-w-xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Our speciality</p>
              <h2 className="font-display text-4xl md:text-5xl">UK supply specialists in vacuum glazed timber joinery</h2>
              <p className="mt-6 text-white/80">
                We work exclusively with vacuum glazed timber windows and doors, sourced from specialist European manufacturers in Lithuania and Poland. Our supply-only model gives homeowners, architects and installers access to the most advanced heritage glazing in the UK — at trade-competitive prices with 8–10 week lead times.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/homeowners" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-deep">For Homeowners</a>
                <a href="/trade-professionals" className="rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/20">For Trade & Professionals</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Why choose us</p>
            <h2 className="font-display text-4xl text-secondary md:text-5xl">Why Vacuum Glazed Windows Ltd?</h2>
            <p className="mt-5 text-lg text-muted-foreground">
              We specialise exclusively in vacuum glazed timber joinery — the most technically advanced heritage window solution available anywhere.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <a href="/heritage-listed-buildings" className="group flex flex-col gap-4 rounded-2xl bg-card p-8 transition">
              <ShieldCheck className="h-10 w-10 text-primary" strokeWidth={1.5} />
              <h3 className="text-2xl font-semibold text-secondary">Conservation & Listed Building Approved</h3>
              <p className="text-muted-foreground">Our 7mm vacuum units have been accepted in conservation areas and on listed buildings where standard double glazing would be refused by conservation officers.</p>
              <span className="mt-2 inline-flex items-center gap-1 font-medium text-primary-deep">Heritage solutions <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
            </a>
            <a href="/about" className="group flex flex-col gap-4 rounded-2xl bg-card p-8 transition">
              <Hammer className="h-10 w-10 text-primary" strokeWidth={1.5} />
              <h3 className="text-2xl font-semibold text-secondary">European Timber. UK Expertise.</h3>
              <p className="text-muted-foreground">Sourced from specialist manufacturers in Lithuania and Poland, our joinery combines premium slow-grown timber with the finest vacuum glazing technology available.</p>
              <span className="mt-2 inline-flex items-center gap-1 font-medium text-primary-deep">About us <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
            </a>
          </div>
        </div>
      </section>

      {/* EPC 2026 */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <Building2 className="mx-auto h-12 w-12 text-primary" strokeWidth={1.4} />
          <h2 className="mt-6 font-display text-4xl text-secondary md:text-5xl">Ready for the October 2026 EPC standards</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-secondary/80">
            New minimum EPC requirements apply from October 2026 — including for many listed buildings where standard double glazing is not permitted by planners. Our 7mm vacuum glazed units are often the only solution that delivers the required U-values while satisfying conservation requirements.
          </p>
          <a href="/heritage-listed-buildings" className="mt-8 inline-block rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-deep">Heritage & EPC guide</a>
        </div>
      </section>

      {/* U-VALUES */}
      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-16 px-4 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Performance data</p>
            <h2 className="font-display text-4xl text-secondary md:text-5xl">U-values from 0.4 W/m²K — in just 7mm of glass</h2>
            <p className="mt-6 text-muted-foreground">
              Our standard vacuum glazed units achieve a centre-pane U-value of 1.0 W/m²K — better than most conventional double glazing — in a unit just 7mm thick. Our premium units reach 0.4 W/m²K, comparable to the best triple glazing on the market, yet 75% thinner.
            </p>
            <p className="mt-4 text-muted-foreground">
              For acoustic performance, our laminated vacuum units reduce noise by up to 36 dB — essential for properties on busy urban streets or near transport corridors.
            </p>
            <a href="/vacuum-windows" className="mt-8 inline-block rounded-full border border-secondary/30 px-7 py-3 text-sm font-semibold text-secondary transition hover:bg-secondary hover:text-white">Explore our window range</a>
          </div>
          <div className="rounded-3xl bg-secondary p-10 text-white">
            <div className="grid grid-cols-2 gap-8">
              {[
                ["1.0", "W/m²K", "Standard unit"],
                ["0.4", "W/m²K", "Premium unit"],
                ["7", "mm", "Total unit thickness"],
                ["36", "dB", "Acoustic reduction"],
              ].map(([v, u, l]) => (
                <div key={l}>
                  <div className="font-display text-5xl text-primary">{v}<span className="ml-1 text-base font-sans text-white/70">{u}</span></div>
                  <p className="mt-2 text-sm text-white/70">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Case studies</p>
              <h2 className="font-display text-4xl text-secondary md:text-5xl">Recent projects across the UK</h2>
            </div>
            <a href="/inspiration/case-studies" className="text-sm font-semibold text-primary-deep underline underline-offset-4 hover:text-primary">View all case studies →</a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { img: case1, area: "Notting Hill · W11", title: "Victorian terrace — 18 sash windows upgraded with 7mm vacuum glazing" },
              { img: case2, area: "Holland Park · W14", title: "Listed Edwardian villa: bay window restoration, conservation-approved units" },
              { img: case3, area: "Chelsea · SW3", title: "Grade II Georgian townhouse — whole-house vacuum glazing programme" },
            ].map((c) => (
              <a key={c.title} href="/inspiration/case-studies" className="group block overflow-hidden rounded-2xl bg-background transition">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={c.img} alt={c.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-primary">{c.area}</p>
                  <h3 className="mt-2 text-lg font-semibold leading-snug text-secondary">{c.title}</h3>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-deep">View case study <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Customer reviews</p>
            <h2 className="font-display text-4xl text-secondary md:text-5xl">What our customers say</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["The vacuum glazing is remarkable — indistinguishable from single glazing at street level, but the thermal difference is night and day. Our listed building consent came through first time.", "Caroline · Holland Park"],
              ["Supply-only was perfect for us. Our joiner fitted them in a day, the units arrived perfectly packed, and the U-values are better than anything else I've seen in 15 years of restoration work.", "Adrian · Kensington"],
              ["As an architect, the 7mm profile is the only option for our conservation projects. Vacuum Glazed Windows Ltd is now our default specification for all heritage work.", "Marika · Studio Vere Architects"],
            ].map(([q, n]) => (
              <figure key={n as string} className="rounded-2xl bg-card p-7">
                <div className="flex gap-0.5 text-primary">{"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}</div>
                <blockquote className="mt-4 text-secondary/85">{q}</blockquote>
                <figcaption className="mt-5 text-sm font-semibold text-primary-deep">{n}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE CTA */}
      <section id="quote" className="relative isolate overflow-hidden bg-secondary py-24 text-white">
        <div className="absolute inset-0 -z-10 opacity-25">
          <img src={heroImg} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-4xl md:text-6xl">Request a free supply quote</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/85">
            Tell us about your project and we'll send a full specification and indicative supply price — no obligation.
          </p>
          <form className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <input type="email" required placeholder="Your email address" className="flex-1 rounded-full bg-white/95 px-5 py-3.5 text-sm text-secondary outline-none placeholder:text-secondary/50 focus:ring-2 focus:ring-primary" />
            <button type="submit" className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-deep">
              Get a quote
            </button>
          </form>
          <p className="mt-4 text-xs text-white/60">Or call <a href="tel:02038761234" className="font-semibold text-white underline underline-offset-4">020 3876 1234</a></p>
        </div>
      </section>
    </PageLayout>
  );
}
