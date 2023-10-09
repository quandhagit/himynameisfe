/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-main': "url('../../public/images/bgMain.jpg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  corePlugins: {
    preflight: false,
  },
  // important: '#__next',
}
