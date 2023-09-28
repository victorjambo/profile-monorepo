import "./globals.css";
import "ui/styles.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "ui";
import { MetadataSEO } from "shared-data";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...MetadataSEO,
  title: "logs - Victor Mutai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      {process.env.NODE_ENV === "production" && <Analytics />}

      <body
        className={`${inter.className} light text-serket dark:text-slate-300 bg-summer dark:bg-gray-900 bg-cover bg-fixed`}
      >
        {children}
      </body>
    </html>
  );
}
