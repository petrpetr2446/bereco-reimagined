import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Volume2, ThermometerSun, Sparkles, Ruler, Hammer } from "lucide-react";
import { ProductPage } from "@/components/site/ProductPage";
import img from "@/assets/product-secondary.jpg";

export const Route = createFileRoute("/secondary-glazing")({
  head: () => ({
    meta: [
      { title: "Secondary Glazing — Vitrum Heritage" },
      { name: "description", content: "Discreet, slim secondary glazing systems for the strictest listed buildings." },
      { property: "og:title", content: "Secondary Glazing" },
      { property: "og:description", content: "Slim aluminium secondary glazing where vacuum retrofit isn't permitted." },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <ProductPage
      eyebrow="Secondary Glazing"
      title="Discreet secondary glazing for the strictest listed buildings"
      lede="When conservation officers won't permit changes to original glass, slim secondary glazing fitted on the room side delivers significant thermal and acoustic improvement — fully reversible."
      heroImage={img}
      intro={{
        heading: "When a second pane is the right answer",
        body: [
          "Our slim aluminium and bronze-finish secondary systems are designed to disappear into the reveal — sliding horizontally or lifting out for cleaning and ventilation.",
          "Used in combination with original single glazing, they typically reduce heat loss by 50% and noise by up to 45 dB.",
        ],
      }}
      features={[
        { icon: ShieldCheck, title: "Fully reversible", body: "No alteration to original windows — the preferred listed-building solution." },
        { icon: Volume2, title: "Up to 45 dB acoustic", body: "Outperforms most retrofit glazing for noise on busy roads." },
        { icon: ThermometerSun, title: "Whole-window U ~1.6", body: "Substantial energy reduction with original single glazing retained." },
        { icon: Ruler, title: "Slim sightlines", body: "Frame thickness from 20 mm — barely perceptible in the reveal." },
        { icon: Sparkles, title: "Bespoke finishes", body: "Powder-coat colour matching to existing joinery or decorative scheme." },
        { icon: Hammer, title: "Fitted in a day", body: "Most installations completed without touching the existing windows." },
      ]}
      spec={{
        caption: "Secondary glazing system",
        rows: [
          { label: "Frame depth", value: "From 20 mm" },
          { label: "Glazing", value: "4–10 mm laminated" },
          { label: "Acoustic reduction (combined)", value: "Up to 45 dB" },
          { label: "Whole-window U-value", value: "≈1.6 W/m²K" },
          { label: "Reversibility", value: "Fully removable" },
        ],
      }}
      faqs={[
        { q: "Does it look obvious from the street?", a: "No — secondary units sit on the room side and are invisible from outside, which is why conservation officers favour them." },
        { q: "Can I still open the original window?", a: "Yes — our systems open or lift out so the original sash or casement remains operable." },
      ]}
      related={[
        { label: "Vacuum Glazing", to: "/vacuum-glazing" },
        { label: "Draughtproofing", to: "/draughtproofing" },
        { label: "EPC 2026 Guide", to: "/epc-2026" },
      ]}
    />
  ),
});
