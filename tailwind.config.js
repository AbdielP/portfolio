/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#424242',
        green: {
          DEFAULT: '#507B36',     // `bg-brand`, `text-brand`, etc.
          light: '#7BAF5B',       // `bg-brand-light`, para hover claro
          dark: '#40602A',        // `hover:bg-brand-dark`, o `text-brand-dark`
        }
      },
      fontFamily: {
        title: ['Inter', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
