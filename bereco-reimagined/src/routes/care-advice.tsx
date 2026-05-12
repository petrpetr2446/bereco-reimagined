import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import heroImg from "@/assets/hero-homes.jpg";

export const Route = createFileRoute("/care-advice")({
  head: () => ({
    meta: [
      { title: "Care & Advice — Timber Windows & Vacuum Glazing | Vacuum Glazed Windows Ltd" },
      { name: "description", content: "Care guides for vacuum glazed timber windows and doors. Maintenance, cleaning, warranty information and claims support." },
    ],
  }),
  component: CareAdvicePage,
});

function CareAdvicePage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[400px] w-full overflow-hidden">
          <img src={heroImg} alt="Timber window care" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-secondary/30 to-secondary/70" />
          <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">Care & Advice</p>
            <h1 className="max-w-3xl text-balance font-display text-4xl text-white md:text-5xl">
              Keeping your vacuum glazed windows in perfect condition
            </h1>
          </div>
        </div>
      </section>

      {/* Warranty overview */}
      <section className="border-b border-border bg-background py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 md:grid-cols-3 text-center">
          {[
            ["15 years", "Vacuum seal warranty — standard units"],
            ["25 years", "Vacuum seal warranty — premium units"],
            ["10 years", "Structural timber frame warranty"],
          ].map(([v, l]) => (
            <div key={l}>
              <div className="font-display text-4xl text-primary-deep">{v}</div>
              <p className="mt-2 text-sm text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Care guides */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Maintenance guides</p>
            <h2 className="font-display text-3xl text-secondary md:text-4xl">How to care for your windows</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { title: "Cleaning Vacuum Glazed Glass", body: "Vacuum glazed units can be cleaned with any standard non-abrasive glass cleaner. Do not use razor blades or abrasive pads. The glass surface is the same as standard float glass and requires no special treatment." },
              { title: "Timber Frame Maintenance", body: "Factory-applied microporous finishes typically require repainting every 8–12 years. Clean with a soft cloth and mild detergent. Do not use solvent-based cleaners on painted surfaces. Check sealant joints annually." },
              { title: "Hardware & Ironmongery", body: "Lubricate hinges, stays and locking points annually with a dry PTFE spray or light oil. Check all fixings are tight and replace worn weather seals promptly to prevent draughts and moisture ingress." },
              { title: "Draughtproofing Seals", body: "Compression seals have a design life of 10–15 years. Signs of wear include increased draughts or visible cracking of the seal material. Replacement seals can be ordered directly from us and fitted by any competent handyperson." },
            ].map(({ title, body }) => (
              <div key={title} className="rounded-2xl bg-background p-8">
                <h3 className="text-xl font-semibold text-secondary">{title}</h3>
                <p className="mt-3 text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty & claims */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Warranty & claims</p>
            <h2 className="font-display text-3xl text-secondary md:text-4xl">Warranty information</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "What does the vacuum seal warranty cover?", a: "The vacuum seal warranty covers failure of the vacuum insulated unit causing visible misting or condensation between the glass panes. In the event of seal failure, we will supply a replacement unit free of charge within the warranty period." },
              { q: "What does the structural timber warranty cover?", a: "The 10-year structural warranty covers delamination, excessive shrinkage, or structural failure of the timber frame under normal conditions of use and maintenance." },
              { q: "What can void my warranty?", a: "Warranty is voided by: modification or cutting of the unit; incorrect installation outside our published guidelines; use of incompatible sealants or adhesives; physical damage; failure to maintain the frame finish leading to moisture ingress." },
              { q: "How do I make a warranty claim?", a: "Contact us at the address below with your order number, a description of the fault, and photographs. We will assess the claim within 5 working days and arrange a replacement if the fault is covered." },
            ].map(({ q, a }) => (
              <details key={q} className="group rounded-2xl bg-card">
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-7 py-5 text-base font-semibold text-secondary">
                  {q}
                  <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-open:rotate-90 text-primary" />
                </summary>
                <p className="px-7 pb-6 text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-primary/30 bg-primary/5 p-8">
            <h3 className="font-semibold text-secondary">Make a warranty claim</h3>
            <p className="mt-2 text-muted-foreground">Contact our warranty team at <a href="mailto:warranty@vacuumglazedwindows.co.uk" className="text-primary-deep underline underline-offset-4">warranty@vacuumglazedwindows.co.uk</a> or call <a href="tel:02038761234" className="text-primary-deep underline underline-offset-4">020 3876 1234</a>. Please have your order number and installation date available.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
