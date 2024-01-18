import type { Config } from "tailwindcss";
import { screens_px, sharedColors } from "./constants";

export default <Partial<Config>>{
  darkMode: "class",
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
  ],
  theme: {
    screens: screens_px,
    extend: {
      colors: sharedColors,
    },
  },
};
