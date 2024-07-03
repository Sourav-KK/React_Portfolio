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
          25: "#F9F5E9",
          50: "#EFE1BD",
          100: "#e8d7ae",
          150: "#cec5ad",
          200: "#AE944F",
        },
        golden: {
          50: "#DFC57B",
          100: "#EDD796",
          150: "#F2DDA1",
        },
        oppBlue: " #F8A67A",
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
