import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import { rehypeHeadingIds } from '@astrojs/markdown-remark'
import { autolinkHeadingsPlugin } from './src/plugins/rehypeHeadings'
import rehypeResponsiveTables from './src/plugins/rehypeResponsiveTable'
import { remarkLastUpdated } from './src/plugins/remarkLastUpdated'

export default defineConfig({
  redirects: {
    '/components/customizableselect/': '/components/customizable-select.explainer/',
    '/components/customizableselect.explainer/': '/components/customizable-select.explainer/',
    '/components/link-area-delegation-explainer/': '/components/link-area-delegation.explainer/',
  },
  integrations: [
    react(),
    mdx({
      remarkPlugins: [remarkLastUpdated],
      rehypePlugins: [rehypeHeadingIds, autolinkHeadingsPlugin, rehypeResponsiveTables],
    }),
  ],
  site: 'https://open-ui.org',
  markdown: {
    syntaxHighlight: 'prism',
  },
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
})
