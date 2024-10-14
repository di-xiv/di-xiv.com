/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./src/**/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./src/**/**/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./src/**/**/**/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      screens: {
        "ultrawide-only": { min: "1920px" },
        w1920: { max: "1920px" },
        mw1366: { min: "1366px" },
        w1366: { max: "1366px" },
        w1112: { max: "1112px" },
        w905: { max: "905px" },
        "not-mobile": { min: "725px" },
        "mobile-only": { max: "725px" },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
