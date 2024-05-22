/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      ssm: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },

    extend: {
      colors: {
        tatti: "#0496FF",
        project1_main: "#141C3A",
        cream: {
          50: "#EFE1BD",
          100: "#e8d7ae",
          150: "#cec5ad",
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 32s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [daisyui],
};
