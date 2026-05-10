import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/site/PageLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/cookies")({
  head: () => ({ meta: [{ title: "Cookies — Vitrum Heritage" }, { name: "description", content: "Cookie policy for the Vitrum Heritage website." }] }),
  component: () => (
    <PageLayout>
      <PageHero eyebrow="Legal" title="Cookie Policy" crumbs={[{ label: "Cookies" }]} />
      <section className="py-20">
        <article className="mx-auto max-w-3xl space-y-5 px-4 text-secondary/85">
          <p>We use a small number of cookies to make this site work and understand how it's used.</p>
          <h2 className="pt-4 font-display text-2xl text-secondary">Strictly necessary</h2>
          <p>Required for core features such as page navigation. Cannot be disabled.</p>
          <h2 className="pt-4 font-display text-2xl text-secondary">Analytics</h2>
          <p>Anonymous usage data we use to improve content. You can opt out via your browser settings.</p>
          <p>Contact privacy@vitrum.co.uk with any questions.</p>
        </article>
      </section>
    </PageLayout>
  ),
});
