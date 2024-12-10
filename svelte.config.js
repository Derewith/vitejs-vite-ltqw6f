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
      fallback: null,
      precompress: false,
      strict: true
    }),
    prerender: {
      entries: [
        '*',
        '/who',
        '/team',
        '/media',
        '/invest',
        '/legal',
        '/privacy',
        '/contact'
      ],
      handleHttpError: ({ path, referrer, message }) => {
        if (message.includes('Not found')) return;
        throw new Error(message);
      }
    },
    appDir: 'app',
    paths: {
      base: ''
    }
  }
}
