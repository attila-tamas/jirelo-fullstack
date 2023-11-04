import { defineVuetifyConfiguration } from "vuetify-nuxt-module/custom-configuration";
import { colors as c } from "./constants/colors";

const customColors = {
  neutral: c.NEUTRAL.BASE,
  "neutral-lighten-1": c.NEUTRAL.LIGHTEN_1,
  "neutral-lighten-2": c.NEUTRAL.LIGHTEN_2,
  "neutral-lighten-3": c.NEUTRAL.LIGHTEN_3,
  "neutral-lighten-4": c.NEUTRAL.LIGHTEN_4,
  "neutral-darken-1": c.NEUTRAL.DARKEN_1,
  "neutral-darken-2": c.NEUTRAL.DARKEN_2,
  "neutral-darken-3": c.NEUTRAL.DARKEN_3,
  "neutral-darken-4": c.NEUTRAL.DARKEN_4,

  primary: c.PRIMARY.BASE,
  "primary-lighten-1": c.PRIMARY.LIGHTEN_1,
  "primary-lighten-2": c.PRIMARY.LIGHTEN_2,
  "primary-lighten-3": c.PRIMARY.LIGHTEN_3,
  "primary-darken-1": c.PRIMARY.DARKEN_1,
  "primary-darken-2": c.PRIMARY.DARKEN_2,
  "primary-darken-3": c.PRIMARY.DARKEN_3,

  accent: c.ACCENT.BASE,
  "accent-lighten-1": c.ACCENT.LIGHTEN_1,
  "accent-lighten-2": c.ACCENT.LIGHTEN_2,
  "accent-lighten-3": c.ACCENT.LIGHTEN_3,
  "accent-darken-1": c.ACCENT.DARKEN_1,
  "accent-darken-2": c.ACCENT.DARKEN_2,
  "accent-darken-3": c.ACCENT.DARKEN_3,

  positive: c.POSITIVE.BASE,
  "positive-lighten-1": c.POSITIVE.LIGHTEN_1,
  "positive-lighten-2": c.POSITIVE.LIGHTEN_2,
  "positive-lighten-3": c.POSITIVE.LIGHTEN_3,
  "positive-darken-1": c.POSITIVE.DARKEN_1,
  "positive-darken-2": c.POSITIVE.DARKEN_2,
  "positive-darken-3": c.POSITIVE.DARKEN_3,

  warning: c.WARNING.BASE,
  "warning-lighten-1": c.POSITIVE.LIGHTEN_1,
  "warning-lighten-2": c.POSITIVE.LIGHTEN_2,
  "warning-lighten-3": c.POSITIVE.LIGHTEN_3,
  "warning-darken-1": c.POSITIVE.DARKEN_1,
  "warning-darken-2": c.POSITIVE.DARKEN_2,
  "warning-darken-3": c.POSITIVE.DARKEN_3,

  destructive: c.DESTRUCTIVE.BASE,
  "destructive-lighten-1": c.DESTRUCTIVE.BASE,
  "destructive-lighten-2": c.DESTRUCTIVE.BASE,
  "destructive-lighten-3": c.DESTRUCTIVE.BASE,
  "desructive-darken-1": c.DESTRUCTIVE.BASE,
  "desructive-darken-2": c.DESTRUCTIVE.BASE,
  "desructive-darken-3": c.DESTRUCTIVE.BASE,
};

export default defineVuetifyConfiguration({
  icons: false,
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        dark: false,
        colors: customColors,
      },
      dark: {
        dark: true,
        colors: customColors,
      },
    },
  },
});
