import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "media",
  plugins: [],
  theme: {
    colors: {
      ...colors,
      summer: "#FFF2E2",
      serket: "#004580",
      vase: "#357EFC"
    },
  },
};
export default config;
