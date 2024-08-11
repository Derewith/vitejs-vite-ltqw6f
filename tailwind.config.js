/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        brand: "#ff0000",
        brandbg: "#FFF5EA"
      }
    },
  },
  plugins: [
    // require('tailwindcss-animated')
    require('taos/plugin')
  ],
  // mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    // classes that are generated dynamically, e.g. `rounded-${size}` and must
    // be kept
    safeList: [],
    content: ['./src/app.html', './src/**/*.{html,js,svelte,ts}'],
  },
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: ['./src/*.{html,js,svelte,ts}'],
  },
};
