# Systems Notebook

A static personal project website built with Astro, TypeScript, and MDX. It is designed for long-form technical writing and deploys to GitHub Pages without a server, database, login, analytics, or CMS.

## Before you publish

1. Edit `astro.config.mjs` and replace `YOUR_GITHUB_USERNAME` and `YOUR_REPOSITORY_NAME`.
2. Edit `src/config.ts` and replace the email, GitHub, and LinkedIn placeholders.
3. Replace `public/resume.pdf` with your real résumé, keeping the same filename.
4. Replace bracketed placeholder results in `src/content/projects/cuda-matrix-multiplication.mdx`.

## Install and run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Astro prints the local address. To check types and create the production output:

```bash
npm run check
npm run build
npm run preview
```

The static site is generated in `dist/`. Do not commit that directory.

## Content

### Add a project

Create an `.md` or `.mdx` file in `src/content/projects/`. Copy the frontmatter from an existing project and update `title`, `description`, `date`, and `tags`. Use MDX when you need components such as `MarginNote`, `Callout`, `Figure`, or `Mermaid`.

```md
---
title: "Project title"
description: "One plain sentence."
date: 2026-08-25
tags: [Rust, Distributed Systems]
---
```

Projects automatically appear in chronological order. Set `draft: true` to keep one out of the generated site.

### Add a note

Create an `.md` or `.mdx` file in `src/content/notes/` with the same frontmatter shape. Notes automatically appear on the Notes page and in the RSS feed.

### Add images

Put static images in `public/images/`. In MDX, use the base-safe figure component so paths work both on a custom domain and in a GitHub project subdirectory:

```mdx
import Figure from '../../components/Figure.astro';

<Figure
  src={`${import.meta.env.BASE_URL}images/my-image.png`}
  alt="Describe what the figure communicates"
  caption="Figure 1. A concise caption."
/>
```

Compress photographs before committing them. Prefer SVG for diagrams you create yourself and provide useful alternative text.

### Replace the résumé

Overwrite `public/resume.pdf` with your real file. Keep the filename so existing navigation links continue to work.

## Dependencies

- `astro`: static site generator and content collections.
- `typescript` and `@astrojs/check`: strict typing and build-time validation.
- `@astrojs/mdx`: lets articles use Markdown plus reusable Astro components.
- `remark-math` and `rehype-katex`: turn Markdown math into accessible, build-time KaTeX HTML.
- `katex`: provides the math renderer styles.
- `mermaid`: renders diagrams declared in article source; it is loaded only on pages using the Mermaid component.
- `@astrojs/rss`: generates the RSS feed.
- `@astrojs/sitemap`: generates the sitemap from static routes.

There is no UI framework, client router, database client, authentication package, analytics package, or server runtime.

## Deploy to GitHub Pages

1. Create an empty GitHub repository.
2. Set the username and repository name in `astro.config.mjs`.
3. Push this project to the `main` branch.
4. On GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, set **Source** to **GitHub Actions**. Do not select “Deploy from a branch.”
6. Open **Actions** and wait for the “Deploy to GitHub Pages” workflow to finish.

The workflow in `.github/workflows/deploy.yml` builds and deploys on every push to `main`.

### Custom domain

Add the domain in **Settings → Pages → Custom domain**. For `www.example.com`, create a DNS `CNAME` record pointing to `YOUR_GITHUB_USERNAME.github.io`. For an apex domain, use the current GitHub Pages `A`/`AAAA` records documented by GitHub. Enable **Enforce HTTPS** after DNS verification.

Then set `finalSiteUrl` to your custom origin and set `base` to `'/'` in `astro.config.mjs`, rebuild, and push. Because this project deploys with a custom GitHub Actions workflow, GitHub’s Pages settings are the source of truth for the domain; a repository `CNAME` file is not required.

## Useful customization points

- Personal copy and external links: `src/config.ts`, `src/pages/index.astro`, and `src/pages/about.astro`
- Site colors, typography, spacing, and responsive behavior: `src/styles/global.css`
- Article chrome and table of contents: `src/layouts/ArticleLayout.astro`
- Reusable article elements: `src/components/`
- SEO defaults and social image metadata: `src/components/SEO.astro`
- Favicon and Open Graph placeholders: `public/favicon.svg` and `public/og-placeholder.svg`

## License

Add the license you want before accepting external contributions. The content and résumé should normally remain your copyright even if you choose an open-source license for the site code.
