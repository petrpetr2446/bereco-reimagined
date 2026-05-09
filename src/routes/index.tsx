import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ThermometerSun, Volume2, Leaf, ShieldCheck, Building2, Hammer } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import heroImg from "@/assets/hero-homes.jpg";
import installImg from "@/assets/install.jpg";
import case1 from "@/assets/case-1.jpg";
import case2 from "@/assets/case-2.jpg";
import case3 from "@/assets/case-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vitrum Heritage Glazing — Vacuum Glazed Windows for Period Homes" },
      { name: "description", content: "Heritage-sensitive vacuum glazing for Victorian, Georgian and Edwardian timber sash and casement windows in London. Warmer, quieter, EPC-ready." },
      { property: "og:title", content: "Vitrum Heritage Glazing — Vacuum Glazed Windows" },
      { property: "og:description", content: "Slim vacuum insulated glass that preserves the character of period timber windows." },
    ],
  }),
  component: Home,
});

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="font-display text-5xl text-primary-deep md:text-6xl">{value}</div>
      <p className="mt-3 max-w-[18ch] mx-auto text-[15px] leading-snug text-muted-foreground">{label}</p>
    </div>
  );
}

function RangeCard({ title, blurb, img }: { title: string; blurb: string; img: string }) {
  return (
    <a href="#" className="group block overflow-hidden rounded-2xl bg-card ring-1 ring-border transition hover:ring-primary">
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
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative">
        <div className="relative h-[640px] w-full overflow-hidden">
          <img src={heroImg} alt="Restored period London townhouses with timber sash windows" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-secondary/20 to-secondary/60" />
          <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">Heritage Vacuum Glazing · London</p>
            <h1 className="max-w-4xl text-balance font-display text-5xl text-white md:text-6xl lg:text-7xl">
              Warmer, quieter period windows — without changing their character
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/85">
              Slim vacuum insulated glass that fits inside your original timber sash and casement frames. The thermal performance of triple glazing in a profile thinner than a pencil.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a href="#survey" className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition hover:bg-primary-deep">
                Book a free survey
              </a>
              <a href="#products" className="rounded-full bg-secondary/80 px-7 py-3.5 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-secondary">
                Explore the glazing
              </a>
            </div>
          </div>
        </div>

        {/* Floating EPC badge */}
        <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 lg:block">
          <div className="pointer-events-auto grid h-44 w-44 place-items-center rounded-full bg-primary text-center text-primary-foreground shadow-xl ring-8 ring-white/20">
            <div className="px-4">
              <p className="text-xs uppercase tracking-widest">Get ready</p>
              <p className="mt-1 font-display text-2xl leading-tight">EPC 2026<br/>Standards</p>
              <p className="mt-1 text-[10px] opacity-90">Read the guide →</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border bg-background py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 md:grid-cols-3">
          <div className="flex flex-col items-center">
            <ThermometerSun className="mb-5 h-10 w-10 text-primary" strokeWidth={1.5} />
            <Stat value="0.4 W/m²K" label="U-value with our premium vacuum glazed unit" />
          </div>
          <div className="flex flex-col items-center">
            <Volume2 className="mb-5 h-10 w-10 text-primary" strokeWidth={1.5} />
            <Stat value="36 dB" label="Noise reduction across central London locations" />
          </div>
          <div className="flex flex-col items-center">
            <Leaf className="mb-5 h-10 w-10 text-primary" strokeWidth={1.5} />
            <Stat value="60%" label="Average heat-loss reduction vs original single glazing" />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Heritage. Performance. Discretion.</p>
          <h2 className="font-display text-4xl text-secondary md:text-5xl">Warmer. Quieter. Compliant. Beautiful.</h2>
          <p className="mt-6 text-lg leading-relaxed text-secondary/80">
            Quality and conservation are at the heart of <a className="underline decoration-primary underline-offset-4" href="#">Vitrum</a>. We restore and upgrade original timber sash and casement windows with vacuum insulated glass thinner than 8.3 mm — preserving sightlines, putty lines and astragal bars while transforming thermal and acoustic performance.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-secondary/80">
            Our heritage-sensitive process is approved for use in conservation areas and on most listed buildings.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href="#" className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-deep">View our brochure</a>
            <a href="#contact" className="rounded-full border border-secondary/30 px-7 py-3 text-sm font-semibold text-secondary transition hover:bg-secondary hover:text-white">Get in touch</a>
          </div>
        </div>
      </section>

      {/* RANGE */}
      <section id="products" className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Our work</p>
            <h2 className="font-display text-4xl text-secondary md:text-5xl">Our vacuum glazing & window range</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <RangeCard title="Slim Sash Upgrades" blurb="Vacuum insulated glass retrofitted into your existing timber sashes." img={case1} />
            <RangeCard title="Casement Restorations" blurb="Restored frames with new vacuum glazed units, fully draughtproofed." img={case2} />
            <RangeCard title="Bay & Bow Windows" blurb="Bespoke heritage upgrades for elaborate Victorian and Edwardian bays." img={installImg} />
            <RangeCard title="Listed Building Approvals" blurb="Discreet glazing solutions designed to meet conservation requirements." img={case3} />
          </div>
        </div>
      </section>

      {/* EXPERTS */}
      <section className="relative">
        <div className="grid lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <img src={installImg} alt="Restored timber sash window with vacuum glazing in a London period home" loading="lazy" className="h-full max-h-[700px] w-full object-cover" />
          </div>
          <div className="order-1 flex items-center bg-secondary px-6 py-20 text-white lg:order-2 lg:px-16">
            <div className="max-w-xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">The experts</p>
              <h2 className="font-display text-4xl md:text-5xl">Specialists in heritage vacuum glazing</h2>
              <p className="mt-6 text-white/80">
                We work exclusively on period properties — Victorian terraces in Kensington, Georgian townhouses in Chelsea, Edwardian villas in Holland Park. From single sash upgrades to whole-house programmes, our team manages survey, suitability assessment, joinery restoration, glazing, draughtproofing and aftercare.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-deep">For Homeowners</a>
                <a href="#" className="rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/20">For Architects & Trade</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Why Vitrum</p>
            <h2 className="font-display text-4xl text-secondary md:text-5xl">Why choose Vitrum?</h2>
            <p className="mt-5 text-lg text-muted-foreground">
              From listed Georgian terraces to architect-led refurbishments, we offer a friendly, technical and discreet service from first survey to final aftercare visit.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <a href="#" className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-8 transition hover:border-primary">
              <ShieldCheck className="h-10 w-10 text-primary" strokeWidth={1.5} />
              <h3 className="text-2xl font-semibold text-secondary">Conservation Approved</h3>
              <p className="text-muted-foreground">Our slim vacuum units have been accepted on listed buildings in over 40 London conservation areas.</p>
              <span className="mt-2 inline-flex items-center gap-1 font-medium text-primary-deep">Find out more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
            </a>
            <a href="#" className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-8 transition hover:border-primary">
              <Hammer className="h-10 w-10 text-primary" strokeWidth={1.5} />
              <h3 className="text-2xl font-semibold text-secondary">12 reasons to choose us</h3>
              <p className="text-muted-foreground">From in-house joinery to a 25-year vacuum seal warranty — discover what makes Vitrum different.</p>
              <span className="mt-2 inline-flex items-center gap-1 font-medium text-primary-deep">More about us <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
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
            New minimum EPC requirements come into force in October 2026 — including for many listed buildings. Standard double glazing rarely meets conservation requirements, and secondary glazing isn't always possible. Our vacuum glazed units deliver the U-values you need while keeping your original windows intact.
          </p>
          <a href="#" className="mt-8 inline-block rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-deep">Read the EPC 2026 guide</a>
        </div>
      </section>

      {/* U-VALUES */}
      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-16 px-4 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Performance</p>
            <h2 className="font-display text-4xl text-secondary md:text-5xl">U-values from 0.4 W/m²K, in 8.3 mm of glass</h2>
            <p className="mt-6 text-muted-foreground">
              Our standard vacuum glazed units achieve a centre-pane U-value of 1.0 W/m²K — better than most modern double-glazed windows — in a unit thinner than a pound coin. Our premium krypton-evacuated units reach 0.4 W/m²K, comparable to high-end triple glazing.
            </p>
            <p className="mt-4 text-muted-foreground">
              Acoustic performance is equally impressive: laminated vacuum units reduce noise by up to 36 dB, ideal for properties on busy London streets.
            </p>
            <a href="#" className="mt-8 inline-block rounded-full border border-secondary/30 px-7 py-3 text-sm font-semibold text-secondary transition hover:bg-secondary hover:text-white">View performance data</a>
          </div>
          <div className="rounded-3xl bg-secondary p-10 text-white">
            <div className="grid grid-cols-2 gap-8">
              {[
                ["1.0", "W/m²K", "Standard unit"],
                ["0.4", "W/m²K", "Premium unit"],
                ["8.3", "mm", "Total unit thickness"],
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
              <h2 className="font-display text-4xl text-secondary md:text-5xl">Recent heritage projects across London</h2>
            </div>
            <a href="#" className="text-sm font-semibold text-primary-deep underline underline-offset-4 hover:text-primary">View all case studies →</a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { img: case1, area: "Notting Hill · W11", title: "Stucco-fronted Victorian terrace, 18 sash windows upgraded with slim vacuum glazing" },
              { img: case2, area: "Holland Park · W14", title: "Listed Edwardian villa: bay window restoration with conservation-approved units" },
              { img: case3, area: "Chelsea · SW3", title: "Grade II Georgian townhouse fitted with whole-house vacuum glazing programme" },
            ].map((c) => (
              <a key={c.title} href="#" className="group block overflow-hidden rounded-2xl bg-background ring-1 ring-border transition hover:ring-primary">
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
              ["The Vitrum team genuinely understood our listed building. The new windows look identical from the street — but the house is transformed inside.", "Caroline · Holland Park"],
              ["We expected disruption. Instead, the joinery was off-site, the install was three days, and the heating bill dropped by 38% in the first quarter.", "Adrian · Kensington"],
              ["From an architect's perspective, the slim sightlines are unmatched. We've now specified Vitrum on four conservation projects.", "Marika · Studio Vere Architects"],
            ].map(([q, n]) => (
              <figure key={n} className="rounded-2xl border border-border bg-card p-7">
                <div className="flex gap-0.5 text-primary">{"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}</div>
                <blockquote className="mt-4 text-secondary/85">{q}</blockquote>
                <figcaption className="mt-5 text-sm font-semibold text-primary-deep">{n}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* SURVEY CTA */}
      <section id="survey" className="relative isolate overflow-hidden bg-secondary py-24 text-white">
        <div className="absolute inset-0 -z-10 opacity-25">
          <img src={heroImg} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-4xl md:text-6xl">Book a free in-home survey</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/85">
            One of our heritage glazing specialists will visit your property, assess suitability and provide indicative pricing — no obligation.
          </p>
          <form className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <input type="email" required placeholder="Your email" className="flex-1 rounded-full bg-white/95 px-5 py-3.5 text-sm text-secondary outline-none placeholder:text-secondary/50 focus:ring-2 focus:ring-primary" />
            <button type="submit" className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-deep">
              Request a survey
            </button>
          </form>
          <p className="mt-4 text-xs text-white/60">Or call <a href="tel:02038761234" className="font-semibold text-white underline underline-offset-4">020 3876 1234</a></p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
