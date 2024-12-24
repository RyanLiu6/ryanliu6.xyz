import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,astro}", "./node_modules/@ryanliu6/xi/dist/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
      },
    },
  },
  plugins: [typography],
  darkMode: "selector",
};
