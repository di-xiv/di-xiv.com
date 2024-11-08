import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://di-xiv.com",
  output: "static",
  prefetch: true,
  prefetch: {
    defaultStrategy: "tap",
  },
  integrations: [
    react(),
    mdx(),
    tailwind(),
    sitemap(),
    robotsTxt({
      host: "di-xiv.com",
      sitemap: ["https://di-xiv.com/sitemap-index.xml"],
      policy: [
        {
          userAgent: "*",
          allow: "/",
          disallow: ["/contact", "/*/contact"],
          crawlDelay: 10,
        },
      ],
    }),
  ],

  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "jp", "pt"],
    fallback: {
      es: "en",
      jp: "en",
      pt: "en",
    },
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
