/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "h1 + *": {
              marginTop: "0",
              marginBottom: "2rem",
            },
            "ul + *": {
              marginTop: "0",
            },
            "ol + *": {
              marginTop: "0",
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
