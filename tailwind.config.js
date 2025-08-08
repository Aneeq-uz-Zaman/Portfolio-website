/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#0A0A1A',
        'dark-secondary': '#1A1A2E',
        'dark-tertiary': '#16213E',
        'neon-blue': '#00d4ff',
        'neon-pink': '#ff0080',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'mono': ['Roboto Mono', 'monospace'],
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0, 212, 255, 0.5)',
        'neon-pink': '0 0 20px rgba(255, 0, 128, 0.5)',
      },
      keyframes: {
        glow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin-slow 20s linear infinite',
      },
      animationDelay: {
        '500': '500ms',
        '1000': '1000ms',
      }
    },
  },
  plugins: [],
}