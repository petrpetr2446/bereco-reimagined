import { createFileRoute } from "@tanstack/react-router";
import { ProductPageTemplate } from "@/components/site/ProductPageTemplate";

export const Route = createFileRoute("/vacuum-doors/finishes")({
  head: () => ({
    meta: [
      { title: "Paint & Stain Finishes — Doors | Vacuum Glazed Windows Ltd" },
      { name: "description", content: "Factory-applied paint and stain finishes for vacuum glazed timber doors. RAL, NCS and bespoke colour matching available." },
    ],
  }),
  component: DoorFinishesPage,
});

const SPECS = [
  { value: "200", unit: "+", label: "Standard colours" },
  { value: "RAL", unit: "/NCS", label: "Colour systems" },
  { value: "3", unit: "coat", label: "Factory paint system" },
  { value: "10", unit: "yr", label: "Finish warranty" },
];

function DoorFinishesPage() {
  return (
    <ProductPageTemplate
      category="Vacuum Doors"
      title="Paint & Stain Finishes"
      tagline="Factory-applied colour for lasting performance"
      description="Our vacuum glazed timber doors are factory-finished under controlled conditions in our European manufacturing facilities. A three-coat system — primer, undercoat and topcoat — delivers consistent, durable coverage that site painting cannot replicate. Over 200 standard colours are available in RAL and NCS systems, with bespoke colour matching for existing joinery or heritage paint ranges. Both opaque paint and translucent stain options are available, giving conservation officers the flexibility they require."
      specs={SPECS}
      features={[
        { title: "Factory-Applied System", description: "Three-coat primer, undercoat and topcoat applied under controlled factory conditions for a consistent, durable finish." },
        { title: "RAL & NCS Colour Matching", description: "200+ standard colours plus bespoke matching to existing joinery, heritage paint ranges or architect specification." },
        { title: "Paint & Stain Options", description: "Opaque paint or translucent stain — stain finishes retain the natural timber grain, often preferred by conservation officers." },
        { title: "10-Year Finish Warranty", description: "Factory finishes carry a 10-year warranty against peeling, flaking and adhesion failure under normal use." },
      ]}
      backLink={{ label: "All doors", href: "/vacuum-doors" }}
    />
  );
}
