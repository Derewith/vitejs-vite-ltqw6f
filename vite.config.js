import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [sveltekit()],
  build: {
    chunkSizeWarningLimit: 3000
  },
  server: {
    fs: {
      allow: ['..']
    }
  }
})
