import { defineConfig } from 'astro/config'

import react from '@astrojs/react'
import turbolinks from '@astrojs/turbolinks'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), turbolinks(), sitemap()],
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
