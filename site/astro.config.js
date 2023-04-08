import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import mdx from '@astrojs/mdx'
import prefetch from '@astrojs/prefetch'
import compress from 'astro-compress'
import { rehypeHeadingIds } from '@astrojs/markdown-remark'
import { autolinkHeadingsPlugin } from './src/plugins/rehypeHeadings'
import rehypeResponsiveTables from './src/plugins/rehypeResponsiveTable'

export default defineConfig({
  integrations: [
    react(),
    sitemap({
      filter: (page) =>
        !page.endsWith() !== "/component-spec-template/",
    }),
    mdx({
      rehypePlugins: [rehypeHeadingIds, autolinkHeadingsPlugin, rehypeResponsiveTables],
    }),
    prefetch(),
    compress(),
  ],
  site: 'https://open-ui.org',
  markdown: {
    shikiConfig: {
      langs: [],
      wrap: true,
    },
  },
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
})
