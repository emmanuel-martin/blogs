module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      'sm': '576px',
      'md': '960px',
      'lg': '1440px',
    },
    extend: {},
  },
  plugins: [],
}
