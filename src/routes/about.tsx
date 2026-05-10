import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CtaBand } from "@/components/site/CtaBand";
import workshop from "@/assets/workshop.jpg";
import about from "@/assets/about-hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Vitrum Heritage Glazing" },
      { name: "description", content: "Founded by craftspeople and conservation specialists. The story behind Vitrum Heritage." },
      { property: "og:title", content: "About Vitrum Heritage" },
      { property: "og:description", content: "Joinery workshop and conservation specialists rebuilding period London windows." },
      { property: "og:image", content: about },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="About"
        title="Restoring the original windows of London's most beautiful homes"
        lede="Vitrum was founded in 2017 by a joiner and a conservation surveyor who shared a frustration: heritage homes were being stripped of their original windows in pursuit of energy efficiency. We knew there was a better way."
        image={about}
        crumbs={[{ label: "About" }]}
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2 lg:items-center">
          <img src={workshop} alt="Vitrum joinery workshop" loading="lazy" className="rounded-2xl object-cover shadow-xl" />
          <div>
            <SectionHeading eyebrow="The workshop" title="In-house joinery, in West London" />
            <p className="mt-5 text-lg leading-relaxed text-secondary/80">Every sash and casement we work on passes through our Acton workshop, where a team of nine joiners restores frames using traditional methods, matched timber and conservation-grade finishes.</p>
            <p className="mt-4 text-lg leading-relaxed text-secondary/80">Vacuum units are manufactured to our exact dimensions by an industry-leading European partner under our quality programme.</p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeading eyebrow="By the numbers" title="Eight years, one focus" align="center" />
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {[
              ["2,400+", "Windows restored"],
              ["180+", "Listed properties"],
              ["40+", "Conservation areas"],
              ["98%", "Repeat / referral rate"],
            ].map(([v, l]) => (
              <div key={l} className="text-center">
                <div className="font-display text-5xl text-primary-deep">{v}</div>
                <p className="mt-2 text-sm text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <SectionHeading eyebrow="Accreditations" title="Independently certified" align="center" />
          <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
            {["FENSA", "BFRC", "TrustMark", "BM TRADA Q-Mark", "Listed Property Owners' Club", "Heritage Crafts Association"].map((a) => (
              <span key={a} className="rounded-full border border-border bg-card px-5 py-2.5">{a}</span>
            ))}
          </div>
          <Link to="/showroom" className="mt-10 inline-block rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-deep">
            Visit our showroom
          </Link>
        </div>
      </section>

      <CtaBand />
    </PageLayout>
  );
}
