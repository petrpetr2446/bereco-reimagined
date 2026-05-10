import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
