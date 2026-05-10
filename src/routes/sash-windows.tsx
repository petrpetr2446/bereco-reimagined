import { createFileRoute } from "@tanstack/react-router";
import { Hammer, ShieldCheck, ThermometerSun, Volume2, Leaf, Ruler } from "lucide-react";
import { ProductPage } from "@/components/site/ProductPage";
import img from "@/assets/product-sash.jpg";

export const Route = createFileRoute("/sash-windows")({
  head: () => ({
    meta: [
      { title: "Sash Windows — Vitrum Heritage" },
      { name: "description", content: "Restored timber sash windows fitted with slim vacuum glazing. Heritage-approved across Kensington, Chelsea, Notting Hill." },
      { property: "og:title", content: "Sash Window Upgrades — Vitrum Heritage" },
      { property: "og:description", content: "Restored sashes, slim vacuum glass, EPC-ready performance." },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <ProductPage
      eyebrow="Sash Windows"
      title="Sash window upgrades for Victorian, Georgian & Edwardian homes"
      lede="We restore your original timber sashes off-site, fit slim vacuum glazing, and reinstall with discreet brush-seal draughtproofing — the most heritage-faithful upgrade available."
      heroImage={img}
      intro={{
        heading: "A complete sash restoration service",
        body: [
          "Our in-house joinery workshop strips, repairs and re-cords each sash to the original profile, then fits new vacuum insulated glazing units within the existing rebates.",
          "Sightlines, glazing bars and putty lines are preserved exactly. From the street, your windows look unchanged. Inside, the difference is immediate — warmer, quieter, draught-free.",
        ],
      }}
      features={[
        { icon: Hammer, title: "In-house joinery", body: "Hand-restored frames with traditional techniques and matched timber." },
        { icon: Ruler, title: "Original sightlines", body: "Astragal bars and putty lines remain identical to the originals." },
        { icon: ThermometerSun, title: "Thermal upgrade", body: "Whole-window U-values around 1.4 W/m²K — comparable to modern double glazing." },
        { icon: Volume2, title: "Acoustic comfort", body: "Up to 36 dB reduction with laminated vacuum units." },
        { icon: Leaf, title: "Less heat loss", body: "Combined with brush-seal draughtproofing for measurable energy savings." },
        { icon: ShieldCheck, title: "Conservation approved", body: "Accepted on listed buildings across 40+ London conservation areas." },
      ]}
      spec={{
        caption: "Sash + vacuum unit assembly",
        rows: [
          { label: "Glazing unit", value: "8.3 mm VIG" },
          { label: "Whole-window U-value", value: "1.4 W/m²K", note: "varies by frame size" },
          { label: "Acoustic reduction", value: "Up to 36 dB" },
          { label: "Draughtproofing", value: "Discreet brush seals" },
          { label: "Joinery warranty", value: "10 years" },
          { label: "Glazing warranty", value: "25 years" },
        ],
      }}
      faqs={[
        { q: "How long does a typical sash restoration take?", a: "For a single property, we typically complete the work in 3–5 days on site, with sashes off-site for around two weeks." },
        { q: "Can you replace rotten sections?", a: "Yes — we splice in matching timber where needed, preserving as much of the original sash as possible." },
        { q: "Will the windows still slide smoothly?", a: "Restored sashes are re-corded, balanced and lubricated to operate more smoothly than they did originally." },
      ]}
      related={[
        { label: "Vacuum Glazing", to: "/vacuum-glazing" },
        { label: "Draughtproofing", to: "/draughtproofing" },
        { label: "Case Studies", to: "/case-studies" },
      ]}
    />
  ),
});
