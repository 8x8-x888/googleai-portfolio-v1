/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#4361EE',
        'accent-cyan': '#00F5D4',
        'highlight': '#F72585',
        'dark-bg': '#111827',
        'light-text': '#F3F4F6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        headings: ['Space Grotesk', 'sans-serif'],
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
};
