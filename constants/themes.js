import { COLORS } from "./colors";

const themeLight = {
  background: COLORS.NEUTRAL_LIGHTEN_4,
  "on-background": COLORS.BLACK,

  surface: COLORS.NEUTRAL_LIGHTEN_5,
  "on-surface": COLORS.BLACK,

  "surface-variant": COLORS.NEUTRAL_DARKEN_4,
  "on-surface-variant": COLORS.WHITE,

  "input-bg": COLORS.NEUTRAL_DARKEN_1,
};

const themeDark = {
  background: COLORS.NEUTRAL_DARKEN_4,
  "on-background": COLORS.NEUTRAL_LIGHTEN_5,

  surface: COLORS.NEUTRAL_DARKEN_3,
  "on-surface": COLORS.NEUTRAL_LIGHTEN_5,

  "surface-variant": COLORS.NEUTRAL_LIGHTEN_3,
  "on-surface-variant": COLORS.NEUTRAL_DARKEN_5,

  "input-bg": COLORS.NEUTRAL_LIGHTEN_1,
};

export const themes = {
  themeLight,
  themeDark,
};

export const sharedColors = {
  "neutral-0": COLORS.WHITE,
  "neutral-50": COLORS.NEUTRAL_LIGHTEN_5,
  "neutral-100": COLORS.NEUTRAL_LIGHTEN_4,
  "neutral-200": COLORS.NEUTRAL_LIGHTEN_3,
  "neutral-300": COLORS.NEUTRAL_LIGHTEN_2,
  "neutral-400": COLORS.NEUTRAL_LIGHTEN_1,
  "neutral-500": COLORS.NEUTRAL_BASE,
  "neutral-600": COLORS.NEUTRAL_DARKEN_1,
  "neutral-700": COLORS.NEUTRAL_DARKEN_2,
  "neutral-800": COLORS.NEUTRAL_DARKEN_3,
  "neutral-900": COLORS.NEUTRAL_DARKEN_4,
  "neutral-950": COLORS.NEUTRAL_DARKEN_5,
  "neutral-1000": COLORS.BLACK,

  "primary-200": COLORS.PRIMARY_LIGHTEN_3,
  "primary-300": COLORS.PRIMARY_LIGHTEN_2,
  "primary-400": COLORS.PRIMARY_LIGHTEN_1,
  "primary-500": COLORS.PRIMARY_BASE,
  "primary-600": COLORS.PRIMARY_DARKEN_1,
  "primary-700": COLORS.PRIMARY_DARKEN_2,
  "primary-800": COLORS.PRIMARY_DARKEN_3,

  "accent-200": COLORS.ACCENT_LIGHTEN_3,
  "accent-300": COLORS.ACCENT_LIGHTEN_2,
  "accent-400": COLORS.ACCENT_LIGHTEN_1,
  "accent-500": COLORS.ACCENT_BASE,
  "accent-600": COLORS.ACCENT_DARKEN_1,
  "accent-700": COLORS.ACCENT_DARKEN_2,
  "accent-800": COLORS.ACCENT_DARKEN_3,

  "positive-200": COLORS.GREEN_LIGHTEN_3,
  "positive-300": COLORS.GREEN_LIGHTEN_2,
  "positive-400": COLORS.GREEN_LIGHTEN_1,
  "positive-500": COLORS.GREEN_BASE,
  "positive-600": COLORS.GREEN_DARKEN_1,
  "positive-700": COLORS.GREEN_DARKEN_2,
  "positive-800": COLORS.GREEN_DARKEN_3,

  "warning-200": COLORS.YELLOW_LIGHTEN_3,
  "warning-300": COLORS.YELLOW_LIGHTEN_2,
  "warning-400": COLORS.YELLOW_LIGHTEN_1,
  "warning-500": COLORS.YELLOW_BASE,
  "warning-600": COLORS.YELLOW_DARKEN_1,
  "warning-700": COLORS.YELLOW_DARKEN_2,
  "warning-800": COLORS.YELLOW_DARKEN_3,

  "destructive-200": COLORS.RED_LIGHTEN_3,
  "destructive-300": COLORS.RED_LIGHTEN_2,
  "destructive-400": COLORS.RED_LIGHTEN_1,
  "destructive-500": COLORS.RED_BASE,
  "destructive-600": COLORS.RED_DARKEN_1,
  "destructive-700": COLORS.RED_DARKEN_2,
  "destructive-800": COLORS.RED_DARKEN_3,
};
