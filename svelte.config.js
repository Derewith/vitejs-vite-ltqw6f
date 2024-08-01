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
      fallback: undefined,
      precompress: false,
      strict: false
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/sveltekit-github-pages' : '',
    }
  }
}
