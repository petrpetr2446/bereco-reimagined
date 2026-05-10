import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Clock, Phone } from "lucide-react";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBand } from "@/components/site/CtaBand";
import img from "@/assets/product-sash.jpg";

export const Route = createFileRoute("/showroom")({
  head: () => ({
    meta: [
      { title: "Showroom — Vitrum Heritage" },
      { name: "description", content: "See, touch and operate full-size vacuum glazing samples at our Marylebone showroom." },
      { property: "og:title", content: "Vitrum Showroom — Marylebone" },
      { property: "og:description", content: "Visit by appointment to see vacuum glazing in person." },
      { property: "og:image", content: img },
    ],
  }),
  component: ShowroomPage,
});

function ShowroomPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Showroom"
        title="Visit our Marylebone showroom"
        lede="See, touch and operate full-size vacuum-glazed sash and casement samples. Bring your architect or designer — we welcome trade visits."
        image={img}
        crumbs={[{ label: "Showroom" }]}
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-3">
          {[
            { icon: MapPin, title: "Address", body: "14 Marylebone Lane\nLondon W1U 2NE" },
            { icon: Clock, title: "Hours", body: "Mon–Fri · 9am–6pm\nSat by appointment" },
            { icon: Phone, title: "Book a visit", body: "020 3876 1234\nshowroom@vitrum.co.uk" },
          ].map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.title} className="rounded-2xl border border-border bg-card p-8 text-center">
                <Icon className="mx-auto h-9 w-9 text-primary" strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-xl text-secondary">{b.title}</h3>
                <p className="mt-2 whitespace-pre-line text-muted-foreground">{b.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-cream py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="aspect-[16/7] overflow-hidden rounded-2xl ring-1 ring-border">
            <iframe title="Showroom map" src="https://www.openstreetmap.org/export/embed.html?bbox=-0.155,51.516,-0.145,51.520&layer=mapnik" className="h-full w-full" loading="lazy" />
          </div>
        </div>
      </section>

      <CtaBand title="Prefer we come to you?" body="Book a free in-home survey instead — same specialists, your kitchen table." primary={{ label: "Book a survey", to: "/survey" }} secondary={{ label: "Contact us", to: "/contact" }} />
    </PageLayout>
  );
}
