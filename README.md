# Vemli POS Website

The official marketing website for **Vemli POS** — a complete restaurant and retail
point-of-sale system built for Ghanaian businesses. The site showcases products,
features, pricing, and integrations, and is optimized for SEO with structured data,
Open Graph/Twitter cards, and sitemaps.

Live site: https://vemli.co

## Tech Stack

- **[Next.js 14](https://nextjs.org/)** (App Router) with **static export** (`output: "export"`)
- **React 18**
- **Tailwind CSS v4** (via `@tailwindcss/postcss`)
- **Playwright** (used by the site-cloning utility script)
- **Node.js** + **npm**

## Project Structure

```
vemli/
├── app/                  # Next.js App Router (layout, global styles)
├── components/           # Shared React components
├── en/  fr/              # Language-specific pages (English, French)
├── features/             # Product feature pages
├── pricing/  about/      # Marketing / info pages
├── blog/                 # Blog content
├── public/  assets/      # Static assets (logos, images)
├── sites/                # Mirror of theme CSS/assets from the live site
├── vemli-api/            # API-related pages
├── clone.js              # Playwright script that crawls & clones vemli.co
├── next.config.js        # Next.js config (static export, trailing slash)
├── run.sh                # Helper to serve the build locally with Python http.server
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Local development

```bash
npm run dev
```

Then open http://localhost:3000.

### Build for production

```bash
npm run build
```

This produces a fully static site in the `out/` directory (because
`next.config.js` uses `output: "export"`).

### Serve the production build locally

```bash
./run.sh
```

Serves `out/` at http://localhost:8007 via Python's `http.server`.

## Cloning the Live Site (`clone.js`)

`clone.js` is a Playwright-based crawler that downloads the live site
(**vemli.co**) into a `clone_site/` mirror, including HTML, assets, and
full-page screenshots. Useful for offline snapshots or visual diffing.

1. Install the Playwright browser:

   ```bash
   npx playwright install chromium
   ```

2. (Optional) Edit the `USE_LANGUAGES` array at the top of `clone.js` to control
   which language paths get crawled (`["en", "fr"]` by default). Paths with no
   language prefix (e.g. `/`, `/pricing`) are always included.

3. Run the crawler:

   ```bash
   node clone.js
   ```

The cloned output is written to `clone_site/`.

## Notes

- The project is a **static export**, so all pages are pre-rendered to HTML — no
  server runtime is required to host the site.
- `node_modules/`, `.next/`, and `out/` are git-ignored.
- The `app/layout.js` injects Google Tag Manager, structured data
  (`SoftwareApplication`, `FAQPage`), and social meta tags for SEO.
