# Atelier - Architecture & Interior Design Studio

Atelier is an editorial digital presence for a high-end architecture and interior design studio. Built with Next.js 14, TypeScript, Tailwind CSS, Sanity CMS, GSAP Flip & ScrollTrigger, Lenis smooth scrolling, and a lightweight Express + SQLite backend.

---

## Architectural Principles & Editorial Restraint

- **Editorial Rhythm**: Asymmetric layout grids (7/12, 5/12, 6/12, 6/12 rhythm) that break away from generic 2x2 templates.
- **Physical Palette**: Warm paper-white canvas (`#f7f5f1`), near-black ink (`#201e1a`), deep charcoal (`#1c1a17`), and a restrained terracotta clay accent (`#a8532f`, `#8a3f22`) used solely for active states and typography emphasis.
- **Tectonic Typography**: Optical size variable serif `Newsreader` for display titles and pull quotes paired with legible `Public Sans` for navigation and body copy.
- **Considered Motion**: GSAP clip-path wipe bottom-to-top reveals, GSAP Flip shared-element transition between gallery cards and project detail hero images, and full compliance with `prefers-reduced-motion`.
- **Three-Layer Data Flow**: Server Component Page → Centralized GROQ Query & Typed Fetch Wrapper → Sanity Client. No component ever calls Sanity directly.

---



## Accessibility & Contrast Mathematics

All color combinations have been mathematically verified against the official WCAG 2.1 relative-luminance formula.

- **Canvas Background (**`--paper`**,** `#f7f5f1`**)**:
- **Accent Text (**`--clay-text`**,** `#8a3f22`**)**:
- **Interactive Clay (**`--clay`**,** `#a8532f`**)**:
- **Focus Management**: Following GSAP Flip page transitions from grid card to detail hero, keyboard and screen reader focus is automatically handed over to the detail page's `<h1>` (`#project-heading`), preventing focus stranding.

---



## Sitemap

- `/` - Homepage: Studio introduction, pull-quote statement, asymmetric featured projects, dark practice strip, contact CTA.
- `/work` - Work Portfolio: Asymmetric project grid with client-side category filtering (`All`, `Residential`, `Commercial`, `Interior`, `Landscape`).
- `/work/[slug]` - Project Detail: Deep editorial narrative with full-bleed hero, summary, Portable Text body, alternating rhythm gallery, and next-project sequence navigation.
- `/studio` - Studio & Philosophy: Ethos narrative and team grid featuring bespoke editorial portraits.
- `/contact` - Consultation Enquiries: Direct studio coordinates and accessible project brief form connected to the SQLite backend.

---

---



## Getting Started



### 1. Frontend (`atelier-frontend`)

```bash
cd atelier-frontend
npm install
npm run dev
```

Visit `http://localhost:3000`. The frontend includes a centralized fallback data provider (`src/sanity/seedData.ts`) so the entire application builds and runs out-of-the-box before connecting production Sanity credentials.

To connect live Sanity:
Create `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_API_URL=http://localhost:3001
```



### 2. Sanity Studio (`atelier-studio`)

```bash
cd atelier-studio
npm install
npm run dev
```

- Access Sanity Studio at `http://localhost:3333`.
- Validate seed data and required alt text constraints: `npm run seed`.



### 3. Express SQLite Server (`server`)

```bash
cd server
npm install
npm run dev
```

Runs on `http://localhost:3001`. Enquiries submitted via the `/contact` form are validated and inserted into `atelier.db`.

---

