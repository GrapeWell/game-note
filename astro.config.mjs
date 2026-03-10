// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import remarkGfm from 'remark-gfm';
import remarkDirective from 'remark-directive';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { remarkVideoEmbed } from './src/plugins/remark-video-embed.js';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-domain.com', // 替换为你的实际域名
  integrations: [
    mdx({
      remarkPlugins: [remarkGfm, remarkDirective, remarkVideoEmbed],
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }]
      ],
    }),
    sitemap()
  ],
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    remarkPlugins: [remarkGfm, remarkDirective, remarkVideoEmbed],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }]
    ],
  }
});