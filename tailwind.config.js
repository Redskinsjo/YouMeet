const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen",
      ],
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        // ".vh-70px": {
        //   height: "calc(100vh-70px)",
        // },
      };

      addUtilities(newUtilities);
    }),
  ],
};
