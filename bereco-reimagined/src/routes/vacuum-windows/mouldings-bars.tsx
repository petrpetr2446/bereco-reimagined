import { createFileRoute } from "@tanstack/react-router";
import { ProductPageTemplate } from "@/components/site/ProductPageTemplate";

export const Route = createFileRoute("/vacuum-windows/mouldings-bars")({
  head: () => ({
    meta: [
      { title: "Mouldings & Glazing Bars — Windows | Vacuum Glazed Windows Ltd" },
      { name: "description", content: "Decorative mouldings and slim glazing bars for vacuum glazed timber windows. Georgian, Victorian and bespoke profiles available." },
    ],
  }),
  component: WindowMouldingsPage,
});

const SPECS = [
  { value: "8", unit: "mm", label: "Minimum bar width" },
  { value: "15", unit: "+", label: "Standard profiles" },
  { value: "True", unit: "SDL", label: "Authentic divided lights" },
  { value: "Any", unit: "RAL", label: "Matched finish" },
];

function WindowMouldingsPage() {
  return (
    <ProductPageTemplate
      category="Vacuum Windows"
      title="Mouldings & Bars"
      tagline="Authentic divided lights and decorative profiles"
      description="Glazing bars and decorative mouldings are critical to the character of period windows. We offer true structural divided lights (SDL) — where individual vacuum panes sit within real timber bars — as well as applied external and internal bars for a traditional appearance. Georgian, Victorian, Edwardian and bespoke profiles are available, all machined to match the original moulding sections of your property. All bars can be finished in any RAL or NCS colour to match the main frame."
      specs={SPECS}
      features={[
        { title: "True Divided Lights", description: "Structural glazing bars with individual vacuum panes — the authentic method accepted in all conservation areas." },
        { title: "8mm Minimum Bar Width", description: "Ultra-slim bars achieve the narrow sightlines of original single-glazed windows without compromising performance." },
        { title: "15+ Standard Profiles", description: "Georgian, Victorian, Edwardian and transitional bar profiles, plus bespoke machining to match existing joinery." },
        { title: "Colour-Matched Finish", description: "All bars finished to match the main frame colour in any RAL or NCS colour, ensuring a seamless appearance." },
      ]}
      backLink={{ label: "All windows", href: "/vacuum-windows" }}
    />
  );
}
