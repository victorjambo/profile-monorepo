// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "tailwind-config/tailwind.config.ts";

sharedConfig.plugins = [require("@tailwindcss/typography")];

sharedConfig.theme = {
  extend: {
    colors: {
      border: "hsl(var(--border))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
    },
  },
};

const config: Pick<Config, "presets"> = {
  presets: [sharedConfig],
};

export default config;
