import type { Config } from "tailwindcss";
import { screens_px, tailwindColors } from "./constants";

export default <Partial<Config>>{
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
  ],
  theme: {
    screens: screens_px,
    extend: {
      colors: tailwindColors,
    },
  },
};
