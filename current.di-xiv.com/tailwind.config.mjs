/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        "ultrawide-only": { min: "1920px" },
        "not-ultrawide": { max: "1920px" },
        "w-1560": { max: "1560px" },
        "mw-1560": { min: "1560px" },
        "w-1150": { max: "1150px" },
        "mw-1150": { min: "1150px" },
        "not-mobile": { min: "725px" },
        "mobile-only": { max: "725px" },
      },
      fontSize: {
        base: "1rem", // 16px
        large: "1.618rem", // 25.89px
        extra: "2.618rem", // 41.89px
        "2extra": "4.236rem", // 67.89px
      },
      padding: {
        safe: "env(safe-area-inset-bottom, 0px)",
        "safe-bottom": "max(env(safe-area-inset-bottom), 25px)",
      },
    },
  },
};
