module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        general: ["Nunito"],
      },
      height: {
        big: "6500px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
