import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy — Vitrum Heritage" }, { name: "description", content: "How Vitrum Heritage Glazing handles your personal data." }] }),
  component: () => (
    <PageLayout>
      <PageHero eyebrow="Legal" title="Privacy Policy" crumbs={[{ label: "Privacy" }]} />
      <section className="py-20">
        <article className="mx-auto max-w-3xl space-y-5 px-4 text-secondary/85">
          <p>This privacy policy explains how Vitrum Heritage Glazing Ltd ("we", "us") collects, uses and protects information you share with us.</p>
          <h2 className="pt-4 font-display text-2xl text-secondary">Information we collect</h2>
          <p>We collect contact details you provide via our forms and call line — name, email, phone, postcode and property details — solely to respond to your enquiry and provide our services.</p>
          <h2 className="pt-4 font-display text-2xl text-secondary">How we use it</h2>
          <p>To respond to enquiries, schedule surveys, prepare quotations, and provide ongoing aftercare. We never sell your data and only share it with third parties (e.g. our installers) where strictly necessary.</p>
          <h2 className="pt-4 font-display text-2xl text-secondary">Your rights</h2>
          <p>You may request access to, correction of, or deletion of your personal data at any time by emailing privacy@vitrum.co.uk.</p>
          <h2 className="pt-4 font-display text-2xl text-secondary">Cookies</h2>
          <p>See our <a href="/cookies" className="text-primary-deep underline">cookie policy</a> for details.</p>
        </article>
      </section>
    </PageLayout>
  ),
});
