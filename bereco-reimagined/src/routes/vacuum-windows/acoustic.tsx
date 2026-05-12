import { createFileRoute } from "@tanstack/react-router";
import { ProductPageTemplate } from "@/components/site/ProductPageTemplate";

export const Route = createFileRoute("/vacuum-windows/acoustic")({
  head: () => ({
    meta: [
      { title: "Acoustic Window Range | Vacuum Glazed Windows Ltd" },
      { name: "description", content: "Enhanced acoustic vacuum glazed windows for noise reduction in period properties near roads, railways and flight paths." },
    ],
  }),
  component: AcousticWindowPage,
});

const SPECS = [
  { value: "42", unit: "dB", label: "Acoustic reduction (Rw)" },
  { value: "0.4", unit: "W/m²K", label: "U-value maintained" },
  { value: "7", unit: "mm", label: "Unit thickness" },
  { value: "A+", unit: "rated", label: "Energy rating" },
];

function AcousticWindowPage() {
  return (
    <ProductPageTemplate
      category="Vacuum Windows"
      title="Acoustic Range"
      tagline="Maximum noise reduction without sacrificing thermal performance"
      description="London properties near busy roads, railways or under flight paths face significant noise challenges that standard glazing cannot solve. Our acoustic vacuum glazed window range uses asymmetric glass pane configurations and specialist acoustic interlayers within the vacuum unit to achieve up to 42 dB Rw noise reduction — substantially better than conventional double glazing — while maintaining the slim 7mm profile and 0.4 W/m²K U-value of our standard units. Available across all window styles."
      specs={SPECS}
      features={[
        { title: "42 dB Rw Noise Reduction", description: "Asymmetric glass configurations and acoustic interlayers achieve up to 42 dB Rw — significantly better than standard double glazing." },
        { title: "No Compromise on Thermal Performance", description: "Acoustic upgrades maintain the same 0.4 W/m²K U-value and 7mm profile as our standard vacuum units." },
        { title: "Available Across All Styles", description: "Acoustic performance upgrades available for flush casement, lipped casement, sash, tilt-and-turn and bespoke window types." },
        { title: "Conservation Compatible", description: "Slim acoustic units remain within the sightline tolerances accepted by conservation officers and listed building consent." },
      ]}
      backLink={{ label: "All windows", href: "/vacuum-windows" }}
    />
  );
}
