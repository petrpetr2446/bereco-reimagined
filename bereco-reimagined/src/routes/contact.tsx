import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Vacuum Glazed Windows Ltd | Request a Quote" },
      { name: "description", content: "Contact Vacuum Glazed Windows Ltd to request a supply quote, visit our London showroom, or speak to a heritage glazing specialist. 020 3876 1234." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageLayout>
      {/* Header */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">Get in touch</p>
          <h1 className="font-display text-4xl text-secondary md:text-5xl">Contact us</h1>
          <p className="mt-5 text-lg text-secondary/80">
            Request a supply quote, ask a technical question, or arrange a showroom visit. We respond to all enquiries within one working day.
          </p>
        </div>
      </section>

      {/* Form + details */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-16 lg:grid-cols-[1fr_380px]">
            {/* Form */}
            <div>
              <h2 className="font-display text-3xl text-secondary">Request a quote or ask a question</h2>
              <form
                className="mt-8 space-y-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-secondary" htmlFor="name">Full name</label>
                    <input id="name" type="text" required className="mt-2 w-full rounded-2xl bg-background px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary" placeholder="Jane Smith" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary" htmlFor="email">Email address</label>
                    <input id="email" type="email" required className="mt-2 w-full rounded-2xl bg-background px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary" placeholder="jane@example.com" />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-secondary" htmlFor="phone">Phone (optional)</label>
                    <input id="phone" type="tel" className="mt-2 w-full rounded-2xl bg-background px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary" placeholder="020 1234 5678" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary" htmlFor="type">I am a…</label>
                    <select id="type" className="mt-2 w-full rounded-2xl bg-background px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary">
                      <option>Homeowner</option>
                      <option>Architect / Designer</option>
                      <option>Joiner / Installer</option>
                      <option>Developer / Contractor</option>
                      <option>Managing Agent</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary" htmlFor="message">Your message or project details</label>
                  <textarea id="message" required rows={5} className="mt-2 w-full rounded-2xl bg-background px-4 py-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary resize-none" placeholder="Tell us about your project — window sizes, property type, number of windows, any heritage or conservation requirements..." />
                </div>
                <button type="submit" className="rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition hover:bg-primary-deep">
                  Send message
                </button>
              </form>
            </div>

            {/* Contact details */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl text-secondary">Contact details</h2>
                <div className="mt-6 space-y-5">
                  <div className="flex gap-4">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
                    <div>
                      <p className="text-sm font-semibold text-secondary">Phone</p>
                      <a href="tel:02038761234" className="text-muted-foreground hover:text-primary-deep">020 3876 1234</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
                    <div>
                      <p className="text-sm font-semibold text-secondary">Email</p>
                      <a href="mailto:info@vacuumglazedwindows.co.uk" className="text-muted-foreground hover:text-primary-deep">info@vacuumglazedwindows.co.uk</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
                    <div>
                      <p className="text-sm font-semibold text-secondary">Showroom</p>
                      <p className="text-muted-foreground">14 Marylebone Lane<br />London W1U 2NE</p>
                      <p className="mt-1 text-xs text-muted-foreground">Monday–Friday 9am–5pm<br />Saturday by appointment</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-cream p-6">
                <p className="text-sm font-semibold text-secondary">Supply enquiries</p>
                <p className="mt-2 text-sm text-muted-foreground">Include your window sizes, property type (listed, conservation area, standard), and approximate quantity. We'll return a full specification and supply price within 24 hours.</p>
              </div>
              <div className="rounded-2xl border border-border bg-cream p-6">
                <p className="text-sm font-semibold text-secondary">Trade accounts</p>
                <p className="mt-2 text-sm text-muted-foreground">Architects, joiners and contractors can apply for a trade account. Mention this in your message and we'll set up a call with our trade team.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
