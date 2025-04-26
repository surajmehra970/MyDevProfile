/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: "#64748b",
        dark: '#1F2937',
        light: "#f8fafc",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 0.8 },
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float 4s ease-in-out infinite',
        'float-slower': 'float 5s ease-in-out infinite',
        'float-medium': 'float 3.5s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} 