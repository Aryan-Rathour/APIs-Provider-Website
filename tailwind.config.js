/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-blue': '#4A90E2',
        'sky-blue': '#4A90E2',
        'dark-gray': '#333333',
        'light-gray': '#f4f4f4',
        'light-silver': '#D1D3D4',
        'soft-green': '#68D391',
        'charcoal-black': '#212121',
        'medium-blue': '#007BFF',
        'gold': '#FFB900',
        'beige': '#F6F4EC',
        'lime-green': '#A0D911',
      },
    },
  },
  plugins: [],
};
