// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  // ... existing content
  theme: {
    extend: {
      // ... existing extend content
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
}