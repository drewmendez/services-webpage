import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",

        screens: {
          // sm: "600px",
          // md: "728px",
          // lg: "984px",
          // xl: "1440px",
          "2xl": "1496px",
          // "2xl": "1200px",
        },
      },
      backgroundImage: {
        hero: "url('/hero-bg.jpeg')",
      },
    },
    screens: {
      "2xl": { max: "1535px" },

      xl: { max: "1370px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1100px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "860px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
export default config;
