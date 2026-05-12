import { createFileRoute } from "@tanstack/react-router";
import { ProductPageTemplate } from "@/components/site/ProductPageTemplate";

export const Route = createFileRoute("/vacuum-doors/ironmongery")({
  head: () => ({
    meta: [
      { title: "Door Ironmongery | Vacuum Glazed Windows Ltd" },
      { name: "description", content: "Heritage-matched door handles, hinges, letter plates and furniture in 10 metal finishes for vacuum glazed timber doors." },
    ],
  }),
  component: DoorIronmongeryPage,
});

const SPECS = [
  { value: "10", unit: "+", label: "Metal finishes" },
  { value: "PAS", unit: "24", label: "Security certified" },
  { value: "316", unit: "SS", label: "Marine-grade option" },
  { value: "BS", unit: "EN", label: "Certified hardware" },
];

function DoorIronmongeryPage() {
  return (
    <ProductPageTemplate
      category="Vacuum Doors"
      title="Door Ironmongery"
      tagline="Security-rated heritage hardware for period entrances"
      description="Door ironmongery defines the character of a period entrance. We supply a full suite of handles, hinges, letter plates, knockers, numerals and security furniture matched to each door style. All locking hardware is PAS 24 security certified where required. Available in antique brass, satin brass, polished chrome, satin chrome, gunmetal, powder-coated black and more — ensuring compliance with conservation area requirements while meeting modern security standards."
      specs={SPECS}
      features={[
        { title: "PAS 24 Security Certified", description: "All locking hardware meets PAS 24 enhanced security requirements as standard on entrance doors." },
        { title: "10+ Metal Finishes", description: "Antique brass, satin brass, polished chrome, satin chrome, gunmetal, powder-coated black and more." },
        { title: "Full Suite Available", description: "Handles, hinges, letter plates, door knockers, spy holes, numerals and security multipoint locks." },
        { title: "Conservation Approved", description: "Hardware profiles and finishes selected to satisfy conservation officers and listed building consent conditions." },
      ]}
      backLink={{ label: "All doors", href: "/vacuum-doors" }}
    />
  );
}
