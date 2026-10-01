# ByteSpace

ByteSpace is a course discovery and creator-learning frontend. It is built with Next.js App Router, React, and Tailwind CSS v4. The current repository is a UI prototype backed by local demo data; authentication, enrollment, course search/filtering, and creator follow actions are not connected to a backend.

## Requirements

- Node.js `>=20.9.0` (the installed Next.js version requirement)
- npm

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The `dev` script runs `next dev --webpack` because this environment has encountered a missing Tailwind Oxide native optional binding in the Turbopack development path. Keep this setting unless that dependency-resolution issue has been verified fixed.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Webpack development server |
| `npm run lint` | Run ESLint across the project |
| `npm run build` | Create and validate the production build |
| `npm run start` | Serve the production build locally |

For a production smoke test:

```bash
npm run build
npm run start
```

## Routes

| Route | Purpose | Current behavior |
| --- | --- | --- |
| `/` | Marketing home | Hero, logo cloud, course/category sections, creator CTA, community, footer |
| `/search` | Course catalog | Shared course cards, 18 displayed entries, static filters/categories and pagination |
| `/creators` | Creator profile | Static PurePearl Studio profile and six course cards |
| `/courses/[id]` | Course details | Six statically generated course routes, About/Lessons/Reviews tabs, enrollment panel |
| `/register` | Registration UI | Full name, email, password fields; no account creation request |
| `/login` | Login UI | Email/password and social-provider buttons; no authentication request |
| `not-found` | Unknown paths | Branded 404 page |

## Project Structure

```text
src/
	app/                  App Router routes and global CSS
		courses/[id]/       Statically generated course detail route
	components/
		auth/               Shared authentication-page course showcase
		course/             Course detail experience and tabs
		home/                Homepage sections and reusable CourseCard
		layout/              Site footer and not-found presentation
		ui/                  Shared GridBackground
	data/                  Local course, category, testimonial, and detail data
	services/              Data-service prototype
public/
	card_images/           Course thumbnails and avatar strip
	fonts/                 Self-hosted Satoshi and Poppins font files
	icons/                 UI and course-detail icons
	logos/                 Social-provider and partner logos
	shapes/                Decorative transparent PNG assets
```

### Shared UI

- `src/components/home/CourseCard.jsx` is the shared course card used by the homepage, search results, creator profile, and auth-page showcase. It links to `/courses/{id}`.
- `src/components/auth/CourseShowcase.jsx` shares the overlapping course-card collage between `/login` and `/register`.
- `src/components/ui/GridBackground.jsx` provides the blue surface and grid pattern used by branded sections.
- `src/components/layout/Footer.jsx` is the shared footer used on the home, search, creator, course-detail, and 404 pages.
- The main site navigation is currently repeated in route components; when changing a nav destination, update each route header consistently.

## Data and Current Limitations

- `src/data/courses.js` contains six course-card records and is the data source for the homepage, search, creator, and auth showcases.
- `/search` renders 18 cards by repeating those six records three times. Search input, filters, sorting, category chips, and pagination are presentation-only; no filtering or paging state is connected.
- `src/data/courseDetails.json` contains the longer descriptions, lesson modules, previews, rating breakdowns, and reviews keyed by course ID. The course detail route uses `generateStaticParams()` to build those six pages.
- `src/data/course.json` and `src/data/courseCategories.js` are additional local data artifacts. Active catalog screens currently read from `courses.js` and `CourseCategories.jsx` instead.
- `src/services/courseService.js` is not currently used by the active routes and imports `@/data/courses.json`, which is not present. Reconcile that data contract before adopting the service.
- The creator profile and registration/login pages use static demo content. Auth forms, social buttons, follow, enroll, and login links are not API-backed. The login/register cross-links and page navigation do work.
- The course thumbnails already include lesson/duration/comment overlays; do not add a second metadata overlay in `CourseCard`.

## Design System

- [Design system](docs/design-system.md) is the source of truth for colors, typography, layout, and component conventions.
- [Agent guidelines](AGENTS.md) require checking the relevant installed Next.js 16 docs before changing framework conventions and direct UI work to the shared design tokens.
- Brand colors and typography utilities live in `src/app/globals.css`. Use `brand-blue`, `brand-lime`, `neutral-*`, `font-sans` (Satoshi), and `font-display` (Poppins) rather than introducing one-off values.
- Fonts are self-hosted and loaded globally with `next/font/local` in `src/app/layout.js`; do not add per-component or external font requests.
- Keep desktop Figma measurements at their intended breakpoints and add smaller-screen behavior without changing those desktop values. Decorative absolute-positioned artwork should not cause document-level horizontal overflow.

## UI Implementation Workflow

1. Treat the supplied Figma frame and its measured positions/sizes as the visual acceptance reference.
2. Find the component that owns the behavior or layout before editing; prefer updating a shared component once over duplicating fixes across pages.
3. Reuse existing data, cards, icons, font variables, color tokens, `GridBackground`, and `Footer` where they match the design.
4. Keep page content and data contracts separate: route pages compose sections, reusable components render them, and local data stays in `src/data` until an API is introduced.
5. Preserve the desktop composition while checking phone, tablet, and desktop viewports for wrapping, overflow, and usable controls.
6. Run a focused lint/check first, then `npm run build` before merging or deployment. Manually verify the affected route and its responsive layout.

## Deployment Notes

`npm run build` is the production readiness gate. The current app has no database, auth provider, environment-variable configuration, or API integration. Connect those services and replace repeated/demo records before treating course discovery, registration, login, reviews, or enrollment as production functionality. Deployments can use the repository's connected hosting workflow; no deployment command is run by the app scripts.
