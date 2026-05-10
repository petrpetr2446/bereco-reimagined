import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SpecTable } from "@/components/site/SpecTable";
import { CtaBand } from "@/components/site/CtaBand";
import img from "@/assets/product-vacuum.jpg";

export const Route = createFileRoute("/performance")({
  head: () => ({
    meta: [
      { title: "Performance Data — Vitrum Heritage" },
      { name: "description", content: "Independent U-values, acoustic data and certifications for our vacuum glazing." },
      { property: "og:title", content: "Performance Data" },
      { property: "og:description", content: "Verified thermal and acoustic performance figures." },
      { property: "og:image", content: img },
    ],
  }),
  component: PerformancePage,
});

function PerformancePage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Performance"
        title="Verified, independent performance data"
        lede="All figures below are drawn from accredited test reports. Full certification packs available on request for architects and conservation officers."
        image={img}
        crumbs={[{ label: "Performance" }]}
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Thermal" title="U-values that match modern triple glazing" />
            <p className="mt-5 text-muted-foreground">Our standard vacuum unit reaches a centre-pane U-value of 1.0 W/m²K. The premium krypton variant reaches 0.4 W/m²K — equivalent to high-end triple glazing in just 8.3 mm of glass.</p>
          </div>
          <SpecTable caption="Thermal performance" rows={[
            { label: "Centre-pane U (standard)", value: "1.0 W/m²K" },
            { label: "Centre-pane U (premium)", value: "0.4 W/m²K" },
            { label: "Whole-window U (sash)", value: "1.4 W/m²K" },
            { label: "Whole-window U (casement)", value: "1.4 W/m²K" },
            { label: "G-value (solar gain)", value: "0.50" },
            { label: "Light transmission", value: "78%" },
          ]} />
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2">
          <SpecTable caption="Acoustic performance" rows={[
            { label: "Standard VIG", value: "29 dB Rw" },
            { label: "Laminated VIG", value: "36 dB Rw" },
            { label: "VIG + secondary", value: "45 dB Rw" },
            { label: "Original single glazing", value: "23 dB Rw" },
          ]} />
          <div>
            <SectionHeading eyebrow="Acoustic" title="Quieter rooms on busy streets" />
            <p className="mt-5 text-muted-foreground">Laminated vacuum units deliver up to 36 dB of noise reduction. Combined with our slim secondary glazing, the figure rises to 45 dB — enough to make conversation comfortable on London's busiest arteries.</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading eyebrow="Certifications" title="Independent test pedigree" align="center" />
          <ul className="mt-10 grid gap-3 md:grid-cols-2">
            {["EN 673 thermal transmittance", "EN ISO 10140 acoustic", "EN 12150 toughened safety", "BFRC Window Energy Rating", "FENSA registered installer", "CE & UKCA marked components"].map((c) => (
              <li key={c} className="rounded-xl border border-border bg-card px-5 py-4 text-secondary">{c}</li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Need the full data pack?" body="We provide complete test certificates and a U-value calculation for your specific window sizes." primary={{ label: "Request data pack", to: "/contact" }} />
    </PageLayout>
  );
}
