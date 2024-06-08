/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      // },
    },
  },
  plugins: [],
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    // classes that are generated dynamically, e.g. `rounded-${size}` and must
    // be kept
    safeList: [],
    content: ['./index.html', './src/**/*.{svelte,js,ts}'],
  },
};
