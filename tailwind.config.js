export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        'gold-dark': '#AA8C2C',
        'gold-light': '#E6C757',
        luxury: '#1a1a1a',
        'luxury-light': '#2a2a2a',
        cream: '#F5F1E8',
        'cream-dark': '#E8E4DB',
      },
      fontFamily: {
        serif: ['Georgia', 'Garamond', 'serif'],
        sans: ['Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
