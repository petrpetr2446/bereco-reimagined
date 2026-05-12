import { createFileRoute } from "@tanstack/react-router";
import { ProductPageTemplate } from "@/components/site/ProductPageTemplate";

export const Route = createFileRoute("/vacuum-doors/acoustic")({
  head: () => ({
    meta: [
      { title: "Acoustic Door Range | Vacuum Glazed Windows Ltd" },
      { name: "description", content: "Enhanced acoustic vacuum glazed doors for noise reduction in period properties near roads, railways and flight paths." },
    ],
  }),
  component: AcousticDoorPage,
});

const SPECS = [
  { value: "42", unit: "dB", label: "Acoustic reduction (Rw)" },
  { value: "0.4", unit: "W/m²K", label: "U-value maintained" },
  { value: "7", unit: "mm", label: "Unit thickness" },
  { value: "PAS", unit: "24", label: "Security certified" },
];

function AcousticDoorPage() {
  return (
    <ProductPageTemplate
      category="Vacuum Doors"
      title="Acoustic Range"
      tagline="Maximum noise reduction without sacrificing performance or security"
      description="Entrance doors are a primary noise path into a property — especially in period homes with original single-glazed fanlights and panels. Our acoustic vacuum glazed door range uses asymmetric glass pane configurations and acoustic interlayers to achieve up to 42 dB Rw noise reduction, while maintaining the slim 7mm profile and 0.4 W/m²K U-value of our standard units. All acoustic doors retain PAS 24 security certification and are available in the full range of styles and finishes."
      specs={SPECS}
      features={[
        { title: "42 dB Rw Noise Reduction", description: "Asymmetric glass configurations and acoustic interlayers achieve up to 42 dB Rw — well above standard double glazing." },
        { title: "No Compromise on Thermal Performance", description: "Acoustic upgrades maintain the same 0.4 W/m²K U-value and 7mm profile as our standard vacuum units." },
        { title: "PAS 24 Security Retained", description: "All acoustic door configurations maintain PAS 24 enhanced security certification as standard." },
        { title: "Available Across All Door Styles", description: "Acoustic performance upgrades available for entrance, French, sliding patio and bi-fold door configurations." },
      ]}
      backLink={{ label: "All doors", href: "/vacuum-doors" }}
    />
  );
}
