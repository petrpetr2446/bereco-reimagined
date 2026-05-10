import { createFileRoute } from "@tanstack/react-router";
import { FileText, Ruler, Award } from "lucide-react";
import { AudiencePage } from "@/components/site/AudiencePage";
import img from "@/assets/about-hero.jpg";

export const Route = createFileRoute("/architects")({
  head: () => ({
    meta: [
      { title: "For Architects — Vitrum Heritage" },
      { name: "description", content: "Specifications, CAD details and CPD for architects designing on listed and conservation projects." },
      { property: "og:title", content: "For Architects" },
      { property: "og:description", content: "Tech specs, CAD details and CPD on heritage vacuum glazing." },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <AudiencePage
      eyebrow="Architects"
      title="Specifications and detailing for heritage projects"
      lede="A trusted partner for architects working on listed buildings, conservation areas and high-end period refurbishments. Full technical packs, CAD details and CPD available."
      heroImage={img}
      painPoints={[
        { icon: FileText, title: "Conservation officer pushback", body: "Our slim units are accepted across 40+ London conservation areas — we provide precedent documentation." },
        { icon: Ruler, title: "Sightline-critical detailing", body: "8.3 mm units fit existing rebates, preserving historic profile drawings." },
        { icon: Award, title: "Performance evidence", body: "Independent test data, U-values and acoustic certificates for planning submissions." },
      ]}
      workflow={[
        { step: "01", title: "Spec consultation", body: "Early-stage advice on which glazing strategy fits your project and listing." },
        { step: "02", title: "Technical pack", body: "CAD details, NBS clauses, performance data and listed-building precedent material." },
        { step: "03", title: "Sample & survey", body: "Full-size sample units delivered to site for client and conservation officer review." },
        { step: "04", title: "Coordinated install", body: "Our project team works alongside your contractor or directly under your specification." },
      ]}
      ctaTitle="Request a technical pack"
    />
  ),
});
