import "./globals.css";
import "ui/styles.css";

import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import { Analytics } from "ui";

const comfortaa = Comfortaa({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Victor Mutai",
  description: "Senior Software Engineer",
  authors: [{ name: "Victor Mutai", url: "https://mutai.dev" }],
  keywords: [
    "victor",
    "mutai",
    "web3",
    "software engineer",
    "senior software engineer",
  ],
  icons: [
    { rel: "icon", url: "/images/icons/icon.png" },
    {
      rel: "apple-touch-icon",
      url: "/images/icons/apple-icon-180x180.png",
      sizes: "180x180",
    },
    {
      rel: "apple-touch-icon",
      url: "/images/icons/apple-icon-192x192.png",
      sizes: "192x192",
    },
    {
      rel: "apple-touch-icon",
      url: "/images/icons/apple-icon-512x512.png",
      sizes: "512x512",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/images/icons/apple-splash-1125-2436.png",
      media: "(orientation: portrait)",
    },
    {
      rel: "apple-touch-startup-image",
      url: "/images/icons/apple-splash-2436-1125.png",
      media: "(orientation: landscape)",
    },
    { rel: "apple-touch-icon", url: "/images/icons/" },
    { rel: "apple-touch-icon", url: "/images/icons/" },
  ],
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    url: "https://mutai.dev",
    title: "Victor Mutai",
    description: "Senior Software Engineer",
    siteName: "Portfolio website",
    images: [
      {
        url: "/images/banner.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@site",
    creator: "@victor_jambo",
    images: "/images/banner.png",
  },
  appleWebApp: {
    capable: true,
    title: "Victor Mutai",
    statusBarStyle: "default",
  },
  abstract: "Senior Software Engineer",
  category: "Portfolio",
  classification: "Personal Branding",
  publisher: "Netlify",
  creator: "Victor Mutai",
  generator: "Next.js",
  applicationName: "Victor Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <Analytics />

      <body
        className={`${comfortaa.className} old-text-slate-800 text-[#004580] bg-[#fff2e2]`}
      >
        {children}
      </body>
    </html>
  );
}
