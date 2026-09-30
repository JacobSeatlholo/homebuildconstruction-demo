# Home Build Construction — Demo Trade Profile Site

A mobile-friendly one-page website for **Home Build Construction** (HBC Projects (Pty.) Ltd.), a building contractor based in Cape Town's South Peninsula, South Africa.

- **Live business info source:** [homebuildconstruction.co.za](https://www.homebuildconstruction.co.za/)
- **Showcases:** Kitchen renovations · Bathroom renovations · Timber-frame construction
- **Lead capture:** A "Request a Service" form that composes a structured enquiry and hands it off to **WhatsApp** — no backend required
- **Deployable on GitHub Pages** as a fully static site (included CI workflow)

> Demo note: business details (phone, email, copy) were taken from the company's public website. Project photos are real jobs supplied via BusinessHustle.

---

## Features

| Area | What's included |
| --- | --- |
| Trade profile | Hero with tagline, trust bar (20+ yrs, free quotes), about section, service-area chips |
| Services | Three rich cards — kitchens, bathrooms, timber-frame — each with feature lists and its own pre-filled WhatsApp CTA |
| Recent work | Responsive gallery grid with captions |
| Lead capture | Validated request form (name, phone, email, suburb, service, details) → opens WhatsApp with the lead pre-formatted |
| WhatsApp first enquiry | Header, hero, per-service, footer and floating buttons all deep-link to `wa.me/27678901516` with contextual pre-filled messages |
| Mobile-first | Sticky header with slide-out menu, ≥44px touch targets, single-column stacking, safe tap spacing |
| A11y & SEO | Semantic HTML, aria labels, alt text, OpenGraph/Twitter meta, `en-ZA` locale |

## How the WhatsApp lead flow works

1. The visitor fills in the short form (or taps any WhatsApp button).
2. The site builds a message like:

   ```
   Hi Home Build Construction! I'd like to request a service.

   *Service:* Kitchen renovation
   *Name:* Thandi Mokoena
   *Suburb:* Fish Hoek
   *Phone:* 082 123 4567
   *Email:* thandi@example.co.za

   *Project details:* 1980s kitchen, roughly 3x4m...
   ```

3. `https://wa.me/27678901516?text=…` opens in a new tab with everything pre-filled — the first enquiry lands straight in the business's WhatsApp chat, ready to qualify the lead.

To point enquiries at a different number, edit `whatsappNumber` in [`src/lib/site.ts`](src/lib/site.ts).

## Tech stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4 + shadcn/ui components
- Lucide icons, Archivo + Inter (next/font)
- No database, no API routes — 100% static-exportable

## Run locally

```bash
bun install          # or: npm install
bun run dev          # or: npm run dev
```

Open http://localhost:3000.

## Deploy to GitHub Pages

The repo ships with a ready-made workflow (`.github/workflows/deploy-pages.yml`) that builds a static export and publishes it on every push to `main`.

### One-time setup

1. Create a **new public GitHub repository** (e.g. `homebuild-demo`) — *do not* initialise it with a README.
2. Push this project:

   ```bash
   git init
   git add .
   git commit -m "Home Build Construction demo site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/homebuild-demo.git
   git push -u origin main
   ```

3. In the repo on GitHub, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
4. The workflow runs automatically. When it finishes, the site is live at:

   ```
   https://<your-username>.github.io/homebuild-demo/
   ```

### How the static export works

- `bun run build:static` (used by CI) runs `next build` with `EXPORT_MODE=1`, which switches `next.config.ts` to `output: "export"` → plain HTML/CSS/JS in `.next-export/` (the export uses its own build dir so it never clobbers a running dev server).
- CI sets `NEXT_PUBLIC_BASE_PATH=/<repo-name>` so assets resolve under the project-site subpath. If you deploy to a **user/org site** (a repo named `<user>.github.io`), set that env value to `""` in the workflow file instead.

## Customise it

| What | Where |
| --- | --- |
| Phone, WhatsApp number, email, hours, service areas | `src/lib/site.ts` |
| Service copy & features | `services` array in `src/lib/site.ts` |
| Page sections & order | `src/app/page.tsx` |
| Colours & fonts | `src/app/globals.css`, Tailwind classes (`stone` / `amber` palette) |
| Images | Real job photos live in `src/assets/` (bundled & content-hashed automatically). To swap or add: drop the file in, then update the imports/`galleryItems` in `src/lib/site.ts` |
| Logo & favicon | Logo file is `src/assets/hbc-logo.webp` (used in header, mobile menu & footer via `images.logo` in `src/lib/site.ts`). Favicon/app icons are `src/app/icon.png` & `src/app/apple-icon.png` — regenerate with `python3 scripts/make_icons.py` after replacing the logo |
| SEO metadata | `src/app/layout.tsx` |

## Suggested next steps for the real site

- Swap in more real project photos as jobs complete (biggest credibility win for a trade profile)
- Link a Google Business Profile and add a reviews section
- Add the real contact form backend (e.g. Formspree/Netlify Forms) if email leads are also wanted
- Register a custom domain and point it at GitHub Pages (Settings → Pages → Custom domain)

---

© HBC Projects (Pty.) Ltd. — demo build. Not affiliated with Squarespace site infrastructure; business details are public information.
