# Richard Dean Tanjaya — Portfolio

Personal portfolio for my work as a Data Engineer, Data Scientist and AI Engineer.
Built with [Astro 7](https://astro.build) and TypeScript, deployed on Vercel.

The design, layout and progress checklist are in [PLAN.md](PLAN.md).

## Requirements

- Node.js 22.23.4 or newer (`node -v` to check)

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:4321. The page reloads as you save files.

## Other commands

| Command | What it does |
|---|---|
| `npm run check` | Type-checks all `.astro` and `.ts` files |
| `npm run build` | Type-checks, then builds the static site into `dist/` |
| `npm run preview` | Serves the built `dist/` folder to test the production build |
| `npm run brand` | Regenerates `public/og-image.png` (link preview) and the PNG icons. Needs Chrome or Edge installed. Run it after changing `scripts/brand/og.html` or `public/favicon.svg`, then commit the PNGs |

## Updating content

All text and lists live in `src/data/` as typed TypeScript files, so you don't need to touch the components.
A missing or misspelled field shows up as an error when you run `npm run check`.

| To change | Edit |
|---|---|
| Name, bio, links, roles | `src/data/profile.ts` |
| Projects | `src/data/projects.ts` |
| Experience | `src/data/experience.ts` |
| Education | `src/data/education.ts` |
| Awards and certificates | `src/data/achievements.ts` |
| Publications | `src/data/publications.ts` |
| Skills | `src/data/skills.ts` |
| CV file | replace `public/cv/Richard-Dean-Tanjaya-CV.pdf` (keep the filename) |

## Environment variables

Copy `.env.example` to `.env` and fill in `PUBLIC_WEB3FORMS_KEY` for the contact form.
On Vercel, add the same variable in the project settings.

## Folder layout

```
public/      files served as-is (CV, favicon, OG image)
scripts/     brand/: OG image template and the script that renders it
src/
  assets/    images that Astro optimises
  data/      all site content
  components/, layouts/, pages/, styles/, scripts/
legacy/      the old GitHub Pages site, kept for reference until v2 is complete
```
