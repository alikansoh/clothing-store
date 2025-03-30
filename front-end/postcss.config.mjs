const config = {
  plugins: ["@tailwindcss/postcss"],
  theme: {
    extend: {
      colors: {
        primary: "#3490dc",
        secondary: "#2ecc71",
        success: "#2ecc71",
        info: "#3490dc",
        warning: "#f1c40f",
        danger: "#e74c3c",
        light: "#f8f9fa",
        dark: "#343a40",
      },
      spacing: {
        12: "3rem",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
};

export default config;
