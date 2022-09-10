/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        xs: { min: "320px", max: "639px" },
      },
    },
  },
  plugins: [],
};
