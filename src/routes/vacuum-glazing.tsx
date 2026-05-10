import { createFileRoute } from "@tanstack/react-router";
import { ThermometerSun, Volume2, Leaf, ShieldCheck, Ruler, Sparkles } from "lucide-react";
import { ProductPage } from "@/components/site/ProductPage";
import img from "@/assets/product-vacuum.jpg";

export const Route = createFileRoute("/vacuum-glazing")({
  head: () => ({
    meta: [
      { title: "Vacuum Glazing — Vitrum Heritage" },
      { name: "description", content: "Slim vacuum insulated glass for period homes. U-values from 0.4 W/m²K in a unit thinner than a pound coin." },
      { property: "og:title", content: "Vacuum Glazing — Vitrum Heritage" },
      { property: "og:description", content: "Triple-glazing performance in 8.3 mm of glass." },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <ProductPage
      eyebrow="Vacuum Glazing"
      title="Triple-glazing performance in 8.3 mm of glass"
      lede="Two panes of glass separated by a vacuum cavity, sealed at the edge and supported by micro-pillars. The result: dramatic thermal and acoustic gains in a unit slim enough to fit your original timber sashes."
      heroImage={img}
      intro={{
        heading: "What is vacuum insulated glass?",
        body: [
          "A vacuum insulated glazing (VIG) unit replaces the gas cavity of a conventional double-glazed unit with an evacuated space — eliminating conductive and convective heat loss almost entirely.",
          "Because the cavity is so thin, the entire unit measures just 8.3 mm — slim enough to retrofit into existing 19th-century sash and casement frames without altering sightlines, putty lines or astragal bars.",
        ],
      }}
      features={[
        { icon: ThermometerSun, title: "0.4 W/m²K U-values", body: "Better than most modern triple-glazed units, in a single thin pane." },
        { icon: Volume2, title: "Up to 36 dB acoustic", body: "Laminated variants engineered for noisy central London streets." },
        { icon: Leaf, title: "60% less heat loss", body: "Versus original single-glazed sashes — verified on installed projects." },
        { icon: ShieldCheck, title: "25-year vacuum seal", body: "Manufactured under industry-leading quality controls and warranty." },
        { icon: Ruler, title: "Just 8.3 mm thick", body: "Drops into existing rebates with minimal joinery alteration." },
        { icon: Sparkles, title: "Optical clarity", body: "Pillar spacers are 0.5 mm — invisible at normal viewing distance." },
      ]}
      spec={{
        caption: "Standard unit — full data on request",
        rows: [
          { label: "Centre-pane U-value", value: "1.0 W/m²K", note: "Premium krypton: 0.4 W/m²K" },
          { label: "Total unit thickness", value: "8.3 mm" },
          { label: "Acoustic reduction (Rw)", value: "36 dB", note: "Laminated variant" },
          { label: "Light transmission", value: "78%" },
          { label: "G-value (solar gain)", value: "0.50" },
          { label: "Edge seal", value: "Hermetic glass-to-glass" },
          { label: "Warranty", value: "25 years" },
        ],
      }}
      faqs={[
        { q: "Will it work in my listed building?", a: "In most cases, yes. We've installed vacuum glazing in over 40 London conservation areas and on Grade II listed properties. We handle the listed building consent paperwork on your behalf." },
        { q: "Do my original sashes have to be removed?", a: "Sashes are removed temporarily for off-site joinery work, then refitted with the new vacuum units. Total disruption is typically 3–5 days per property." },
        { q: "How does it compare to secondary glazing?", a: "Vacuum glazing replaces the original glass entirely, so there is no second window to clean or operate. Secondary glazing remains a useful option for the strictest conservation cases." },
        { q: "What does it cost?", a: "Per-window pricing depends on size, shape, joinery condition and whether listed building consent is needed. We provide indicative pricing after a free survey." },
      ]}
      related={[
        { label: "Sash Window Upgrades", to: "/sash-windows" },
        { label: "Casement Restorations", to: "/casement-windows" },
        { label: "Performance Data", to: "/performance" },
      ]}
    />
  ),
});
