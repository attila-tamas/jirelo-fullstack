import { screens } from "./constants";

export default defineNuxtConfig({
  telemetry: false,
  devtools: { enabled: true },
  typescript: { shim: false },
  features: { inlineStyles: false },
  css: ["~/assets/css/main.scss"],
  postcss: {
    plugins: {
      "postcss-preset-env": { features: { "nesting-rules": false } },
    },
  },
  modules: [
    "@formkit/auto-animate/nuxt",
    "@nuxtjs/color-mode",
    "@nuxt/image",
    "@nuxtjs/supabase",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@unocss/nuxt",
    "vuetify-nuxt-module",
  ],
  colorMode: {
    classSuffix: "",
  },
  image: {
    screens: {
      ...screens,
    },
  },
  vuetify: {
    moduleOptions: {
      styles: {
        configFile: "assets/css/settings.scss",
      },
    },
    vuetifyOptions: {
      icons: {
        defaultSet: "unocss-mdi",
      },
    },
  },
});
