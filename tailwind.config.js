/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sand': "url('/src/assets/images/sand.jpg')",
        
        spacing: {
          '90': "20rem",
          '128': '45rem',
          '144': '10rem',
          '120':"50rem",
          '110':"35rem"
        },
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
