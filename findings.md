# findings.md — Research, Discoveries, Constraints

## Codebase Scan (2026-05-10)

### Stack
- TanStack Start v1.167 + TanStack Router v1.168 (file-based routing)
- React 19.2, TypeScript 5.8
- Tailwind CSS v4 (via `@tailwindcss/vite`) — config lives entirely in `styles.css` via `@theme inline`
- Cloudflare Workers deployment via `@cloudflare/vite-plugin` + `wrangler.jsonc`
- shadcn/ui full component library installed (Radix primitives)
- No database layer yet
- No authentication layer yet

### Current Routes
- `/` → `src/routes/index.tsx` — Full marketing landing page (Home)

### Key Components
- `SiteHeader` — top utility bar + logo + nav + cream notice strip
- `SiteFooter` — 4-column link grid + address + legal
- `Logo` — `src/components/site/Logo.tsx`

### Assets
- `hero-homes.jpg`, `install.jpg`, `case-1.jpg`, `case-2.jpg`, `case-3.jpg`

### Design Constraints
- Fonts loaded externally (Fraunces, Inter) — assumed via CDN or `__root.tsx`
- All colors in oklch; no hex allowed
- Pill radius (`border-radius: 9999px`) as default

### Bereco.co.uk Structure (Reference Site to Mirror)
Fetched 2026-05-10. Key page architecture:

| Section | Sub-pages |
|---|---|
| Vacuum Windows | Flush Casement, Lipped Casement, Sliding Sash, Tilt & Turn |
| Vacuum Doors | Entrance, French, Sliding Patio, Bi-fold |
| Homeowners | Removal/replacement, supply options, consultations, install areas |
| Trade & Professionals | Resources, webinars, CPD training |
| Inspiration | Case studies, blog, virtual showroom, gallery, brochures |
| About | Company story, sustainability, certifications |
| Care & Advice | Guides, warranty registration, claims support |
| Contact | Direct engagement, consultation booking |

Performance specs on Bereco: double-glazed U-values from 1.3 W/m²K, triple from 0.8 W/m²K, acoustic up to 42dB, 10-year warranty, 60-year lifespan, 8-week supply-only lead time.

### Client Business Parameters (Vacuum Glazed Windows Limited)
- **Company:** Vacuum Glazed Windows Limited
- **Model:** Supply-only, 20–40% margin distribution
- **Product:** Ultra-thin (7mm) vacuum-glazed timber windows & doors
- **Differentiator:** Exact Match Domain + heritage/listed building specialisation
- **Supplier pipeline:** European manufacturers (Lithuania, Poland)
- **Key USP over competitors:** Vacuum glazing achieves brick-wall thermal performance in 7mm — where standard double/triple glazing fails heritage requirements

### Constraints Discovered
- No `.env` file yet — no integrations planned yet
- No `tools/` or `architecture/` directories yet — keep simple for Phase 1
- Brand name "Vitrum" is placeholder — real brand = Vacuum Glazed Windows Limited
- All technical specs (U-values, dB, thickness) must remain accurate — never invent figures
