// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,
  devtools: { enabled: true },
  typescript: { shim: false },
  css: ["~/assets/css/main.scss"],
  modules: ["@nuxtjs/eslint-module", "@nuxtjs/fontaine"],
  eslint: { lintOnStart: false },
});
