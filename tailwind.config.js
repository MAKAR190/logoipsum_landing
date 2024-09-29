/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        headline1: "48px",
        headline2: "40px",
        headline3: "36px",
        headline4: "24px",
        copy: "18px",
      },
      colors: {
        primary: {
          darkblack: "#0C0C0D",
          blue: "#164CD8",
          white: "#FAFAFA",
        },
        secondary: {
          lightgrey: "#EAEAEA",
          darkgrey: "#9F9F9F",
          greyblue: "#545989",
          lightblue: "#F0F4FD",
        },
      },
      boxShadow: {
        custom: "0px 4px 5px 0px rgba(0, 0, 0, 0.1)",
        customblue: "0px 4px 4px 0px #164CD81A",
        customhero: "0px 4px 10px 0px rgba(0, 0, 0, 0.1)",
        customwhywe: "0px 4px 10px 0px rgba(0, 0, 0, 0.05)",
        custominput: "0px 4px 10px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
