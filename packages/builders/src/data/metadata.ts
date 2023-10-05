import type { Metadata } from "next";
import { siteConfig } from "./site";

export const MetadataSEO: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  keywords: [
    "victor",
    "mutai",
    "web3",
    "software engineer",
    "senior software engineer",
  ],
  icons: [
    { rel: "icon", url: `${siteConfig.url}/images/icons/icon.png` },
    {
      rel: "apple-touch-icon",
      url: `${siteConfig.url}/images/icons/apple-icon-180x180.png`,
      sizes: "180x180",
    },
    {
      rel: "apple-touch-icon",
      url: `${siteConfig.url}/images/icons/apple-icon-192x192.png`,
      sizes: "192x192",
    },
    {
      rel: "apple-touch-icon",
      url: `${siteConfig.url}/images/icons/apple-icon-512x512.png`,
      sizes: "512x512",
    },
    {
      rel: "apple-touch-startup-image",
      url: `${siteConfig.url}/images/icons/apple-splash-1125-2436.png`,
      media: "(orientation: portrait)",
    },
    {
      rel: "apple-touch-startup-image",
      url: `${siteConfig.url}/images/icons/apple-splash-2436-1125.png`,
      media: "(orientation: landscape)",
    },
    { rel: "apple-touch-icon", url: "/images/icons/" },
    { rel: "apple-touch-icon", url: "/images/icons/" },
  ],
  manifest: `${siteConfig.url}/manifest.json`,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/banner.png`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: siteConfig.twitter,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/banner.png`],
  },
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: "default",
  },
  abstract: "Senior Software Engineer",
  category: "Portfolio",
  classification: "Personal Branding",
  publisher: "Vercel",
  creator: siteConfig.name,
  generator: "Next.js",
  applicationName: siteConfig.name,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};
