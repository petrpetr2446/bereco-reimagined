import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp, Award, Building2 } from "lucide-react";
import { AudiencePage } from "@/components/site/AudiencePage";
import img from "@/assets/case-1.jpg";

export const Route = createFileRoute("/developers")({
  head: () => ({
    meta: [
      { title: "For Developers — Vitrum Heritage" },
      { name: "description", content: "Heritage glazing for boutique developers restoring period London residential." },
      { property: "og:title", content: "For Developers" },
      { property: "og:description", content: "Period restoration glazing that protects sales values." },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <AudiencePage
      eyebrow="Developers"
      title="Period restorations that command prime central London values"
      lede="Boutique developers trust us to deliver the heritage glazing that defines a successful period restoration — on time, on budget, and to spec."
      heroImage={img}
      painPoints={[
        { icon: TrendingUp, title: "Protecting sales values", body: "Original windows, restored to modern performance, are a defining premium feature for buyers." },
        { icon: Award, title: "EPC at handover", body: "Designed-in compliance with current and incoming MEES / EPC standards." },
        { icon: Building2, title: "Conservation consents", body: "We support your planning consultant with technical evidence and precedent." },
      ]}
      workflow={[
        { step: "01", title: "Pre-purchase advice", body: "Indicative scope and cost during your due-diligence phase." },
        { step: "02", title: "Design & consents", body: "Coordinated with your architect through planning and listed-building consent." },
        { step: "03", title: "Programmed install", body: "Sequenced into your build programme with named project lead." },
        { step: "04", title: "Show-home ready", body: "Snagged and finished for marketing photography and viewings." },
      ]}
      ctaTitle="Talk about your project"
    />
  ),
});
