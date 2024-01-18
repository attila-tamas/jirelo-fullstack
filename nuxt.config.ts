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
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@unocss/nuxt",
    "vuetify-nuxt-module",
  ],
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
  image: {
    screens: screens,
  },
  colorMode: {
    classSuffix: "",
  },
});
