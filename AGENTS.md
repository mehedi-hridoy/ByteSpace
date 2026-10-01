<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## ByteSpace design system

- Treat [docs/design-system.md](docs/design-system.md) as the source of truth for brand colors, typography, layout, and component styling.
- Before changing UI styles, inspect the existing component and use the shared font and color tokens from `src/app/globals.css`; do not introduce arbitrary hex values or substitute fonts when a project token exists.
- Use Satoshi for body and interface text, and Poppins for headings. The root layout loads both local font families; reuse their `font-sans` and `font-display` utilities instead of loading fonts per component.
- When a design token changes, update both the CSS theme and design-system guide in the same change.
- Keep new layouts responsive and consistent with the established blue, lime, neutral, and grid language.
