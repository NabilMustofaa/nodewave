/** @type {import('tailwindcss/types').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-background": "url('/img/hero-background.jpg')",
        "work-background": "url('/img/work-background.jpg')",
        "flow-background": "url('/img/flow-background.jpg')",
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};

module.exports = config;
