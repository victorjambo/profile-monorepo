import type { SiteConfig } from "../types";
import { DEV_NAME } from "./constants";

export const siteConfig: SiteConfig = {
  name: DEV_NAME,
  description: "software engineer who loves building web apps and designing backend systems.",
  url: "https://mutai.dev",
  ogImage: "https://mutai.dev/images/banner.png",
  links: {
    twitter: "https://twitter.com/victor_jambo",
    github: "https://github.com/victorjambo/profile-monorepo",
  },
  twitter: "@victor_jambo"
};
