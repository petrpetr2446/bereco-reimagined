import { Search, Phone, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";

type NavChild = { label: string; href: string; description?: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

const navItems: NavItem[] = [
  {
    label: "Vacuum Windows",
    href: "/vacuum-windows",
    children: [
      { label: "Flush Casement Windows", href: "/vacuum-windows/flush-casement" },
      { label: "Lipped Casement Windows", href: "/vacuum-windows/lipped-casement" },
      { label: "Sliding Sash Windows", href: "/vacuum-windows/sliding-sash" },
      { label: "Tilt & Turn Windows", href: "/vacuum-windows/tilt-and-turn" },
      // { label: "Window Ironmongery", href: "/vacuum-windows/ironmongery" },
      // { label: "Paint & Stain Finishes", href: "/vacuum-windows/finishes" },
      // { label: "Mouldings & Bars", href: "/vacuum-windows/mouldings-bars" },
      // { label: "Acoustic Range", href: "/vacuum-windows/acoustic" },
      // { label: "Our Certifications", href: "/certifications" },
    ],
  },
  {
    label: "Vacuum Doors",
    href: "/vacuum-doors",
    children: [
      { label: "Entrance Doors", href: "/vacuum-doors/entrance" },
      { label: "French Doors", href: "/vacuum-doors/french" },
      { label: "Sliding Patio Doors", href: "/vacuum-doors/sliding-patio" },
      { label: "Bi-fold Doors", href: "/vacuum-doors/bi-fold" },
      // { label: "Door Ironmongery", href: "/vacuum-doors/ironmongery" },
      // { label: "Paint & Stain Finishes", href: "/vacuum-doors/finishes" },
      // { label: "Mouldings & Bars", href: "/vacuum-doors/mouldings-bars" },
      // { label: "Acoustic Range", href: "/vacuum-doors/acoustic" },
      // { label: "Our Certifications", href: "/certifications" },
    ],
  },
  { label: "Heritage & Listed", href: "/heritage-listed-buildings" },
  { label: "Heritage & Listed 2", href: "/heritage-listed-buildings-2" },
  { label: "Homeowners", href: "/homeowners" },
  { label: "Trade & Professionals", href: "/trade-professionals" },
  {
    label: "Inspiration",
    href: "/inspiration",
    children: [
      { label: "Case Studies", href: "/inspiration/case-studies", description: "Real projects, real results" },
      { label: "Blog", href: "/inspiration/blog", description: "Guides, news and advice" },
      { label: "Gallery", href: "/inspiration/gallery", description: "Browse our project photography" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function DropdownMenu({ items }: { items: NavChild[] }) {
  return (
    <div className="pointer-events-none absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 bg-background pt-2 pb-2 px-2 opacity-0 shadow-xl transition-all duration-150 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="block px-4 py-3 text-sm font-medium text-secondary transition hover:bg-muted"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="relative z-40">
      {/* Top utility bar */}
      <div className="bg-topbar text-white text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 px-4 py-2.5">
          <Phone className="h-4 w-4 text-primary" strokeWidth={2.5} />
          <span className="opacity-80">Call us</span>
          <a href="tel:02038761234" className="font-semibold tracking-wide">020 3876 1234</a>
          <span className="opacity-60">or</span>
          <a href="/contact" className="rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground transition hover:bg-primary-deep">
            Get In Touch
          </a>
        </div>
      </div>

      {/* Main header row */}
      <div className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-3 items-center gap-4 px-4 py-5">
          <label className="hidden md:flex items-center gap-2 rounded-md bg-muted px-3 py-2 text-sm text-muted-foreground max-w-xs">
            <Search className="h-4 w-4" />
            <input type="text" placeholder="Search" className="w-full bg-transparent outline-none placeholder:text-muted-foreground" />
          </label>
          <div className="col-span-3 md:col-span-1 flex justify-center">
            <Logo />
          </div>
          <div className="hidden md:flex justify-end">
            <a href="/contact" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-deep">
              Request a Quote
            </a>
          </div>
        </div>

        {/* Main nav */}
        <nav className="mx-auto max-w-7xl px-4 pb-4">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[14px] font-bold text-foreground/80">
            {navItems.map((item) => (
              <li key={item.label} className="group relative">
                <a
                  href={item.href}
                  className="flex items-center gap-1 py-2 transition hover:text-primary-deep"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </a>
                {item.children && <DropdownMenu items={item.children} />}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Notice strip */}
      <div className="bg-cream">
        <p className="mx-auto max-w-7xl px-4 py-3 text-center text-sm font-medium text-secondary">
          Heritage-approved · 7mm ultra-thin vacuum units · 0.4 W/m²K U-value · EPC 2026 ready
        </p>
      </div>
    </header>
  );
}
