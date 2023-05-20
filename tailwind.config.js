module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray_600: "#6f6f6f",
        gray_400: "#c0c0c0",
        blue_gray_100: "#d0d0d0",
        gray_500: "#a0a0a0",
        blue_gray_50: "#f1f1f1",
        gray_800: "#404040",
        gray_300: "#e0e0e0",
        light_blue_900: "#055389",
        gray_100: "#f7f7f7",
        black_900: "#000000",
        teal_900: "#02365a",
        light_blue_A700: "#0096ff",
        white_A700: "#ffffff",
      },
      fontFamily: { poppins: "Poppins", inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
