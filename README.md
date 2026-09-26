# Basera Living

Furniture & interiors storefront. Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion.

## Run it

Requires **Node 18.18 or newer** (`node -v` to check).

```bash
npm install
npm run dev        # http://localhost:3000
```

Six runtime dependencies, about 127 packages in total. If `npm install` ever
fails, delete `node_modules` and `package-lock.json` and try again before
anything else.

Build for production:

```bash
npm run build && npm start
```

## Content: two modes

The site runs in either mode with no code changes.

**Mode 1 — no database (default).** Products, timbers and projects live in typed
arrays in `lib/`. Edit the file, push, Vercel redeploys. Free forever, nothing to
maintain, and you are a developer so this is genuinely fine to start with.

**Mode 2 — Sanity CMS.** Set one environment variable and the same pages read
from a hosted admin panel instead. Non-developers can add products and upload
photographs without touching code. The Studio itself is a **separate project** —
see `sanity-studio/README.md` — so the website's own dependencies stay small
either way.

`lib/content.ts` decides which is used. If Sanity returns nothing — not
configured, offline, empty dataset — it falls back to the local arrays silently.
The site cannot break because of the CMS.

### Turning the CMS on

Full steps are in `sanity-studio/README.md`. In short: create a free project at
<https://sanity.io/manage>, set up the Studio as a separate folder, then paste the
Project ID into `.env.local` here.

The account that creates the project is the administrator. Colleagues added as
**editors** get the same Studio and can add products, but cannot touch schemas,
billing or user access. That is your admin/user split with no auth code written.

Free tier at time of writing: 3 users, 10k documents, 5GB assets, 1M API
requests a month. A furniture showroom will not come close.

### Why Sanity rather than Firebase

Firebase gives you a database and nothing else — you would build the admin UI,
the login, the image upload and the security rules yourself. That is two to three
weeks of work for a site that gets a few new products a month. Sanity ships the
admin panel and an image CDN, which also solves the photography hosting problem.

## Change these first

Everything business-specific lives in **`lib/site.ts`**:

```ts
whatsapp: '923357557143',   // country code, no + and no spaces
craftVideo: '',             // e.g. '/craft.mp4'  (file goes in /public)
email, phone, address, area, hours, instagram
```

Timber data is in **`lib/woods.ts`**, projects in **`lib/portfolio.ts`**.

Products live in **`lib/products.ts`** — one typed array. Add, remove or reprice
there and every page updates: collection, filters, product pages, sitemap,
related items and the cart.

## Pages

| Route | What it is |
|---|---|
| `/` | Home — hero, stats, rooms, signature pieces, film, process |
| `/collection` | Everything, filterable by room (`?c=bedroom`) |
| `/bedroom` | Bedroom-only page: sizes, pieces, six things we get right, full-room CTA |
| `/kids` | Kids & play rooms: age bands, pieces, six safety commitments, play-room CTA |
| `/gifts` | Wooden gifts: range, occasions, bulk/corporate ordering |
| `/wood` | Timber library — six woods with origin, hardness, tone, grain, cost, linked pieces |
| `/portfolio` | Six projects, each with the brief and what was delivered |
| `/product/[slug]` | 24 statically generated product pages |
| `/craft` `/bespoke` `/story` `/visit` | Supporting pages |

## Structure

```
app/
  layout.tsx              fonts, metadata, cart provider, header/footer
  template.tsx            page transition (framer-motion)
  page.tsx                home
  collection/page.tsx     grid + category filter (?c=living)
  product/[slug]/page.tsx product detail, statically generated
  craft/  bespoke/  story/  visit/
  sitemap.ts  robots.ts  not-found.tsx
components/               presentational + client components
lib/                      site config, product data, formatting
sanity-studio/            optional Studio schemas — NOT part of the build
```

## Design system

Tokens are CSS variables in `app/globals.css` and Tailwind colours in
`tailwind.config.ts`.

| Token   | Hex       | Use                          |
|---------|-----------|------------------------------|
| ink     | `#16140F` | text, dark sections          |
| ivory   | `#FBF9F4` | cards                        |
| bone    | `#F3EFE6` | page background              |
| sand    | `#E7E1D4` | alternate sections           |
| walnut  | `#7A5C3E` | primary accent               |
| brass   | `#B08E6B` | accent on dark               |

Type: **Cormorant Garamond** (display) + **Jost** (everything else), both loaded
through `next/font/google`, so there is no layout shift and no external request
at runtime.

Dark mode is a `data-theme` attribute on `<html>`, set before paint by an inline
script in `layout.tsx` so there is no flash. The toggle is in the header.

## Enquiry, not checkout

There is no cart and no payment gateway, by design. Nobody buys a Rs 200,000 bed
with a card — they message, they visit, they pay an advance. So:

- **Enquire** on every card and product page opens WhatsApp with that piece,
  its price and a written message already filled in.
- **Shortlist** (the bookmark icon) saves pieces to `localStorage` with no
  account. The drawer sends the whole list as one WhatsApp message.
- **Email** and the phone number are on every product page.

`components/EnquiryBar.tsx` holds the shortlist hook and the buttons;
`components/ShortlistDrawer.tsx` is the drawer.

## Illustrations vs photographs

`components/Illustration.tsx` holds fifteen hand-built SVG scenes — shaded, with
wood-grain gradients and floor shadows — so every page is complete without any
image assets. They are illustrations, not photographs, and they are there to hold
the layout until you shoot the real thing.

To swap in photographs:

1. Put images in `public/products/<slug>-1.jpg` etc.
2. Add `images: string[]` to the `Product` type in `lib/products.ts`.
3. Replace `<Illustration />` with `next/image` in `ProductCard.tsx`,
   `ProductDetail.tsx`, `RoomHero.tsx` and `app/portfolio/page.tsx`.

This is the single highest-impact change you can make to the site. Budget
Rs 40,000–80,000 for a Karachi product shoot and treat it as a core cost, not an
extra.

## Deploy

Push to GitHub, import the repo on Vercel, add the domain.

No environment variables are needed to go live. Add
`NEXT_PUBLIC_SANITY_PROJECT_ID` later, when you want the admin panel.

Pages revalidate every 60 seconds, so Studio edits appear on the live site within
a minute without a redeploy.
