import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import mdx from '@astrojs/mdx'
import prefetch from '@astrojs/prefetch'
import compress from 'astro-compress'
import { rehypeHeadingIds } from '@astrojs/markdown-remark'
import { autolinkHeadingsPlugin } from './src/plugins/rehypeHeadings'

export default defineConfig({
  integrations: [
    react(),
    sitemap(),
    mdx({
      rehypePlugins: [rehypeHeadingIds, autolinkHeadingsPlugin],
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
