# Portfolio

A cinematic, production-grade portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and shadcn/ui primitives.

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **shadcn/ui** (Button, Input, Textarea, Dialog)
- **cmdk** (command palette)
- **Lucide React**

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

| File | Purpose |
|------|---------|
| `src/lib/constants.ts` | Name, role, tagline, social links |
| `src/lib/data/projects.ts` | Project showcase content |
| `src/lib/data/credibility.ts` | Metrics strip |
| `src/lib/data/capabilities.ts` | Capability groups |
| `src/lib/data/timeline.ts` | Evolution timeline |
| `src/lib/data/philosophy.ts` | Philosophy principles |

## Features

- Cinematic hero with staggered reveal
- Cursor-reactive ambient lighting
- Command palette (`⌘K`)
- Keyboard shortcuts (`?`, `g` + `h`/`w`/`c`)
- Scroll progress indicator
- Premium project cards with spotlight hover
- Accessible, semantic HTML
- Reduced-motion support

## Deploy

```bash
npm run build
```

Deploy to [Vercel](https://vercel.com) or any Node.js host.
