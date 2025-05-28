/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '0.4' },
        },
        shoot: {
          '0%': {
            transform: 'translateX(0) translateY(0) rotate(25deg)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateX(120vw) translateY(50vh) rotate(25deg)',
            opacity: '0',
          },
        },
      },
      animation: {
        twinkle: 'twinkle 8s linear infinite',
        shoot: 'shoot 3s ease-in infinite',
      },
    },
  },
  plugins: [],
}
