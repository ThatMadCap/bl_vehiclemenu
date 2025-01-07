/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./index.html",
        "./src/**/*.{svelte,js,ts,jsx,tsx}",
      ],
  theme: {
    extend: {
        colors: {
            'primary': '#2c2c2c',
            'secondary': 'rgba(0,0,0,0.5)',
            'accent': '#8685ef',

            'txt-primary': '#faf7ff',
            'txt-secondary': '#2b2b2b',

            yume_white: '#F2F2F2',
            yume_grey: '#C1C1C1',
            yume_grey2: '#6C6C6C',
            yume_black: '#171717',
            yume_black2: '#171717E6',
            yume_orange: '#FB8607',
            yume_pink: '#FE247B',
            yume_blue: '#2B78FC',
            yume_green: '#06CE6B',
            yume_red: '#FE2436',
        },
    },
  },
  plugins: [],
}

