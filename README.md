# Eleganto — Luxury Footwear Landing Page

A premium monochrome landing page for the fictional high-end footwear brand Eleganto.

> "Elegance is not worn. It is embodied."

## Stack

- React 19 + TypeScript
- Vite 8
- Custom CSS design system (no Tailwind / component library)
- Fonts: Cormorant Garamond (serif display) + Inter (sans UI) via Google Fonts
- Imagery: Unsplash photography

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

## Build for production

```bash
npm run build
# output: dist/
```

## Project structure

- `src/` — React app (App + 11 page-section components)
- `src/styles/index.css` — full design system: tokens, reset, typography, components, motion
- `public/eleganto-logo.svg` — brand wordmark
- `dist/` — production build (generated)

## Design

- Black / white / grayscale palette only — no chromatic colors anywhere
- Editorial luxury layout with large serif headlines and generous whitespace
- Smooth hover interactions on product cards, scroll-triggered reveals
- Responsive down to 375px mobile with no horizontal overflow
- `prefers-reduced-motion` respected
- Semantic HTML, keyboard-accessible controls, `aria-label` where needed
