import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms — Vitrum Heritage" }, { name: "description", content: "Terms of use for the Vitrum Heritage website and services." }] }),
  component: () => (
    <PageLayout>
      <PageHero eyebrow="Legal" title="Terms of Use" crumbs={[{ label: "Terms" }]} />
      <section className="py-20">
        <article className="mx-auto max-w-3xl space-y-5 px-4 text-secondary/85">
          <p>By using this website you accept the following terms. Vitrum Heritage Glazing Ltd is registered in England & Wales. Content on this website is provided for general information and does not constitute professional advice or a binding offer.</p>
          <h2 className="pt-4 font-display text-2xl text-secondary">Quotations & contracts</h2>
          <p>Any work we undertake is subject to a separate written contract with terms specific to your project, signed before commencement.</p>
          <h2 className="pt-4 font-display text-2xl text-secondary">Liability</h2>
          <p>Our liability under any contract is limited to the value of that contract. Nothing in these terms limits liability for fraud or for matters which cannot be limited under English law.</p>
        </article>
      </section>
    </PageLayout>
  ),
});
