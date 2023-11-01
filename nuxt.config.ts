// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,
  devtools: { enabled: true },
  typescript: { shim: false },
  css: ["~/assets/css/main.scss"],
  postcss: {
    plugins: {
      "postcss-preset-env": {},
    },
  },
  modules: ["@nuxtjs/eslint-module", "@nuxtjs/fontaine"],
  eslint: { lintOnStart: false },
});
