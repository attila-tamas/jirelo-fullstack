import { defineVuetifyConfiguration } from "vuetify-nuxt-module/custom-configuration";
import { screens, sharedColors, themes } from "./constants";
import codeTable from "./utils/codeTable";

export default defineVuetifyConfiguration({
  theme: {
    defaultTheme: codeTable.theme.LIGHT,
    themes: {
      light: {
        dark: false,
        colors: {
          ...sharedColors,
          ...themes.themeLight,
        },
      },
      dark: {
        dark: true,
        colors: {
          ...sharedColors,
          ...themes.themeDark,
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
  display: {
    mobileBreakpoint: "sm",
    thresholds: screens,
  },
});
