import { createFileRoute } from "@tanstack/react-router";
import { ProductPageTemplate } from "@/components/site/ProductPageTemplate";

export const Route = createFileRoute("/vacuum-doors/mouldings-bars")({
  head: () => ({
    meta: [
      { title: "Mouldings & Glazing Bars — Doors | Vacuum Glazed Windows Ltd" },
      { name: "description", content: "Decorative mouldings and slim glazing bars for vacuum glazed timber doors. Period-appropriate profiles for heritage entrances." },
    ],
  }),
  component: DoorMouldingsPage,
});

const SPECS = [
  { value: "8", unit: "mm", label: "Minimum bar width" },
  { value: "15", unit: "+", label: "Standard profiles" },
  { value: "True", unit: "SDL", label: "Authentic divided lights" },
  { value: "Any", unit: "RAL", label: "Matched finish" },
];

function DoorMouldingsPage() {
  return (
    <ProductPageTemplate
      category="Vacuum Doors"
      title="Mouldings & Bars"
      tagline="Authentic glazed panels and decorative door profiles"
      description="The moulding profiles and glazing bar patterns of a period entrance door carry as much architectural significance as the door itself. We offer a full range of door panel mouldings, ovolo and ogee profiles, and slim glazing bars for glazed door panels — all machined to match existing joinery sections on site. True structural divided lights (SDL) place individual vacuum panes within real timber bars, producing the authentic appearance accepted by listed building consent and conservation area approval."
      specs={SPECS}
      features={[
        { title: "Period Panel Mouldings", description: "Ovolo, ogee, bolection and bespoke moulding profiles machined to match the existing door or surrounding joinery." },
        { title: "True Divided Lights", description: "Structural glazing bars with individual vacuum panes — the authentic method accepted in all conservation areas." },
        { title: "8mm Minimum Bar Width", description: "Ultra-slim bars maintain the fine sightlines of original single-glazed door panels." },
        { title: "Colour-Matched Finish", description: "All mouldings and bars finished to match the main door colour in any RAL or NCS specification." },
      ]}
      backLink={{ label: "All doors", href: "/vacuum-doors" }}
    />
  );
}
