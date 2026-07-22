# Agent notes

This is an Astro static site. Prefer zero client JavaScript.

- Content: `src/data/portfolio.ts`
- Pages: `src/pages/`
- Layout/components: `src/layouts/`, `src/components/`
- Styles: `src/styles/global.css` (Tailwind v4 + design tokens)

Do not reintroduce React, Framer Motion, or a theme toggle unless explicitly requested.
Theme follows the OS via CSS `prefers-color-scheme`. Blog writing is linked out to Medium.
