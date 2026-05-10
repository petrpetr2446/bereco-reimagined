## Vitrum Heritage Glazing — Full Site Build Plan

Goal: expand the current homepage into a complete multi-route marketing site that mirrors the bereco.co.uk structure (top utility bar, centered logo + nav, deep section pages, case studies, trade audience pages, contact/survey).

### 1. Route map (TanStack file-based)

Each gets its own `head()` with unique title/description/og tags.

```text
/                         Home (already built — minor polish)
/vacuum-glazing           Hero product: what it is, U-values, cross-section diagram, FAQs
/sash-windows             Slim sash upgrade service
/casement-windows         Casement upgrade service
/secondary-glazing        Alternative for the strictest listed buildings
/draughtproofing          Add-on service
/process                  Survey → Design → Install → Aftercare timeline
/performance              Tech data: U-values, acoustic dB, condensation, certifications
/epc-2026                 Cornerstone SEO page on October 2026 EPC standards
/homeowners               Audience page
/architects               Audience page (specs, CAD downloads, CPD)
/interior-designers       Audience page
/managing-agents          Audience page (block/portfolio rollouts)
/developers               Audience page (boutique residential)
/case-studies             Index grid
/case-studies/$slug       Case study detail (hero, brief, before/after, spec, quote)
/about                    Company story, team, workshop, accreditations
/showroom                 Marylebone showroom visit info + map
/contact                  General contact
/survey                   Book a free survey form (primary CTA target)
/resources                Hub: brochure, EPC guide, listed building advice
/resources/$slug          Article/guide detail
/privacy, /terms, /cookies  Legal
```

### 2. Shared components to add

```text
src/components/site/
  TopBar.tsx              (extracted from SiteHeader)
  MainNav.tsx             (with dropdown mega-menu for Products & Audiences)
  MobileNav.tsx           (sheet drawer)
  Breadcrumbs.tsx
  SectionHeading.tsx      (eyebrow + display headline + lede)
  StatBlock.tsx
  RangeCard.tsx           (lift from index)
  CaseStudyCard.tsx
  QuoteBlock.tsx          (testimonial w/ portrait)
  LogoStrip.tsx           (architects/agents logos)
  AccreditationBar.tsx    (FENSA, BFRC, listed-building bodies)
  CtaBand.tsx             (cream survey CTA — reused on every page)
  Faq.tsx                 (Radix accordion)
  SpecTable.tsx           (U-value/dB/thickness rows)
  SurveyForm.tsx          (multi-step: property type, postcode, windows, contact)
  ContactForm.tsx
  NewsletterSignup.tsx    (footer)
  ImageCompare.tsx        (before/after slider for case studies)
```

### 3. Page templates (sections per page)

- **Product pages** (vacuum-glazing, sash, casement, secondary, draught): hero with product photo · "What it is" intro · key benefits 3-up · cutaway/diagram · spec table · gallery · related case studies · FAQ · CTA band.
- **Audience pages**: tailored hero (e.g. "For architects") · pain-points 3-up · how we work with you · downloadables (specs, CAD, CPD) · featured projects · CTA.
- **Case study detail**: cover image · meta strip (location, period, window count, U-value achieved) · narrative · before/after slider · spec table · architect/owner quote · next case studies.
- **EPC 2026**: long-form SEO page with TOC, regulation summary, what it means for listed buildings, how vacuum glazing complies, comparison table vs double/secondary, CTA.
- **Process**: vertical timeline with icons + photos.
- **About**: founders, workshop in [city], accreditations, sustainability statement.
- **Survey/Contact**: form + showroom info + phone + map embed.

### 4. Design system additions (`src/styles.css`)

- Add `--surface-warm` (light cream variant) and `--ink` (deeper text) tokens.
- Add `shadow-soft` and `shadow-elevated` custom shadows for cards.
- Add `--gradient-hero` (sage→deep-sage) for section headers.
- Tighten heading scale (display-1/2/3 utility classes via Tailwind plugin or component).
- Add prose styles for resource/article pages.

### 5. Header upgrade

- Convert flat nav into mega-menu: "Glazing" (4 product pages), "Who we help" (5 audiences), "Inspiration" (case studies, resources), "About" (about, process, showroom, contact).
- Mobile: hamburger → slide-in drawer with collapsible sections.
- Sticky on scroll with shrink animation.

### 6. Forms & data

No backend yet — forms POST to a TanStack server function (`src/lib/leads.functions.ts`) that logs and returns success. Wire to Lovable Cloud (table `leads`) in a follow-up step when you're ready; I'll flag it then rather than enabling Cloud now.

### 7. Assets to generate

- 4 product hero images (vacuum glass macro, sash window, casement, secondary).
- 6 case study covers (Kensington townhouse, Chelsea mews, Notting Hill stucco, Holland Park villa, Fulham terrace, Georgian Bloomsbury).
- 1 cutaway diagram of vacuum glazing (illustration).
- 1 process / workshop photo.
- 1 team / founder portrait placeholder.
- OG share image (1200×630) per top route.

### 8. SEO & polish

- Per-route `head()` with unique title/description/og.
- JSON-LD: `LocalBusiness` on home/contact, `Article` on resources, `FAQPage` on product pages.
- `sitemap.xml` + `robots.txt` route handlers.
- Image `alt`, lazy loading, single H1 per page.
- 404 already handled in `__root.tsx`.

### 9. Suggested build order (so you can review in stages)

1. **Foundation** — extract TopBar/MainNav/MobileNav, add mega-menu, CtaBand, SectionHeading, Faq, SpecTable, Breadcrumbs.
2. **Product pages** — `/vacuum-glazing`, `/sash-windows`, `/casement-windows`, `/secondary-glazing`, `/draughtproofing` + generate product imagery.
3. **Trust pages** — `/process`, `/performance`, `/epc-2026`, `/about`, `/showroom`.
4. **Audience pages** — homeowners, architects, interior designers, managing agents, developers.
5. **Case studies** — index + 6 detail pages with before/after slider + imagery.
6. **Conversion** — `/survey` (multi-step form), `/contact`, lead server function, newsletter.
7. **Resources & legal** — resources hub + 3 starter articles, privacy/terms/cookies.
8. **SEO pass** — JSON-LD, sitemap, robots, OG images, Lighthouse polish.

I'd recommend tackling stages 1–2 in the next turn so you can see the structural pattern before we mass-produce the rest. Approve to start with stage 1 + 2, or tell me which slice to do first.