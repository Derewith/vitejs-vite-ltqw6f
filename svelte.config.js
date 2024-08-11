import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adapter from '@sveltejs/adapter-static';

export default {
  preprocess: vitePreprocess(),
  kit: {
    csrf: {
      checkOrigin: false,
    },
    alias: {
      $lib: './src/components',
    },
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
      precompress: false,
      strict: false
    }),
    appDir: 'app',
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/vitejs-vite-ltqw6f' : ''
    }
  }
}
