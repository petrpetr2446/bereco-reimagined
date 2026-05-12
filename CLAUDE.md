# claude.md — Project Constitution
> Law. Update only when a schema changes, a rule is added, or architecture is modified.

## Project Identity
- **Site name:** Vacuum Glazed Windows Ltd
- **Mission:** Heritage-sensitive vacuum glazing for period London homes
- **Repo root:** `bereco-reimagined/`
- **Stack:** TanStack Start · React 19 · TanStack Router v1 · Tailwind CSS v4 · TypeScript · Cloudflare Workers (Wrangler)
- **UI library:** shadcn/ui (Radix primitives)
- **Deployment target:** Cloudflare Pages/Workers via `wrangler.jsonc`

## Design System (immutable until updated here)
| Token | Value | Usage |
|---|---|---|
| `--primary` | sage green `oklch(0.68 0.07 135)` | CTAs, accents, icons |
| `--primary-deep` | deep sage `oklch(0.55 0.08 138)` | Hover states |
| `--secondary` | near-black `oklch(0.32 0.015 150)` | Dark sections, headings |
| `--cream` | warm cream `oklch(0.96 0.035 90)` | Alternating section backgrounds |
| `--topbar` | same as secondary | Utility bar |
| `--font-display` | Fraunces → Georgia serif | h1–h4 |
| `--font-sans` | Inter → system-ui | Body text |
| `--radius` | 9999px | Pill/rounded-full default |

## File Structure
```
Antigravity - website/
├── claude.md            ← this file (Project Constitution)
├── gemini.md            ← Data Schema & Architecture Rules
├── task_plan.md         ← Phases, goals, checklists (Blueprint)
├── findings.md          ← Research, discoveries, constraints
├── progress.md          ← Done, errors, tests, results
├── .env                 ← API Keys (Link phase)
├── architecture/        ← Layer 1: SOPs
├── tools/               ← Layer 3: Python scripts
├── .tmp/                ← Ephemeral intermediates
└── bereco-reimagined/   ← The actual website codebase
    ├── src/
    │   ├── routes/      ← TanStack Router file-based routes
    │   ├── components/
    │   │   ├── site/    ← SiteHeader, SiteFooter, Logo
    │   │   └── ui/      ← shadcn components
    │   ├── assets/      ← Images (hero, install, cases)
    │   └── styles.css   ← Design system + Tailwind config
    ├── vite.config.ts
    └── wrangler.jsonc
```

## Behavioral Rules
1. **Data-First:** No tool or script is written before its Input/Output schema is defined in `gemini.md`.
2. **Layer separation:** Navigation (routing, decisions) lives in the app; deterministic side-effects live in `tools/` Python scripts.
3. **No guessing:** If business logic is ambiguous, halt and ask.
4. **Self-annealing:** On any tool failure — read the stack trace, patch the script, update the relevant `architecture/*.md` SOP.
5. **Payload = done:** A feature is only "complete" when the output reaches its final destination (cloud, UI, database).

## Data Schema
> To be populated after Discovery Questions are answered.

## Architecture Invariants
> To be populated after Blueprint is approved.

## Maintenance Log
| Date | Change | Author |
|---|---|---|
| 2026-05-10 | Initial constitution created | System Pilot |
