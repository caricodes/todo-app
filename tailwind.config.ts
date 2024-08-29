import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // principal
        purple: {
          light: "#DDD2EF",
          base: "#9359F3",
          dark: "#6F3CC3",
        },
        green: {
          light: "#BFE3D0",
          base: "#479C6E",
          dark: "#2D6C4A",
        },
        // base
        gray: {
          100: "#F0EDF2",
          200: "#E5E2E9",
          330: "#E0DCE4",
          400: "#D1CBD7",
          500: "#6B6572",
          600: "#262428",
        },
        // feedback
        danger: "#C2464D",
      },
    },
  },
  plugins: [],
};

export default config;
