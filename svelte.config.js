import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default {
  preprocess: vitePreprocess(),
  kit: {
    csrf: {
      checkOrigin: false,
    },
    alias: {
      $lib: './src/components',
    }
  }
}
