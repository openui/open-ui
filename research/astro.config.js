import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import turbolinks from '@astrojs/turbolinks'
import sitemap from '@astrojs/sitemap'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), turbolinks(), sitemap(), mdx()],
  site: 'https://open-ui.org',
  markdown: {
    shikiConfig: {
      langs: [],
    },
  },
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
})
