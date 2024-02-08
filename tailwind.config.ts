import type { Config } from "tailwindcss";
import { colors_tailwind, screens_px } from "./constants";

export default <Partial<Config>>{
  darkMode: "class",
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
  ],
  theme: {
    screens: {
      ...screens_px,
    },
    colors: {
      ...colors_tailwind,
    },
  },
};
