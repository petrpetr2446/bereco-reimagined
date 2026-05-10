import { createFileRoute } from "@tanstack/react-router";
import { Building2, ClipboardList, Users } from "lucide-react";
import { AudiencePage } from "@/components/site/AudiencePage";
import img from "@/assets/case-3.jpg";

export const Route = createFileRoute("/managing-agents")({
  head: () => ({
    meta: [
      { title: "For Managing Agents — Vitrum Heritage" },
      { name: "description", content: "Block-wide and portfolio glazing programmes for prime central London residential agents." },
      { property: "og:title", content: "For Managing Agents" },
      { property: "og:description", content: "Compliant, repeatable glazing upgrades across managed blocks." },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <AudiencePage
      eyebrow="Managing Agents"
      title="Heritage glazing programmes across managed blocks and portfolios"
      lede="Phased, low-disruption upgrades to original timber windows across mansion blocks, period terraces and listed estates — with EPC compliance built in."
      heroImage={img}
      painPoints={[
        { icon: ClipboardList, title: "EPC 2026 compliance", body: "Whole-block phased programmes engineered to meet incoming minimum standards." },
        { icon: Users, title: "Resident coordination", body: "We liaise directly with leaseholders, communicating clearly at every stage." },
        { icon: Building2, title: "Section 20 ready", body: "Itemised schedules and pricing structured for major works consultation." },
      ]}
      workflow={[
        { step: "01", title: "Block survey", body: "Full audit of every window across the block, with condition photography." },
        { step: "02", title: "Phased proposal", body: "Costed, phased plan aligning with reserve fund or service charge cycles." },
        { step: "03", title: "Resident liaison", body: "Communications, visit-booking and snagging coordination handled by us." },
        { step: "04", title: "Reporting", body: "Per-unit completion reports for your portfolio records." },
      ]}
      ctaTitle="Request a portfolio meeting"
    />
  ),
});
