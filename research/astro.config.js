import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import mdx from '@astrojs/mdx'
import prefetch from '@astrojs/prefetch'
import compress from 'astro-compress'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), sitemap(), mdx(), prefetch(), compress()],
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
