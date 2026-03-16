// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import remarkGfm from 'remark-gfm';
import remarkDirective from 'remark-directive';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { remarkVideoEmbed } from './src/plugins/remark-video-embed.js';
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  site: 'https://game.grapewell.cn/',
  integrations: [
    sitemap(),
    pagefind()
  ],
  prefetch: true,
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [remarkGfm, remarkDirective, remarkVideoEmbed],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }]
    ],
  }
});
