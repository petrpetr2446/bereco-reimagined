import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search, Phone, Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";

type NavItem = { label: string; to?: string; children?: { label: string; to: string; desc?: string }[] };

const navItems: NavItem[] = [
  {
    label: "Glazing",
    children: [
      { label: "Vacuum Glazing", to: "/vacuum-glazing", desc: "Our flagship slim insulated glass" },
      { label: "Sash Windows", to: "/sash-windows", desc: "Heritage sash upgrades" },
      { label: "Casement Windows", to: "/casement-windows", desc: "Restored casements" },
      { label: "Secondary Glazing", to: "/secondary-glazing", desc: "Discreet inner panes" },
      { label: "Draughtproofing", to: "/draughtproofing", desc: "Brush-seal systems" },
    ],
  },
  {
    label: "Who we help",
    children: [
      { label: "Homeowners", to: "/homeowners" },
      { label: "Architects", to: "/architects" },
      { label: "Interior Designers", to: "/interior-designers" },
      { label: "Managing Agents", to: "/managing-agents" },
      { label: "Developers", to: "/developers" },
    ],
  },
  {
    label: "Inspiration",
    children: [
      { label: "Case Studies", to: "/case-studies" },
      { label: "Performance Data", to: "/performance" },
      { label: "EPC 2026 Guide", to: "/epc-2026" },
      { label: "Resources", to: "/resources" },
    ],
  },
  {
    label: "About",
    children: [
      { label: "Our Story", to: "/about" },
      { label: "Process", to: "/process" },
      { label: "Showroom", to: "/showroom" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header className="relative z-40">
      {/* Top utility bar */}
      <div className="bg-topbar text-white text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2.5">
          <Phone className="h-4 w-4 text-primary" strokeWidth={2.5} />
          <span className="hidden sm:inline opacity-80">Call us</span>
          <a href="tel:02038761234" className="font-semibold tracking-wide">020 3876 1234</a>
          <span className="hidden sm:inline opacity-60">or</span>
          <Link to="/contact" className="rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground transition hover:bg-primary-deep">
            Get In Touch
          </Link>
        </div>
      </div>

      {/* Main header row */}
      <div className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-4 px-4 py-5 md:grid-cols-3">
          <label className="hidden md:flex items-center gap-2 rounded-md bg-muted px-3 py-2 text-sm text-muted-foreground max-w-xs">
            <Search className="h-4 w-4" />
            <input type="text" placeholder="Search" className="w-full bg-transparent outline-none placeholder:text-muted-foreground" />
          </label>
          <div className="flex justify-start md:justify-center">
            <Logo />
          </div>
          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              className="md:hidden rounded-md p-2 text-secondary"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <Link to="/survey" className="hidden md:inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-deep">
              Book A Free Survey
            </Link>
          </div>
        </div>

        {/* Main nav (desktop) */}
        <nav className="mx-auto hidden max-w-7xl px-4 pb-4 md:block">
          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-[15px] font-medium text-foreground/80">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button className="flex items-center gap-1 py-2 transition hover:text-primary-deep">
                  {item.label}
                  {item.children && <ChevronDown className="h-3.5 w-3.5" />}
                </button>
                {item.children && openMenu === item.label && (
                  <div className="absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-2">
                    <div className="rounded-2xl border border-border bg-background p-3 shadow-xl ring-1 ring-black/5">
                      {item.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to as any}
                          className="block rounded-lg px-4 py-2.5 text-sm transition hover:bg-cream"
                          onClick={() => setOpenMenu(null)}
                        >
                          <div className="font-semibold text-secondary">{c.label}</div>
                          {c.desc && <div className="mt-0.5 text-xs text-muted-foreground">{c.desc}</div>}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Cream notice strip */}
      <div className="bg-cream">
        <p className="mx-auto max-w-7xl px-4 py-3 text-center text-sm font-medium text-secondary">
          Heritage-approved · 1.0 W/m²K U-values · Ready for the October 2026 EPC standards
        </p>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 max-w-full overflow-auto bg-background p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="font-display text-xl text-secondary">Menu</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="p-2"><X className="h-5 w-5" /></button>
            </div>
            <Link to="/survey" onClick={() => setMobileOpen(false)} className="mt-6 block rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground">
              Book a free survey
            </Link>
            <div className="mt-6 space-y-6">
              {navItems.map((item) => (
                <div key={item.label}>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary-deep">{item.label}</p>
                  <ul className="space-y-1">
                    {item.children?.map((c) => (
                      <li key={c.to}>
                        <Link to={c.to as any} onClick={() => setMobileOpen(false)} className="block py-1.5 text-secondary hover:text-primary-deep">
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
