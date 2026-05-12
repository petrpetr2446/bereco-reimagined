import { createFileRoute } from "@tanstack/react-router";
import { ProductPageTemplate } from "@/components/site/ProductPageTemplate";

export const Route = createFileRoute("/vacuum-windows/ironmongery")({
  head: () => ({
    meta: [
      { title: "Window Ironmongery | Vacuum Glazed Windows Ltd" },
      { name: "description", content: "Heritage-matched window handles, stays and fasteners in 10 metal finishes. Period-appropriate ironmongery for vacuum glazed windows." },
    ],
  }),
  component: WindowIronmongeryPage,
});

const SPECS = [
  { value: "10", unit: "+", label: "Metal finishes" },
  { value: "316", unit: "SS", label: "Marine-grade option" },
  { value: "25", unit: "yr", label: "Finish guarantee" },
  { value: "BS", unit: "EN", label: "Certified hardware" },
];

function WindowIronmongeryPage() {
  return (
    <ProductPageTemplate
      category="Vacuum Windows"
      title="Window Ironmongery"
      tagline="Period-appropriate handles and furniture for every style"
      description="The right ironmongery is as important to a heritage window as the glazing itself. We supply a full range of window handles, espagnolette bolts, casement stays, sash lifts and pulleys matched to the style of each window type. All hardware is available in antique brass, satin brass, polished chrome, satin chrome, gunmetal, powder-coated black and more. Every piece is selected to satisfy conservation officers and listed building consent requirements."
      specs={SPECS}
      features={[
        { title: "10+ Metal Finishes", description: "Antique brass, satin brass, polished chrome, satin chrome, gunmetal, powder-coated black and more." },
        { title: "Conservation Approved", description: "Hardware profiles and finishes accepted by conservation officers across London boroughs." },
        { title: "Matched to Window Style", description: "Casement stays, sash lifts, espagnolette bolts and tilt-turn handles selected per product type." },
        { title: "25-Year Finish Guarantee", description: "Factory-applied powder coat and plating tested to BS EN standards for long-term durability." },
      ]}
      backLink={{ label: "All windows", href: "/vacuum-windows" }}
    />
  );
}
