const screens = {
  xs: 360,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
};

const unit = "px";
const screens_px = {
  xs: screens.xs + unit,
  sm: screens.sm + unit,
  md: screens.md + unit,
  lg: screens.lg + unit,
  xl: screens.xl + unit,
  xxl: screens.xxl + unit,
};

export { screens, screens_px };
