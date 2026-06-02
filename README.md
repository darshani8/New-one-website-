# Game of Thrones — The Chronicles of Westeros

A cinematic, scroll-driven Game of Thrones website built with **React + Vite
+ GSAP ScrollTrigger**. A scroll-scrubbed video hero moves chapter-by-chapter
through Westeros, followed by an interactive "Great Houses" card grid.

> This is a replica of the site by **[divyashrma18/GOT](https://github.com/divyashrma18/GOT)**,
> deployed here via GitHub Pages. The only change from the original source is a
> Vite `base` path so assets resolve at the project subpath.

## Live site

**https://darshani8.github.io/New-one-website-/**

Every push to `main` rebuilds and redeploys automatically via GitHub Actions.

## Run locally

```bash
npm install
npm run dev      # dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## How it works

- **Hero** (`src/components/Hero.jsx`) — a pinned, scroll-scrubbed section.
  Scroll position drives the background video's `currentTime` and cross-fades
  six chapters of narrative text. Includes a loading screen, film grain,
  vignette, corner ornaments, rune bar, progress bar, and chapter dots.
- **Section1 / Great Houses** (`src/components/Section1.jsx`) — a card grid
  with IntersectionObserver staggered entrance, hover-reveal of house lore,
  and a mouse-driven 3D sigil tilt.

## Deployment notes

- `vite.config.js` sets `base: '/New-one-website-/'` — required for a GitHub
  Pages **project** site (served from a subpath, not the domain root).
- Runtime asset paths (`public/video/one.mp4`, `public/images/*`) are prefixed
  with `import.meta.env.BASE_URL` so they resolve correctly under that subpath.
- `.github/workflows/deploy.yml` runs `npm ci && npm run build` and publishes
  `dist/` to GitHub Pages.

## Project layout

```
index.html              # Vite entry
vite.config.js          # base path for GitHub Pages
package.json
public/
  video/one.mp4         # hero background video
  images/*              # house sigils
src/
  App.jsx
  components/Hero.jsx
  components/Section1.jsx
.github/workflows/deploy.yml
```
