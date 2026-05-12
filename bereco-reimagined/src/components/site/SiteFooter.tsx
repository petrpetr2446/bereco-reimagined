import { Logo } from "./Logo";

const cols = [
  {
    title: "Windows",
    links: [
      { label: "Flush Casement", href: "/vacuum-windows/flush-casement" },
      { label: "Lipped Casement", href: "/vacuum-windows/lipped-casement" },
      { label: "Sliding Sash", href: "/vacuum-windows/sliding-sash" },
      { label: "Tilt & Turn", href: "/vacuum-windows/tilt-and-turn" },
      { label: "All Windows", href: "/vacuum-windows" },
    ],
  },
  {
    title: "Doors",
    links: [
      { label: "Entrance Doors", href: "/vacuum-doors/entrance" },
      { label: "French Doors", href: "/vacuum-doors/french" },
      { label: "Sliding Patio", href: "/vacuum-doors/sliding-patio" },
      { label: "Bi-fold Doors", href: "/vacuum-doors/bi-fold" },
      { label: "All Doors", href: "/vacuum-doors" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Case Studies", href: "/inspiration/case-studies" },
      { label: "Blog", href: "/inspiration/blog" },
      { label: "Gallery", href: "/inspiration/gallery" },
      { label: "Heritage & Listed", href: "/heritage-listed-buildings" },
      { label: "Heritage & Listed 2", href: "/heritage-listed-buildings-2" },
      { label: "Care & Advice", href: "/care-advice" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Homeowners", href: "/homeowners" },
      { label: "Trade & Professionals", href: "/trade-professionals" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-secondary text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-[1.2fr_3fr]">
          <div>
            <div className="[&_*]:!text-white/90">
              <Logo />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              Supply specialists in ultra-thin vacuum-glazed timber windows and doors for heritage, listed and period properties across the UK.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-primary">Showroom</p>
            <p className="mt-1 text-sm text-white/70">14 Marylebone Lane<br />London W1U 2NE</p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="text-sm font-semibold text-white">{c.title}</h4>
                <ul className="mt-4 space-y-2 text-sm">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="text-white/60 transition hover:text-primary">{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Vacuum Glazed Windows Limited. Registered in England & Wales.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
