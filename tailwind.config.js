module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    screens: {
      sm: { max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      "hover-btn": "#f8f9fa",
      primari: "#5F9EFD",
      border: "#ecedf0",
      backgroundColor: "white",
      red: "red",
      text: "white",
      textTitle: "#3c3e49",
      backgroundBtn: "#dfe0e6",
      textColorBlur: "#83889e",
      backgroundBtnDetail: "#f6f7fa",
      checked: "#6c00ea",
      backgroundBuild: "#00d659",
      backgroundFixed: "#00000024",
      backgroundAddTemplate: "#00d659",
      borderListSearch: "#333333",
      backgroundTag: "#f1f1f1",
      buttonSubmitBackground: "#7ec84c",
      backgroundIsLoading: "#e2e8f0",
    },
  },
  plugins: [],
};
