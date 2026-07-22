# Portfolio — Astro

Static portfolio for Chathurika Senani, rebuilt in Astro with almost no client JavaScript.

## Stack

- [Astro](https://astro.build) (static output)
- Tailwind CSS v4
- System color scheme only (`prefers-color-scheme`)
- Writing lives on [Medium](https://medium.com/@zenaronline)

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

Set `PUBLIC_SITE_URL` in production (see `.env.example`) for canonical URLs, sitemap, and robots.

## Deploy on Vercel

This is an **Astro** static site (not Next.js). If the Vercel project was created for the old Next app:

1. Project → **Settings** → **General** → **Framework Preset** → **Astro**
2. Build Command: `npm run build`
3. Output Directory: `dist`
4. Add env `PUBLIC_SITE_URL` = your production URL (e.g. `https://your-domain.vercel.app`)

`vercel.json` in the repo locks these settings so redeploys don’t fall back to Next.js.
