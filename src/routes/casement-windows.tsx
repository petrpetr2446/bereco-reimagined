import { createFileRoute } from "@tanstack/react-router";
import { Hammer, ShieldCheck, ThermometerSun, Volume2, Sparkles, Ruler } from "lucide-react";
import { ProductPage } from "@/components/site/ProductPage";
import img from "@/assets/product-casement.jpg";

export const Route = createFileRoute("/casement-windows")({
  head: () => ({
    meta: [
      { title: "Casement Windows — Vitrum Heritage" },
      { name: "description", content: "Restored timber casement windows with vacuum glazing for period London homes." },
      { property: "og:title", content: "Casement Window Restoration" },
      { property: "og:description", content: "Heritage casements with slim vacuum glass." },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <ProductPage
      eyebrow="Casement Windows"
      title="Casement window restoration with vacuum glazing"
      lede="From Arts & Crafts cottages to Edwardian villas, we restore original timber casements and upgrade them to modern thermal and acoustic standards."
      heroImage={img}
      intro={{
        heading: "Casements built to last another century",
        body: [
          "Original casement frames are removed, restored in our workshop, and refitted with slim vacuum glazing — including across leaded and stained-glass panels using bespoke encapsulation.",
          "We retain or restore original ironmongery, espagnolette bolts and stay arms wherever possible.",
        ],
      }}
      features={[
        { icon: Hammer, title: "Frame restoration", body: "Splice repairs, re-finishing and original profile preservation." },
        { icon: Sparkles, title: "Leaded panel encapsulation", body: "Heritage leadwork retained and sealed within vacuum units." },
        { icon: Ruler, title: "Sightline accuracy", body: "Existing rebate depths used wherever the survey allows." },
        { icon: ThermometerSun, title: "Thermal upgrade", body: "Whole-window U-values around 1.4 W/m²K." },
        { icon: Volume2, title: "Quieter rooms", body: "Significant acoustic gain even on south-facing arterial roads." },
        { icon: ShieldCheck, title: "Listed-friendly", body: "Approved approach for many Grade II properties." },
      ]}
      spec={{
        caption: "Casement assembly",
        rows: [
          { label: "Glazing unit", value: "8.3 mm VIG" },
          { label: "Whole-window U-value", value: "1.4 W/m²K" },
          { label: "Leaded encapsulation", value: "Available" },
          { label: "Ironmongery", value: "Original or matched" },
          { label: "Warranty", value: "10/25 years" },
        ],
      }}
      faqs={[
        { q: "Can you keep stained glass?", a: "Yes — we encapsulate original stained or leaded panels within the new vacuum unit, protecting them from further deterioration." },
        { q: "What about non-square or bespoke shapes?", a: "Vacuum units can be manufactured to bespoke shapes, including arched and curved heads." },
      ]}
      related={[
        { label: "Vacuum Glazing", to: "/vacuum-glazing" },
        { label: "Sash Windows", to: "/sash-windows" },
        { label: "Secondary Glazing", to: "/secondary-glazing" },
      ]}
    />
  ),
});
