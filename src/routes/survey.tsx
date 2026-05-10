import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import img from "@/assets/hero-homes.jpg";

export const Route = createFileRoute("/survey")({
  head: () => ({
    meta: [
      { title: "Book a Free Survey — Vitrum Heritage" },
      { name: "description", content: "Book a free in-home heritage glazing survey across central London." },
      { property: "og:title", content: "Book a Free Survey" },
      { property: "og:description", content: "No obligation. Indicative pricing within 5 working days." },
      { property: "og:image", content: img },
    ],
  }),
  component: SurveyPage,
});

function SurveyPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <PageLayout>
      <PageHero
        eyebrow="Free Survey"
        title="Book a free in-home survey"
        lede="A heritage glazing specialist will visit your property, assess every window, and provide indicative pricing within 5 working days."
        image={img}
        crumbs={[{ label: "Survey" }]}
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[1.3fr_1fr]">
          <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
            {submitted ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-primary" />
                <h2 className="mt-6 font-display text-3xl text-secondary">Thank you</h2>
                <p className="mt-3 text-muted-foreground">A specialist will be in touch within one working day to confirm your survey appointment.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                <h2 className="font-display text-2xl text-secondary">Tell us about your property</h2>
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Full name" required>
                    <input required className="input" placeholder="Jane Smith" />
                  </Field>
                  <Field label="Email" required>
                    <input type="email" required className="input" placeholder="jane@example.com" />
                  </Field>
                  <Field label="Phone">
                    <input type="tel" className="input" placeholder="020 1234 5678" />
                  </Field>
                  <Field label="Postcode" required>
                    <input required className="input" placeholder="W11 2AA" />
                  </Field>
                  <Field label="Property type">
                    <select className="input"><option>Victorian terrace</option><option>Georgian townhouse</option><option>Edwardian villa</option><option>Mansion block flat</option><option>Other</option></select>
                  </Field>
                  <Field label="Approx. windows">
                    <select className="input"><option>1–4</option><option>5–10</option><option>11–20</option><option>20+</option></select>
                  </Field>
                </div>
                <Field label="Listed or in conservation area?">
                  <div className="flex gap-4 text-sm text-secondary">
                    <label className="flex items-center gap-2"><input type="radio" name="listed" /> Yes</label>
                    <label className="flex items-center gap-2"><input type="radio" name="listed" /> No</label>
                    <label className="flex items-center gap-2"><input type="radio" name="listed" /> Not sure</label>
                  </div>
                </Field>
                <Field label="Anything we should know?">
                  <textarea className="input min-h-[100px]" placeholder="Project timeline, specific concerns, architect details..." />
                </Field>
                <button type="submit" className="w-full rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition hover:bg-primary-deep">
                  Request my free survey
                </button>
                <p className="text-xs text-muted-foreground">By submitting, you agree to be contacted about your enquiry. We never share your details.</p>
              </form>
            )}
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl bg-secondary p-7 text-white">
              <h3 className="font-display text-xl">What to expect</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                {["60–90 minute survey at your home", "Every window measured and photographed", "Indicative pricing within 5 working days", "No obligation — you keep the survey notes"].map((s) => (
                  <li key={s} className="flex gap-2"><CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />{s}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-cream p-7">
              <h3 className="font-display text-xl text-secondary">Prefer to talk first?</h3>
              <p className="mt-2 text-sm text-secondary/75">Call our team Monday to Friday, 9am–6pm.</p>
              <a href="tel:02038761234" className="mt-4 inline-block font-display text-2xl text-primary-deep">020 3876 1234</a>
            </div>
          </aside>
        </div>
      </section>

      <style>{`.input{width:100%;border:1px solid var(--border);background:var(--background);border-radius:0.625rem;padding:0.75rem 1rem;font-size:0.875rem;color:var(--foreground);outline:none}.input:focus{border-color:var(--primary);box-shadow:0 0 0 3px color-mix(in oklab, var(--primary) 20%, transparent)}`}</style>
    </PageLayout>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium text-secondary">{label}{required && <span className="text-primary"> *</span>}</span>
      {children}
    </label>
  );
}
