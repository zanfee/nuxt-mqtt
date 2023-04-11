// https://nuxt.com/docs/api/configuration/nuxt-config

import inject from '@rollup/plugin-inject'

export default defineNuxtConfig({
  vite: {
    build: {
      rollupOptions: {
        plugins: [inject({ Buffer: ['buffer', 'Buffer'] })],
      },
    },
  },
})
