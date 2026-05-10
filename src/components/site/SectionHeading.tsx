export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  inverted = false,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  inverted?: boolean;
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  const titleColor = inverted ? "text-white" : "text-secondary";
  const ledeColor = inverted ? "text-white/75" : "text-muted-foreground";
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      {eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-deep">{eyebrow}</p>}
      <h2 className={`font-display text-4xl md:text-5xl ${titleColor}`}>{title}</h2>
      {lede && <p className={`mt-5 text-lg leading-relaxed ${ledeColor}`}>{lede}</p>}
    </div>
  );
}
