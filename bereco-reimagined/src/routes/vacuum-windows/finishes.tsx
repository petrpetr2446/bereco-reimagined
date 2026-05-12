import { createFileRoute } from "@tanstack/react-router";
import { ProductPageTemplate } from "@/components/site/ProductPageTemplate";

export const Route = createFileRoute("/vacuum-windows/finishes")({
  head: () => ({
    meta: [
      { title: "Paint & Stain Finishes — Windows | Vacuum Glazed Windows Ltd" },
      { name: "description", content: "Factory-applied paint and stain finishes for vacuum glazed timber windows. RAL, NCS and bespoke colour matching available." },
    ],
  }),
  component: WindowFinishesPage,
});

const SPECS = [
  { value: "200", unit: "+", label: "Standard colours" },
  { value: "RAL", unit: "/NCS", label: "Colour systems" },
  { value: "3", unit: "coat", label: "Factory paint system" },
  { value: "10", unit: "yr", label: "Finish warranty" },
];

function WindowFinishesPage() {
  return (
    <ProductPageTemplate
      category="Vacuum Windows"
      title="Paint & Stain Finishes"
      tagline="Factory-applied colour for lasting performance"
      description="All our vacuum glazed timber windows are finished in our European factories under controlled conditions, ensuring a consistent, durable result that field painting cannot match. We offer over 200 standard colours in RAL and NCS systems, plus bespoke colour matching for existing joinery. Opaque paint and translucent stain options are both available, allowing the natural timber grain to show through where preferred by conservation officers."
      specs={SPECS}
      features={[
        { title: "Factory-Applied System", description: "Three-coat primer, undercoat and topcoat applied under controlled factory conditions for consistent coverage." },
        { title: "RAL & NCS Colour Matching", description: "Over 200 standard colours plus bespoke matching to existing joinery, heritage paint ranges or architect specification." },
        { title: "Paint & Stain Options", description: "Opaque paint or translucent stain — stain finishes retain the natural timber grain, often preferred by conservation officers." },
        { title: "10-Year Finish Warranty", description: "Factory finishes carry a 10-year warranty against peeling, flaking and adhesion failure under normal conditions." },
      ]}
      backLink={{ label: "All windows", href: "/vacuum-windows" }}
    />
  );
}
