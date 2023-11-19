import { screens } from "./constants";

export default defineNuxtConfig({
  telemetry: false,
  experimental: { inlineSSRStyles: false },
  devtools: { enabled: true },
  typescript: { shim: false },
  css: ["~/assets/css/main.scss"],
  postcss: {
    plugins: {
      "postcss-preset-env": { features: { "nesting-rules": false } },
    },
  },
  modules: ["@nuxt/image", "@nuxtjs/tailwindcss", "vuetify-nuxt-module"],
  vuetify: {
    moduleOptions: {
      styles: {
        configFile: "assets/css/settings.scss",
      },
    },
  },
  image: {
    screens: screens,
  },
});
