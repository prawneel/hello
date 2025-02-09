/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      boxShadow: {
        'red-glow': '0 0 15px rgba(255, 0, 0, 0.5)',
        'blue-glow': '0 0 15px rgba(0, 0, 255, 0.5)',
        'red-glow-lg': '0 0 30px rgba(255, 0, 0, 0.5)',
        'blue-glow-lg': '0 0 30px rgba(0, 0, 255, 0.5)',
      },
    },
  },
  plugins: [],
};