# Enhance Design Studio Web

Modern React + Vite + TypeScript site for Enhance Design Studio Pvt. Ltd., deployed on Vercel with a glassmorphic UI and video hero.

## Tech Stack
- Vite, React, TypeScript
- Tailwind-style utility classes and shadcn/ui components
- Framer Motion for animations
- Vercel for hosting and HTTPS

## Getting Started
1. Install dependencies:
   - `npm install`
2. Run locally:
   - `npm run dev`
3. Build:
   - `npm run build`
4. Preview build:
   - `npm run preview`

## Key Features
- Hero video with Service Ticker at bottom
- Glassy floating navbar and mobile menu
- Single “Under Construction” overlay during maintenance with fully hidden content
- Coming Soon page with cinematic background, contact details, and launch banner
- Contact page styled as a glassy card (no form, no footer)

## Maintenance Mode
The site can show a single Under Construction section when maintenance is on. It reads either environment flag:
- `VITE_COMING_SOON=true` or
- `NEXT_PUBLIC_MAINTENANCE_MODE=true`

When enabled:
- Homepage renders Hero + one Under Construction block
- All other sections remain hidden

## Environment Variables
Do not commit secrets. Create a `.env` or `.env.local` for local development:
```
VITE_COMING_SOON=true|false
NEXT_PUBLIC_MAINTENANCE_MODE=true|false
```
Add any service keys here and configure production variables in Vercel Project Settings → Environment Variables.

## Deployment (Vercel)
- Connect the GitHub repository to Vercel
- Production branch: `main`
- Vercel auto-provisions HTTPS certificates
- SPA routes are handled via `vercel.json` rewrites

## Custom Domain
Keep Zoho Mail records as-is. Point web DNS to Vercel:
- A record: `@` → `76.76.21.21`
- CNAME: `www` → `cname.vercel-dns.com`
Add both domains in Vercel Project → Settings → Domains and set the primary.

## Notable Files
- `src/components/Hero.tsx` — homepage hero video
- `src/components/ServiceTicker.tsx` — scrolling services marquee
- `src/components/UnderConstructionOverlay.tsx` — maintenance overlay
- `src/pages/Index.tsx` — homepage layout (single overlay when maintenance is on)
- `src/pages/ComingSoon.tsx` — coming soon experience
- `src/components/Contact.tsx` — glassy contact card
- `vercel.json` — SPA fallback rewrites

## Commit & Branch Flow
- Use feature branches and Pull Requests
- Example branch: `feature/site-updates`
- Keep commits descriptive and focused

## License
Proprietary © Enhance Design Studio Pvt. Ltd.
