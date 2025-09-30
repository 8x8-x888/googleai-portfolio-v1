/** @type {import('tailwindcss').Config} */
export default {
  // THIS IS THE CRITICAL PART THAT WAS MISSING OR INCORRECT
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        'primary-blue': '#3B82F6', // Tailwind blue-500 for CTA focus
        'accent-cyan': '#06B6D4', // Tailwind cyan-500 for tech accents
        'dark-bg': '#111827',     // Tailwind gray-900 for dark background
        'light-text': '#F3F4F6',  // Tailwind gray-100 for main text
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
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