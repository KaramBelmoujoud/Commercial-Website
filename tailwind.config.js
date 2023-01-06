/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sand': "url('/src/assets/images/sand.jpg')",
        
      }
    },
  },
  plugins: [],
}
