/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blink: "blink 1.5s infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { backgroundColor: "#105d97" }, // Màu chủ đạo #105d97
          "50%": { backgroundColor: "#5e9bd1" }, // Màu nhạt hơn của #105d97
        },
      },
      fontFamily: {
        heading: ["var(--ltn__heading-font)", "sans-serif"], // Sử dụng font Rajdhani
      },
      colors: {
        "primary-dark": "#1f1f1f",
        primary: "#ffffff",
        "brand": {
          DEFAULT: "#105d97",
          light: "#5e9bd1",
          dark: "#0c4d7d",
        },
        highlight: {
          dark: "#FFFFFF",
          light: "#1f1f1f",
        },
        secondary: {
          dark: "#707070",
          light: "#e6e6e6",
        },
        action: "#3B82F6",
      },
      transitionProperty: {
        width: "width",
      },
      // Thêm textShadow để tạo hiệu ứng phát sáng
      textShadow: {
        glow: "0 0 4px rgba(34, 197, 94, 0.8)", // Hiệu ứng phát sáng màu xanh lá cây (green-500)
      },
    },
    backgroundImage: {
      "png-pattern": "url('/empty-bg.jpg')",
      "gradient-to-b": "linear-gradient(to bottom, #22c55e, #16a34a)", // Gradient xanh lá
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar"),
    // Thêm plugin để sử dụng text-shadow
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-glow": {
          textShadow: "0 0 4px rgba(34, 197, 94, 0.8)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
