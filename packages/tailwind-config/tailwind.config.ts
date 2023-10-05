import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,md,mdx}"],
  darkMode: "class",
  plugins: [],
  extend: {
    theme: {
      colors: {
        summer: "#FFF2E2",
        serket: "#004580",
        vase: "#357EFC",
      },
    },
  },
};
export default config;
