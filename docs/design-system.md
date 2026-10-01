# ByteSpace Design System

This guide is the shared reference for product UI and implementation. Keep it aligned with the CSS theme in `src/app/globals.css` and the visual source in the ByteSpace Figma file.

## Visual direction

Use a confident electric-blue foundation, sharp lime accents, clean neutral surfaces, and a visible grid motif. The interface should feel energetic and focused on learning. Keep page sections open and scannable; reserve framed cards for genuinely grouped content and keep card corners at 8px or less. Existing pill-shaped search and call-to-action controls are part of the brand language.

## Color

Use the named Tailwind utilities backed by CSS custom properties. Do not repeat raw hex values in component markup.

| Token | Value | Use |
| --- | --- | --- |
| `brand-blue` | `#0739D8` | Primary brand surfaces and the hero grid |
| `brand-lime` | `#C7FF00` | Primary calls to action and focused highlights |
| `neutral-50` | `#F5F5F6` | Soft page surfaces |
| `neutral-100` | `#E5E6E8` | Subtle separators and surfaces |
| `neutral-200` | `#CED0D3` | Borders and dividers |
| `neutral-300` | `#ABAEB5` | Form borders and disabled details |
| `neutral-400` | `#82868E` | Placeholder and secondary icon color |
| `neutral-500` | `#666973` | Muted text |
| `neutral-600` | `#585A62` | Secondary body text |
| `neutral-700` | `#4B4C53` | Strong secondary text |
| `neutral-800` | `#424348` | High-emphasis neutral surfaces |
| `neutral-900` | `#3A3B3F` | Headings on light surfaces |
| `neutral-950` | `#242528` | Primary text |

White and black may use the standard Tailwind `white` and `black` utilities. Use the lime sparingly against blue or dark text, and verify contrast whenever text is placed on a brand surface.

## Typography

Fonts are local, globally loaded in the root layout, and exposed through `font-sans` and `font-display`. Satoshi is the default for body and interface text; Poppins is for headings and display copy.

| Role | Family and weight | Size / line height |
| --- | --- | --- |
| Heading L | Poppins 600 | 72px / 120% |
| Heading M | Poppins 600 | 44px / 120% |
| Heading S | Poppins 600 | 36px / 120% |
| Heading XS | Poppins 600 | 20px / 120% |
| Body L | Satoshi 400 | 18px / 160% |
| Body M | Satoshi 400 | 16px / 160% |
| Body S | Satoshi 400 | 14px / 160% |
| Body XS | Satoshi 400 | 12px / 160% |
| Label L / M / S / XS | Satoshi 500 | 18 / 16 / 14 / 12px at 120% |

Use responsive role utilities such as `text-heading-m md:text-heading-l` when a heading needs to scale across breakpoints. Use `font-display` for non-heading display text and `font-sans` for body/UI text. Do not add external font requests, component-level font downloads, or viewport-based font sizing.

## Layout and components

- Use a 12-column grid for desktop compositions. The design reference uses 120px outer margins and 40px gutters at a 1440px canvas; adapt the grid fluidly at smaller widths.
- Constrain primary page content to the existing 1200px container and preserve comfortable mobile gutters.
- The hero grid uses an 80px cell and a low-opacity white line. Reuse `GridBackground` rather than recreating the grid per page.
- Keep controls stable in size and use clear focus states. Lime is the primary action color; maintain readable foreground contrast.
- Prefer shared Tailwind theme tokens and existing layout/component patterns over one-off style values. Add a token only when it represents a reusable design decision.
- Avoid negative letter spacing. Check text wrapping, touch-target spacing, and overflow at mobile and desktop widths.

## Examples

```jsx
<h1 className="font-display text-heading-m md:text-heading-l">
  Learn something new
</h1>

<p className="font-sans text-body-m text-neutral-600">
  Find a course that moves your work forward.
</p>

<button className="rounded-full bg-brand-lime px-6 py-3 font-sans font-medium text-black">
  Explore courses
</button>
```

## Updating the system

Update the CSS custom property and Tailwind `@theme` mapping in `src/app/globals.css`, this guide, and any affected components together. Keep the project’s supplied font licenses with their font assets.