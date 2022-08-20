import { defineConfig } from 'astro/config'

import react from '@astrojs/react'
import lit from '@astrojs/lit'
import turbolinks from '@astrojs/turbolinks'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), lit(), turbolinks(), sitemap()],
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
