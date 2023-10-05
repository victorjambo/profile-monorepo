// tailwind config is required for editor support
import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";
import sharedConfig from "tailwind-config/tailwind.config.ts";

sharedConfig.plugins = [require("@tailwindcss/typography")];

sharedConfig.theme = {
  extend: {
    colors: {
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      border: "hsl(var(--border))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
    },
    fontFamily: {
      sans: ["var(--font-sans)", ...fontFamily.sans],
      heading: ["var(--font-heading)", ...fontFamily.sans],
    },
  },
};

const config: Pick<Config, "presets"> = {
  presets: [sharedConfig],
};

export default config;
