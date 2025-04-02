/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'royal-gold': '#d4af37',
        'royal-dark': '#1a1a1a',
        'royal-light': '#f5f5f5',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
