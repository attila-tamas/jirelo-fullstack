import { defineVuetifyConfiguration } from "vuetify-nuxt-module/custom-configuration";
import { colors_vuetify, screens, themes_vuetify } from "./constants";

export default defineVuetifyConfiguration({
  display: {
    mobileBreakpoint: "xs",
    thresholds: {
      ...screens,
    },
  },
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        dark: false,
        colors: {
          ...colors_vuetify,
          ...themes_vuetify.light,
        },
      },
      dark: {
        dark: true,
        colors: {
          ...colors_vuetify,
          ...themes_vuetify.dark,
        },
      },
    },
  },
  defaults: {
    VAlert: {
      variant: "outlined",
      style: "border: none; font-size: 0.875rem; padding-block: 0.25rem;",
    },
    VBtn: {
      size: "large",
      style: "font-weight: 600; text-transform: none;",
    },
    VContainer: {
      fluid: true,
      style: "padding: 0",
    },
    VSheet: {
      elevation: "2",
      rounded: true,
    },
    VTextField: {
      baseColor: "input-bg",
      color: "primary-500",
      clearIcon: "mdi-window-close",
      density: "compact",
      flat: true,
      singleLine: true,
      variant: "outlined",
    },
    VTooltip: {
      contentClass: "font-medium",
    },
  },
});
