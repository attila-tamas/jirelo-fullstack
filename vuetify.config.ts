import { defineVuetifyConfiguration } from "vuetify-nuxt-module/custom-configuration";
import { sharedColors, themeDark, themeLight } from "./constants";

export default defineVuetifyConfiguration({
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        dark: false,
        colors: {
          ...sharedColors,
          ...themeLight,
        },
      },
      dark: {
        dark: true,
        colors: {
          ...sharedColors,
          ...themeDark,
        },
      },
    },
  },
});
