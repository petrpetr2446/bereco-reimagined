import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function SiteFooter() {
  const cols: { title: string; links: { label: string; to: string }[] }[] = [
    {
      title: "Glazing",
      links: [
        { label: "Vacuum Glazing", to: "/vacuum-glazing" },
        { label: "Sash Windows", to: "/sash-windows" },
        { label: "Casement Windows", to: "/casement-windows" },
        { label: "Secondary Glazing", to: "/secondary-glazing" },
        { label: "Draughtproofing", to: "/draughtproofing" },
      ],
    },
    {
      title: "Who we help",
      links: [
        { label: "Homeowners", to: "/homeowners" },
        { label: "Architects", to: "/architects" },
        { label: "Interior Designers", to: "/interior-designers" },
        { label: "Managing Agents", to: "/managing-agents" },
        { label: "Developers", to: "/developers" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Case Studies", to: "/case-studies" },
        { label: "EPC 2026 Guide", to: "/epc-2026" },
        { label: "Performance Data", to: "/performance" },
        { label: "Process", to: "/process" },
        { label: "Resources", to: "/resources" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", to: "/about" },
        { label: "Showroom", to: "/showroom" },
        { label: "Contact", to: "/contact" },
        { label: "Survey", to: "/survey" },
        { label: "Privacy", to: "/privacy" },
      ],
    },
  ];

  return (
    <footer className="bg-secondary text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-[1.2fr_3fr]">
          <div>
            <div className="[&_*]:!text-white/90">
              <Logo />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              Heritage-sensitive vacuum glazing for period homes across London. Warmer, quieter, more efficient — without changing the character of your building.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-primary">Showroom</p>
            <p className="mt-1 text-sm text-white/70">14 Marylebone Lane<br/>London W1U 2NE</p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="text-sm font-semibold text-white">{c.title}</h4>
                <ul className="mt-4 space-y-2 text-sm">
                  {c.links.map((l) => (
                    <li key={l.to}><Link to={l.to as any} className="text-white/60 transition hover:text-primary">{l.label}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Vitrum Heritage Glazing Ltd. Registered in England & Wales.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white">Privacy</Link>
            <Link to="/terms" className="hover:text-white">Terms</Link>
            <Link to="/cookies" className="hover:text-white">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
