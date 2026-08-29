# LASHED UP

Marketing site for **LASHED UP** — a private, home-based lash studio in Surrey, BC
offering hybrid, volume, mega volume and wet lash sets, fills, removals and lash
lifts.

Built with React + TypeScript + Vite + Tailwind CSS v4.

- Content source of truth: [lashedupxx.square.site](https://lashedupxx.square.site/)
- Brand / imagery: [@_.lashedup._](https://www.instagram.com/_.lashedup._/)

## Develop

```bash
npm install
npm run dev
```

## Build & lint

```bash
npm run build
npm run lint
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes `dist/` to GitHub Pages. The Vite `base` is `/lashed-up/` in
production (see `vite.config.ts`).
