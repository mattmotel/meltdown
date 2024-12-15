import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' }
        },
        flash: {
          '0%': { backgroundColor: 'black' },
          '100%': { backgroundColor: 'white' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '20%': { opacity: '0.1' },
          '40%': { opacity: '0.3' },
          '60%': { opacity: '0.5' },
          '80%': { opacity: '0.8' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        flash: 'flash 3s forwards',
        fadeIn: 'fadeIn 5s ease-in forwards',
        blink: 'blink 1s steps(1) infinite'
      }
    },
  },
  plugins: [],
} satisfies Config;
