import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      // starts with "/pdfs" request proxy to http://127.0.0.1:3000/pdfs
      // '/pdfs': 'http://127.0.0.1:3000',
      // '/pdf': 'http://127.0.0.1:3000',
      '/pdfs': 'https://kind-blue-chicken-fez.cyclic.app',
      '/pdf': 'https://kind-blue-chicken-fez.cyclic.app',
    },
  },
})
