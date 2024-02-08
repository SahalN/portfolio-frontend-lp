/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./app/**/*.{jsx,tsx}", "./components/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        rubik: ["var(--font-rubik)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
