/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/images/R-C.jpg')",
      },
      colors: {
        // Using legacy `rgba`
        trt: 'rgba(var(--trans-bg-color), 0.5)',
      },
    },
  },
  plugins: [],
}