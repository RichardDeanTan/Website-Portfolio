# PLAN.md — Richard Dean Tanjaya · Portfolio v2

## Context

The current site (https://richarddeantan.github.io/Personal-Portfolio/) is plain HTML/CSS/JS on GitHub Pages. Its content stops at early 2025. The new CV adds a lot that's missing:
- the **Data Engineer Intern role at PT Kalbe Farma** (Feb 2026 – present)
- **3 first-authored IEEE papers**
- the **Best Paper Award** (ITIS 2025)
- the **Dean's List**
- the **Rental Data Pipeline** project
- a much larger data-engineering skill set (Airflow, BigQuery, dbt, Terraform, GCP)

The goal is to rebuild the site in **Astro + TypeScript**, deploy it to **Vercel**, and keep the current single-page structure and feel. Projects and Experience get redesigned, and the colours are cleaned up so they look less like a generic AI template.

### Decisions already made
| Topic | Decision |
|---|---|
| Stack | Astro 7 (latest 7.4.x, needs Node ≥ 22.23.4; you have 22.23.5) + TypeScript (strict), plain scoped CSS (no Tailwind), deployed on Vercel (set the Node version in Vercel to 22.x) |
| Layout | Same single page and section order; Projects and Experience redesigned, the rest polished |
| Colour | Keep dark + blue, remove the purple gradient. Accent glow kept on hover/focus only (restored in Phase 3 at your request) |
| Theme | Light and dark, follows the visitor's system setting by default, header toggle that remembers the choice |
| Publications | New section of its own |
| Contact form | Web3Forms (sends to your inbox) |
| Project images | Keep the Unsplash photos for now and swap them later |
| Experience entries | Kalbe Farma, Researcher, DS Club R&D, Binus Mentor. High school is removed. BINUS moves to a separate Education card |

---

## 1. Tech stack and repo structure

- **Astro 7** generates a static site. Pin `"engines": { "node": ">=22.23.4" }` in package.json so Vercel uses a compatible Node. It ships almost no JavaScript, and the few interactive parts are small TS scripts.
- **TypeScript strict**: every piece of content is a typed object, so a missing field (such as a project without `repoLink`) shows up as an error at build time.
- **Content is kept apart from layout**: you edit `src/data/*.ts` and never touch the components to update the site. This is the same idea as your current `data.js` and `data-project.js`.
- **Assets**: `@fontsource/poppins` (self-hosted, so there's no request to Google), `@fortawesome/fontawesome-free` (the same icon class names you already use), and Devicon SVGs for skill logos.
- **Integrations**: `@astrojs/sitemap`, plus `astro:assets` for image optimisation (Unsplash added to the allowed remote domains).

```
web-portfolio/
├─ public/
│  ├─ cv/Richard-Dean-Tanjaya-CV.pdf      # renamed, no spaces
│  ├─ favicon.svg
│  └─ og-image.png                       # link preview for LinkedIn/WhatsApp
├─ src/
│  ├─ assets/                            # profile.jpeg, aboutme-bg.png, aboutme-person.png
│  ├─ data/
│  │  ├─ profile.ts        # name, roles, bio, links, quote, quick stats
│  │  ├─ skills.ts         # grouped skills + carousel list
│  │  ├─ experience.ts     # work / research / organisation entries
│  │  ├─ education.ts
│  │  ├─ achievements.ts   # awards + certificates
│  │  ├─ publications.ts
│  │  └─ projects.ts
│  ├─ types.ts             # Project, Experience, Publication, ... interfaces
│  ├─ styles/
│  │  ├─ tokens.css        # colour/spacing/radius variables, light + dark
│  │  └─ global.css        # reset, typography, .btn, .heading, section
│  ├─ components/
│  │  ├─ Header.astro  ThemeToggle.astro  Footer.astro
│  │  ├─ Hero.astro  TechCarousel.astro
│  │  ├─ About.astro  SkillGroups.astro  Achievements.astro
│  │  ├─ Projects.astro  ProjectCard.astro  FeaturedProject.astro  ProjectDialog.astro
│  │  ├─ Experience.astro  ExperienceItem.astro  EducationCard.astro
│  │  ├─ Publications.astro
│  │  └─ Contact.astro
│  ├─ scripts/             # typewriter.ts, nav.ts, projects.ts, contact.ts, reveal.ts
│  ├─ layouts/Base.astro   # <head>, SEO meta, no-flash theme script
│  └─ pages/index.astro
├─ astro.config.mjs  tsconfig.json  package.json
├─ .env.example          # PUBLIC_WEB3FORMS_KEY=
├─ README.md             # how to run, how to add a project
└─ PLAN.md
```

The old files (`index.html`, `css/`, `data*.js`, `index.js`) move to `legacy/` during the migration and are deleted once v2 has content parity with v1.

---

## 2. Design system

### Colour tokens
Every colour is a variable on `:root`, with a separate set under `[data-theme="dark"]`. The page has no gradients. A soft accent glow (`--glow`) appears only on hover/focus of buttons, icon links, filters and project cards. There is **one accent colour**, and it's used only on the primary button, the active nav link, text links, metric numbers and the "current role" marker.

| Token | Light | Dark | Used for |
|---|---|---|---|
| `--bg` | `#FFFFFF` | `#0B0D10` | page background |
| `--surface` | `#F5F7FA` | `#14171C` | cards, alternating sections |
| `--border` | `#E3E7ED` | `#252A33` | card borders, dividers |
| `--text` | `#0B0D10` | `#F2F4F7` | body and headings |
| `--muted` | `#525B69` | `#A0A7B4` | dates, secondary text |
| `--accent` | `#0B6FB0` | `#38A8E8` | the single accent |
| `--on-accent` | `#FFFFFF` | `#0B0D10` | text on accent buttons |

Every text and accent pairing must meet WCAG AA contrast (4.5:1). This gets checked during implementation.

### Type, shape and motion
- **Font**: Poppins, kept for continuity because it's the identity of your current site. Headings use 600–700, body text 400, with a 1.65 line-height so paragraphs are easier to read.
- **Headings** are solid text colour. The highlighted word ("My **Projects**") uses the accent colour instead of the gradient.
- **Radius**: 8px on cards and 6px on chips. The primary CTA is the only pill-shaped element; everything else loses the pill shape.
- **Shadow**: cards are flat with a 1px border. Only the open project dialog gets a shadow.
- **Motion**: typewriter, looping tech carousel (pauses on hover/focus), fade-up scroll reveal, accordion slide-open with rotating chevron, hover lift and glow.
- **Reduced motion** (decided in Phase 3: soften, don't remove): when the OS asks for reduced motion, the typewriter, carousel, accordion slide and glow still run; only the slide-up on scroll and the hover lift are dropped.

### Theme toggle
- A small inline script in `<head>` reads `localStorage` and falls back to `prefers-color-scheme`, then sets `data-theme` before the page paints, so there's no flash of the wrong theme.
- The toggle in the header is a sun/moon icon button with an `aria-label`.

---

## 3. Page layout, section by section

### Header (sticky)
- `Richard Dean Tanjaya` wordmark on the left.
- Nav: Home · About · Projects · Experience · Publications · Contact.
- Theme toggle and profile picture on the right.
- Hamburger menu on mobile. The active link is underlined in the accent colour.

### Home
- `Hi, I'm Richard Dean Tanjaya`
- Typewriter: **Data Engineer · Data Scientist · AI Engineer**
- Subline: `Data Engineer Intern @ Kalbe Farma · Data Science @ BINUS (GPA 3.96)`
- Bio: 2 sentences, condensed from the CV summary (pipelines on GCP/BigQuery/Airflow plus IEEE-published DL/NLP research).
- Buttons: **View Projects** (primary) and **Download CV** (secondary). The CV is served locally from `/cv/...`, which fixes the old link that pointed at the wrong filename.
- Social icons: LinkedIn, GitHub, WhatsApp, Email. This also fixes the current `mailto:https://...` bug.
- Tech carousel updated with Python, SQL, Airflow, BigQuery, dbt, GCP, Terraform, Docker, PyTorch, TensorFlow, Power BI and GitHub.

### About
- **Two columns** (stacked on mobile): a rewritten background paragraph on the left, and your existing two-layer photo on the right. The purple-blue brush image is used as a CSS mask filled with `--accent`, so it matches the palette in both themes.
- **Quick-facts strip** under the paragraph, using real numbers from the CV only:
  - `3 IEEE papers`
  - `Best Paper · ITIS 2025`
  - `40+ production pipelines`
  - `GPA 3.96`
- **Fav Language / Interests boxes** kept but updated:
  - Fav Language: Python, SQL, R
  - Interests: Data Engineering, NLP, Deep Learning
- **My Skills**: instead of a flat icon grid where the name only appears on hover, skills are grouped with visible labels, following the CV:
  - Languages
  - Data Engineering & Cloud
  - Databases (added in Phase 1: PostgreSQL, SQL Server, Oracle)
  - ML / AI
  - Analytics & BI
  - Tools
- **Achievements & Certificates**: the accordion is kept.
  - Awards first: Best Paper Award (ITIS, Oct 2025) and Dean's List (Dec 2025).
  - Then certificates: IBM DS Professional and NVIDIA ×2, each with a credential link.

### Projects (redesigned)
1. **Filter bar**: All · Data Engineering · Machine Learning · Deep Learning & NLP · Data Analytics, with a count on each (e.g. `ML (5)`).
   - These are real `<button>`s with `aria-pressed`.
   - The URL remembers the filter, so `/?filter=de#projects` can be shared. (Changed from `#projects?f=de` in Phase 2: a query string lets the browser still scroll to `#projects`.)
2. **Featured row**: 2 large horizontal cards, image on the left and text on the right.
   - Default picks: **Rental Data Pipeline** and **Indonesian Stock Sentiment Analysis**.
   - Each shows a one-line problem statement, a highlighted **key result** (e.g. `Medallion + Star Schema on BigQuery`, `IndoBERTweet fine-tuned, deployed on HF`), tech chips, and GitHub / Live buttons right on the card.
3. **Grid of compact cards** for the rest: 3 columns on desktop, 2 on tablet, 1 on mobile. Each card has:
   - a 16:9 image (sized, so the layout doesn't jump)
   - a category label
   - the title and a 2-line description
   - an optional metric line (e.g. `90% F1-macro`, `78.4% accuracy`)
   - up to 3 tech chips plus `+n`
   - small GitHub / Live icons
   - Clicking the card opens the detail dialog.
4. **Detail dialog**: uses the native `<dialog>`, so Esc closes it, focus stays inside, and it's accessible. It has these parts:
   - image
   - Overview
   - What I did (bullets)
   - Results (metrics)
   - Tech
   - links
   - The "Live demo" button is hidden when `liveLink` equals `repoLink` (several projects currently duplicate it).
5. **Data model** (`types.ts`):
   ```ts
   interface Project {
     slug: string; title: string; summary: string; details: string[];
     categories: ('de' | 'ml' | 'dl' | 'analytics')[];
     tech: string[]; metrics?: { label: string; value: string }[];
     image: string; imageAlt: string; repoLink?: string; liveLink?: string;
     featured?: boolean; year?: number;
   }
   ```

### Experience (redesigned)
- **The vertical timeline is kept** (it's part of your identity), with these changes:
  - Each entry carries a **type label**: Work, Research or Organisation.
  - Entries are sorted newest first.
  - **Present roles** get a filled accent dot. Past roles get a hollow dot, so the dot marks a real state.
  - The glowing blue line becomes a 2px muted line.
- **Each entry:**
  - Header row: role · company · location · date range.
  - The **Kalbe Farma** entry is expanded by default. The others show a 1-line summary and a "Show details" toggle (`<button aria-expanded>`).
  - Bullets put the key numbers in **bold** (40+ pipelines, −54% slot-ms, 5 min → 10 s, 96% → 100% accuracy, 400+ GB, 20+ source tables).
  - Small tech chips per role (e.g. BigQuery, Airflow, OpenMetadata, Oracle, GCS).
- **Entries:**
  1. Data Engineer Intern — PT Kalbe Farma, Feb 2026 – Present: the 6 CV bullets.
  2. Undergraduate Researcher — BINUS AIRDC & BDSRC, Apr 2025 – Jul 2026: CV bullets plus the CNN plant-disease project from the old site.
  3. R&D Activist — Data Science Club, Feb 2025 – Jan 2026.
  4. Binus Mentor — SASC, Feb – Jul 2025.
- **Education card** below the timeline, as a separate compact card: Bachelor of Data Science, BINUS, Sep 2023 – Present, GPA 3.96/4.00, relevant courses.

### Publications (new)
- A simple numbered list with no cards. Each item has:
  - the paper title (links to the DOI)
  - venue · year
  - a `First author` label
- Paper #2 (Financial Sentiment) gets a text label: `Best Paper Award — NLP Track, ITIS 2025`.
- Entries, newest first:
  1. **Enhancing Efficiency and Transparency in Transformer-Based Emotion Classification for Indonesian Tweets**: 14th ICoICT 2026, Bandung, Jul 2026, DOI `10.1109/ICoICT71118.2026.11664832`
  2. **Optimizing Transformer-Based Models for Financial Sentiment in Indonesian Stock Tweets**: ITIS 2025, Mataram, Oct 2025, DOI `10.1109/ITIS67966.2025.11308959`
  3. **CNN Architectures for Multi-Crop Leaf Disease Classification Using a Merged Dataset**: ITIS 2025, Mataram, Oct 2025, DOI `10.1109/ITIS67966.2025.11308783`
- Each title links to `https://doi.org/<DOI>`.
- The related projects link to their paper (Stock Sentiment → paper 2), and the Researcher experience bullets link to all three.

### Contact
- **Left: "Get in touch"**: email, WhatsApp, LinkedIn and GitHub, each as a full row link.
- **Right: Web3Forms form**:
  - Fields: Name, Email, Message, plus a hidden honeypot field to block spam bots.
  - It shows a "Sending…" state, a success message, and an error message that gives your email as the fallback.
  - The key comes from `PUBLIC_WEB3FORMS_KEY`. Web3Forms keys are designed to be public, so this is safe.

### Footer
- One row: name and quote, the nav links, and the social icons.
- The © year is generated automatically (it's currently hard-coded to 2024).

### SEO and sharing
- `<title>`, meta description, Open Graph and Twitter tags, `og-image.png`, favicon, sitemap and `robots.txt`.

---

## 4. Content migration notes
- **Roles**: `Data Engineer / Data Scientist / AI Engineer`. This replaces `Data Scientist / ML Engineer / Data Analyst`.
- **Occupation and bio** rewritten from the CV summary, in a first-person, plain tone.
- **New project**: Rental Data Pipeline, repo https://github.com/RichardDeanTan/Rental-Pipeline-System (PostgreSQL → GCS → BigQuery, dbt + Airflow + Astronomer Cosmos, Terraform, Medallion / Star Schema).
- **Project categories** remapped to the new filter set:
  - Uber → Analytics
  - Credit Score → ML
  - Sentiment → DL & NLP + ML
  - and so on for the rest
- **Metrics added** where the old data has them:
  - Credit Score: 76.98% ML / 78.36% DL
  - Disaster: 90% F1-macro
  - Summarization: ROUGE (number TBD)
- **Images**: Unsplash URLs kept. The two Brain Tumor projects currently share one photo, so one gets a different image.
- **Old Experience entries**: High school is dropped, as you chose. The education entry becomes the Education card.

### Inputs needed from you (they don't block the build; placeholders are used meanwhile)
- [x] 3 IEEE paper titles, venues, dates and DOIs
- [x] Rental Data Pipeline GitHub link
- [x] DS Club R&D end date (Jan 2026)
- [x] Best Paper Award paper confirmed: Optimizing Transformer-Based Models for Financial Sentiment in Indonesian Stock Tweets
- [ ] Web3Forms access key (free at web3forms.com, sent to your email). Setup steps given at the end of the build
- [ ] Later: real project screenshots to replace the Unsplash placeholders

---

## 5. Progress checklist

### Phase 0 — Setup
- [x] Move the old site into `legacy/` for reference
- [x] Scaffold Astro + TS strict, add Poppins, Font Awesome and the sitemap integration
- [x] `git init`, `.gitignore`, `.env.example`, README with run instructions

### Phase 1 — Foundation
- [x] `tokens.css` (light/dark) and `global.css` (reset, type, buttons, headings)
- [x] `Base.astro` layout: SEO meta, no-flash theme script
- [x] `types.ts` and all `src/data/*.ts` files filled from the old site and the CV

### Phase 2 — Sections
- [x] Header + mobile menu + active-section highlighting + ThemeToggle
- [x] Home: typewriter, CTAs, socials, tech carousel
- [x] About: paragraph, photo, quick facts, interests, grouped skills
- [x] Achievements & certificates accordion
- [x] Projects: filters, featured cards, grid cards, `<dialog>` detail
- [x] Experience: timeline with type labels, expand/collapse, Education card
- [x] Publications list
- [x] Contact: info rows + Web3Forms form with all states
- [x] Footer

### Phase 3 — Polish
- [x] Scroll reveal and reduced-motion handling (done early in Phase 2)
- [x] Responsive pass at 375 / 768 / 1280 px with no horizontal scroll
- [x] Contrast check on all token pairs, in both themes (added `--border-strong` for form fields, 3:1)
- [x] Keyboard pass: visible focus, dialog, accordions, filters, menu
- [x] Alt text on every image, and sized images
- [x] OG image, favicon, meta description, robots.txt (`npm run brand` regenerates the images)

### Phase 4 — Ship
- [ ] `npm run build` with zero type errors (`astro check`)
- [ ] Lighthouse: Performance / Accessibility / SEO ≥ 95
- [ ] Push to GitHub and import into Vercel, then set `PUBLIC_WEB3FORMS_KEY` in Vercel env
- [ ] Test-submit the contact form on the Vercel preview
- [ ] Update the CV header link and LinkedIn to the new URL
- [ ] Delete `legacy/` after confirming content parity

---

## 6. Verification
- `npm run dev` → open it in the browser pane and check every section in **both themes** at mobile and desktop widths.
- `npx astro check` and `npm run build` must pass cleanly.
- Click through every nav link, filter, project dialog (open/close with Esc), experience toggle and external link.
- Download the CV and confirm the file opens.
- Submit the contact form and confirm the email arrives in your inbox.
- Run Lighthouse on the Vercel preview deployment.
