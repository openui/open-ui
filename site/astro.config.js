import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import mdx from '@astrojs/mdx'
import compress from 'astro-compress'
import { rehypeHeadingIds } from '@astrojs/markdown-remark'
import { autolinkHeadingsPlugin } from './src/plugins/rehypeHeadings'
import rehypeResponsiveTables from './src/plugins/rehypeResponsiveTable'

import preact from '@astrojs/preact';

export default defineConfig({
  integrations: [
    sitemap({
      filter: (page) =>
        !page.endsWith("/component-spec-template/"),
    }),
    mdx({
      rehypePlugins: [rehypeHeadingIds, autolinkHeadingsPlugin, rehypeResponsiveTables],
    }),
    compress(),
    preact(),
  ],
  site: 'https://open-ui.org',
  prefetch: {
    prefetchAll: true,
  },
  markdown: {
    syntaxHighlight: 'prism',
  },
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
})