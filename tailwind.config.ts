import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brown_pink: '#AD8D73',
        light_pink: '#E2CDC8',
        dark_red: '#C03E3E',
        pink: '#E19595',
        dark_green: "#898B67",
        light: "#E2CFC5",
        ditry_green: '#A8AB9A',
        beige: '#D5BAAB',
        light_beige: '#E2CFC5',
        dark_beige:'#B48B75'
      },
    },
  },
  plugins: [],
};
export default config;
