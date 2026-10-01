# ByteSpace

ByteSpace is a course discovery and creator learning platform built with Next.js, React, and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The development script uses Webpack because Tailwind's native optional binding currently fails in this project's Turbopack development path.

## Project standards

- [Design system](docs/design-system.md): brand palette, typography, layout, and UI conventions.
- [Agent guidelines](AGENTS.md): implementation rules for coding agents.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

Fonts are self-hosted from `public/fonts` and loaded globally through `next/font/local` in `src/app/layout.js`.
