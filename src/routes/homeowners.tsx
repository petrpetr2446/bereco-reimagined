import { createFileRoute } from "@tanstack/react-router";
import { Home, Wallet, ShieldCheck } from "lucide-react";
import { AudiencePage } from "@/components/site/AudiencePage";
import img from "@/assets/hero-homes.jpg";

export const Route = createFileRoute("/homeowners")({
  head: () => ({
    meta: [
      { title: "For Homeowners — Vitrum Heritage" },
      { name: "description", content: "Warmer, quieter, more efficient period homes — with original windows preserved." },
      { property: "og:title", content: "For Homeowners" },
      { property: "og:description", content: "Heritage glazing for owners of period London properties." },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <AudiencePage
      eyebrow="Homeowners"
      title="A warmer, quieter home — without losing what makes it yours"
      lede="If you live in a Victorian, Georgian or Edwardian home, our heritage glazing programme transforms comfort and efficiency while preserving every original detail."
      heroImage={img}
      painPoints={[
        { icon: Home, title: "Cold rooms in winter", body: "Original single glazing leaks heat. Vacuum glazing closes the gap to modern double glazing — and beyond." },
        { icon: Wallet, title: "Rising energy bills", body: "Clients typically see 30–40% reduction in heating demand after a whole-house upgrade." },
        { icon: ShieldCheck, title: "Listed-building stress", body: "We handle conservation paperwork, surveys and consents on your behalf." },
      ]}
      workflow={[
        { step: "01", title: "Free in-home survey", body: "We measure, photograph and assess every window — and discuss your priorities." },
        { step: "02", title: "Design & quotation", body: "A clear specification with indicative pricing, warranty and timeline." },
        { step: "03", title: "Workshop restoration", body: "Sashes are restored off-site by our in-house joiners while you continue living in your home." },
        { step: "04", title: "Install & aftercare", body: "Most properties installed in 3–10 days, with a 5-year aftercare visit included." },
      ]}
      ctaTitle="Book a free home survey"
    />
  ),
});
