// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "tailwind-config/tailwind.config.ts";
import colors from "tailwindcss/colors";

sharedConfig.theme = {
  extend: {
    gridTemplateColumns: {
      image: "3fr 2fr",
    },
    fontFamily: {
      mono: ["SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "monospace"],
      sans: [
        "Calibre",
        "Inter",
        "San Francisco",
        "SF Pro Text",
        "-apple-system",
        "system-ui",
        "sans-serif",
      ],
    },
    colors: {
      green: {
        ...colors.green,
        DEFAULT: "#64FFDA",
        tint: "rgba(100, 255, 218, 0.1)",
      },
      blue: {
        ...colors.blue,
        navy: {
          DEFAULT: "#0a192f",
          dark: "#020c1b",
          light: "#112240",
          lightest: "#233554",
        },
      },
      slate: {
        ...colors.slate,
        DEFAULT: "#8892b0",
        light: "#a8b2d1",
        lightest: "#ccd6f6",
      },
    },
  },
};

const config: Pick<Config, "presets"> = {
  presets: [sharedConfig],
};

export default config;
