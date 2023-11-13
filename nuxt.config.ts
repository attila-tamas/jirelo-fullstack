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
    screens: {
      xs: 360,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
});
