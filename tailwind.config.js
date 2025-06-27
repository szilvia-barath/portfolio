// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bone: '#eae6dc',
        blackish: '#0e0e0e',
        electric: '#7E30E1',
      },
      fontFamily: {
        sans: [ "apparat-light", 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
