import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Vitrum Heritage" },
      { name: "description", content: "Get in touch with our heritage glazing team. Showroom, phone and email." },
      { property: "og:title", content: "Contact Vitrum" },
      { property: "og:description", content: "Talk to our team or visit our Marylebone showroom." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <PageLayout>
      <PageHero eyebrow="Contact" title="Get in touch" lede="Whether you're starting a project or just exploring options, we'd love to hear from you." crumbs={[{ label: "Contact" }]} />

      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2">
          <div className="space-y-6">
            {[
              { icon: Phone, title: "Call us", body: "020 3876 1234", sub: "Mon–Fri · 9am–6pm" },
              { icon: Mail, title: "Email", body: "hello@vitrum.co.uk", sub: "We reply within one working day" },
              { icon: MapPin, title: "Showroom", body: "14 Marylebone Lane, London W1U 2NE", sub: "By appointment" },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="flex gap-5 rounded-2xl border border-border bg-card p-6">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary/15 text-primary-deep">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-secondary">{c.title}</h3>
                    <p className="mt-1 font-medium text-secondary">{c.body}</p>
                    <p className="text-sm text-muted-foreground">{c.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="rounded-2xl border border-border bg-card p-8">
            {sent ? (
              <div className="py-12 text-center">
                <h3 className="font-display text-2xl text-secondary">Thanks — message received</h3>
                <p className="mt-3 text-muted-foreground">We'll respond within one working day.</p>
              </div>
            ) : (
              <>
                <h2 className="font-display text-2xl text-secondary">Send us a message</h2>
                <div className="mt-6 space-y-4">
                  <input required placeholder="Your name" className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
                  <input required type="email" placeholder="Email" className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
                  <input placeholder="Phone (optional)" className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
                  <textarea required placeholder="How can we help?" className="min-h-[140px] w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
                </div>
                <button type="submit" className="mt-6 w-full rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-deep">Send message</button>
              </>
            )}
          </form>
        </div>
      </section>
    </PageLayout>
  );
}
