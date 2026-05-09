import { Search, Phone } from "lucide-react";
import { Logo } from "./Logo";

const navItems = [
  "Vacuum Glazing",
  "Sash Windows",
  "Casement Windows",
  "Homeowners",
  "Architects & Trade",
  "Case Studies",
  "About",
  "Contact",
];

export function SiteHeader() {
  return (
    <header className="relative">
      {/* Top utility bar */}
      <div className="bg-topbar text-white text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 px-4 py-2.5">
          <Phone className="h-4 w-4 text-primary" strokeWidth={2.5} />
          <span className="opacity-80">Call us</span>
          <a href="tel:02038761234" className="font-semibold tracking-wide">020 3876 1234</a>
          <span className="opacity-60">or</span>
          <a href="#contact" className="rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground transition hover:bg-primary-deep">
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
            <a href="#survey" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary-deep">
              Book A Free Survey
            </a>
          </div>
        </div>

        {/* Main nav */}
        <nav className="mx-auto max-w-7xl px-4 pb-4">
          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-[15px] font-medium text-foreground/80">
            {navItems.map((item) => (
              <li key={item}>
                <a href="#" className="relative py-2 transition hover:text-primary-deep">
                  {item}
                </a>
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
    </header>
  );
}
