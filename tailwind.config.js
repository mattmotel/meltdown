/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        glitch: 'glitch 1s ease-in-out infinite',
        flicker: 'flicker 0.15s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '25%': { transform: 'translate(2px, 2px)' },
          '50%': { transform: 'translate(-2px, -2px)' },
          '75%': { transform: 'translate(-2px, 2px)' },
        },
        flicker: {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
} 