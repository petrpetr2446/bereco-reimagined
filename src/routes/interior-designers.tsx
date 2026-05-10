import { createFileRoute } from "@tanstack/react-router";
import { Palette, Eye, Sparkles } from "lucide-react";
import { AudiencePage } from "@/components/site/AudiencePage";
import img from "@/assets/product-sash.jpg";

export const Route = createFileRoute("/interior-designers")({
  head: () => ({
    meta: [
      { title: "For Interior Designers — Vitrum Heritage" },
      { name: "description", content: "Heritage glazing that disappears into your design — preserving sightlines, light quality and architectural detail." },
      { property: "og:title", content: "For Interior Designers" },
      { property: "og:description", content: "Heritage glazing for design-led period interiors." },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <AudiencePage
      eyebrow="Interior Designers"
      title="Glazing that protects the light, quiet and detailing of your scheme"
      lede="Slim vacuum glazing keeps original sightlines intact and the daylight you've designed around. We coordinate with your team and contractors throughout."
      heroImage={img}
      painPoints={[
        { icon: Eye, title: "Preserving sightlines", body: "Astragal bars, putty lines and reveals look unchanged — your scheme reads as you drew it." },
        { icon: Palette, title: "Finish coordination", body: "Joinery painted and finished to your specification, including hand-mixed colours." },
        { icon: Sparkles, title: "Acoustic comfort", body: "Quieter rooms transform the experience of even the most beautifully designed interior." },
      ]}
      workflow={[
        { step: "01", title: "Design review", body: "We attend your design meetings to understand the scheme and finish palette." },
        { step: "02", title: "Joinery samples", body: "Painted samples provided so you can sign off appearance before install." },
        { step: "03", title: "Programmed install", body: "We sequence around your trades to keep the project on programme." },
        { step: "04", title: "Final snag", body: "Joint walkthrough with you and your client at handover." },
      ]}
      ctaTitle="Book a design consultation"
    />
  ),
});
