# ukeme.us

Portfolio landing page for Ukeme, a Cloud, DevOps, Platform and Blockchain NodeOps Engineer.

## Stack

React 18, TypeScript, Vite, Tailwind CSS, Framer Motion.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
```

```bash
npm run build      # type-check, then bundle to dist/
npm run preview    # serve the production build
npm run typecheck  # types only
```

## Layout

The page is a single scroll, assembled in [src/App.tsx](src/App.tsx):

| Section | File | Notes |
| --- | --- | --- |
| Hero | [src/sections/HeroSection.tsx](src/sections/HeroSection.tsx) | Nav, oversized wordmark, magnetic portrait |
| Marquee | [src/sections/MarqueeSection.tsx](src/sections/MarqueeSection.tsx) | Two rows sliding opposite ways on scroll |
| About | [src/sections/AboutSection.tsx](src/sections/AboutSection.tsx) | Bio revealed character by character |
| Services | [src/sections/ServicesSection.tsx](src/sections/ServicesSection.tsx) | White panel, five numbered rows |
| Projects | [src/sections/ProjectsSection.tsx](src/sections/ProjectsSection.tsx) | Three column card grid |
| Videos | [src/sections/VideosSection.tsx](src/sections/VideosSection.tsx) | YouTube thumbnails that swap in the player on click |
| Articles | [src/sections/ArticlesSection.tsx](src/sections/ArticlesSection.tsx) | Latest dev.to posts, fetched at runtime |

Shared pieces live in [src/components/](src/components/): `FadeIn` (scroll-in reveal),
`Magnet` (cursor-following pull), `AnimatedText` (per-character reveal), and the two
buttons.

## Configuration

Every "Contact Me" call to action points at `CONTACT_HREF` in
[src/constants.ts](src/constants.ts). Change it there to update all of them.

The articles section reads the six most recent posts from the public dev.to API
on load. The username and post count live in
[src/data/articles.ts](src/data/articles.ts), alongside a snapshot of the current
posts that renders immediately and stays put if the request fails. Refresh that
snapshot with:

```bash
curl -s "https://dev.to/api/articles?username=ukemzyskywalker&per_page=6"
```

The videos section is a hand-maintained list of IDs and titles in
[src/sections/VideosSection.tsx](src/sections/VideosSection.tsx).
