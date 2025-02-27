/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EF5B25',
        darkPrimary:'#D75221',
        complementary: '#259BEF',
        accent: '#EF5B25',
        'soft-purple':' #d6b4fc',
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
      animation: {
        typing: 'typing 3.5s steps(40) 1s 1 normal both',
        'blink-caret': 'blink-caret 0.75s step-end infinite',
      },
      keyframes: {
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        'blink-caret': {
          '50%': { borderColor: 'transparent' },
        },
      },
    },
  },
  plugins: [],
};
