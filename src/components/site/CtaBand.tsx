import { Link } from "@tanstack/react-router";

export function CtaBand({
  title = "Book a free in-home survey",
  body = "Our heritage glazing specialists will visit your property, assess suitability and provide indicative pricing — no obligation.",
  primary = { label: "Book a survey", to: "/survey" },
  secondary,
}: {
  title?: string;
  body?: string;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
}) {
  return (
    <section className="bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-20 text-center md:flex-row md:text-left">
        <div className="flex-1">
          <h2 className="font-display text-3xl text-secondary md:text-4xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-secondary/75">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to={primary.to as any} className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-deep">
            {primary.label}
          </Link>
          {secondary && (
            <Link to={secondary.to as any} className="rounded-full border border-secondary/30 px-7 py-3.5 text-sm font-semibold text-secondary transition hover:bg-secondary hover:text-white">
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
