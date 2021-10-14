const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      DEFAULT: "var(--brand-shadow)",
    },
    extend: {
      transitionProperty: {
        border: "border",
        "background-color": "background-color",
      },
      colors: {
        orange: "var(--brand-orange)",
        blackish: "var(--brand-blackish)",
        slate: "var(--brand-slate)",
        whale: "var(--brand-whale)",
        haze: "var(--brand-haze)",
        sky: "var(--brand-sky)",
        mist: "var(--brand-mist)",
      },
      fontFamily: {
        sans: ['"Source Sans Pro"', ...defaultTheme.fontFamily.sans],
        playfair: ['"Playfair Display"'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
