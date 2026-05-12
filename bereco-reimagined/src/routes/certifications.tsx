import { createFileRoute } from "@tanstack/react-router";
import { ProductPageTemplate } from "@/components/site/ProductPageTemplate";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Our Certifications | Vacuum Glazed Windows Ltd" },
      { name: "description", content: "Vacuum Glazed Windows Ltd certifications, accreditations and quality standards. FENSA, BSI, CE marking and conservation approval." },
    ],
  }),
  component: CertificationsPage,
});

const SPECS = [
  { value: "CE", unit: "mark", label: "EU product standard" },
  { value: "BSI", unit: "kitemark", label: "British Standards" },
  { value: "FENSA", unit: "reg.", label: "Installation compliance" },
  { value: "ISO", unit: "9001", label: "Quality management" },
];

function CertificationsPage() {
  return (
    <ProductPageTemplate
      category="Quality & Standards"
      title="Our Certifications"
      tagline="Independently verified quality at every stage"
      description="Every vacuum glazed unit we supply is manufactured and tested to the highest independently verified standards. CE marking confirms compliance with EU construction product regulations. BSI Kitemark certification validates the performance data published in our product literature. FENSA registration ensures all installed products comply with current Building Regulations. Our manufacturing partners hold ISO 9001 quality management certification, and all products are independently assessed for use in conservation areas and on listed buildings."
      specs={SPECS}
      features={[
        { title: "CE Marking", description: "All vacuum glazed units carry CE marking confirming compliance with EU construction product regulations and declared performance data." },
        { title: "BSI Kitemark", description: "BSI Kitemark certification independently validates the U-values, acoustic ratings and safety classifications stated in our literature." },
        { title: "FENSA Registered", description: "FENSA registration ensures all installed replacement glazing complies with Part L of the Building Regulations." },
        { title: "ISO 9001 Quality Management", description: "Our European manufacturing partners hold ISO 9001 certification, ensuring consistent quality control across every production run." },
      ]}
      backLink={{ label: "Home", href: "/" }}
    />
  );
}
