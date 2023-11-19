import { defineVuetifyConfiguration } from "vuetify-nuxt-module/custom-configuration";
import { screens, sharedColors, themeDark, themeLight } from "./constants";

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
  defaults: {
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
      baseColor: "neutral-400",
      bgColor: "input-bg",
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
  display: {
    mobileBreakpoint: "sm",
    thresholds: screens,
  },
});
