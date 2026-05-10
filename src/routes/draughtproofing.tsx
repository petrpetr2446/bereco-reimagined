import { createFileRoute } from "@tanstack/react-router";
import { Wind, Volume2, ShieldCheck, ThermometerSun, Hammer, Sparkles } from "lucide-react";
import { ProductPage } from "@/components/site/ProductPage";
import img from "@/assets/install.jpg";

export const Route = createFileRoute("/draughtproofing")({
  head: () => ({
    meta: [
      { title: "Draughtproofing — Vitrum Heritage" },
      { name: "description", content: "Discreet brush-seal draughtproofing for original timber sash and casement windows." },
      { property: "og:title", content: "Heritage Draughtproofing" },
      { property: "og:description", content: "Eliminate draughts without altering original joinery." },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <ProductPage
      eyebrow="Draughtproofing"
      title="Discreet brush-seal draughtproofing for period windows"
      lede="A precision-routed pile-seal system that eliminates the cold draughts and rattles of original timber windows — invisible once installed, and fully compatible with vacuum glazing."
      heroImage={img}
      intro={{
        heading: "The fastest comfort upgrade for period homes",
        body: [
          "We rout a 4 mm channel into each meeting rail and stile, fit dense pile brush seals, and re-balance the sash. The result: warm rooms, no rattle and no whistle on windy nights.",
          "Often specified alongside vacuum glazing, draughtproofing alone is one of the most cost-effective heritage retrofit measures available.",
        ],
      }}
      features={[
        { icon: Wind, title: "Eliminates draughts", body: "Up to 86% reduction in air infiltration on original sashes." },
        { icon: Volume2, title: "Stops rattle", body: "Sashes seat firmly on weather-stripping, removing the wind-noise rattle." },
        { icon: ThermometerSun, title: "Lower bills", body: "Typically 10–15% reduction in heating demand from draughtproofing alone." },
        { icon: ShieldCheck, title: "Reversible", body: "Brush seals can be replaced or removed without damage." },
        { icon: Hammer, title: "One-day install", body: "Most homes completed in a single day per floor." },
        { icon: Sparkles, title: "Invisible", body: "Pile is colour-matched to the joinery — undetectable from a metre away." },
      ]}
      spec={{
        caption: "Draughtproofing system",
        rows: [
          { label: "Seal type", value: "Pile brush, 4 mm pile" },
          { label: "Air-leakage reduction", value: "Up to 86%" },
          { label: "Install time", value: "1 day per floor" },
          { label: "Warranty", value: "10 years" },
        ],
      }}
      faqs={[
        { q: "Can I draughtproof without changing the glass?", a: "Absolutely — many clients start here as a fast, low-impact improvement." },
        { q: "Does it stop condensation?", a: "Draughtproofing alone won't stop condensation; combine with vacuum glazing for full thermal performance." },
      ]}
      related={[
        { label: "Sash Windows", to: "/sash-windows" },
        { label: "Vacuum Glazing", to: "/vacuum-glazing" },
        { label: "Process", to: "/process" },
      ]}
    />
  ),
});
