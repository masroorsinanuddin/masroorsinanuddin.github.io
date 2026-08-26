import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { unified } from '@astrojs/markdown-remark';

// GITHUB PAGES CONFIGURATION — replace these three values before deploying.
const githubUsername = 'masroorsinanuddin';
const repositoryName = 'masroorsinanuddin.github.io';
const finalSiteUrl = 'https://masroorsinanuddin.github.io/';

// For a user site named username.github.io or a custom domain, set base to '/'.
const base = repositoryName === `${githubUsername}.github.io` ? '/' : `/${repositoryName}`;

export default defineConfig({
  // Astro expects the origin here; `base` supplies the repository subpath.
  site: new URL(finalSiteUrl).origin,
  base,
  output: 'static',
  integrations: [
    mdx(),
    sitemap(),
  ],
  markdown: {
    shikiConfig: { theme: 'github-dark-default', wrap: true },
    processor: unified({ remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex] }),
  },
});
