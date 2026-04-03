/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mi-navy': '#0B1A3D',
        'mi-blue': '#007BFF',
        'mi-green': '#28A745',
        'mi-yellow': '#FFC107',
        'mi-light': '#F3F6FA',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
