import "./globals.css";

import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import { MetadataSEO } from "shared-data";

const comfortaa = Comfortaa({
  subsets: ["latin"],
});

export const metadata: Metadata = MetadataSEO;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body
        className={`${comfortaa.className} light old-text-serket dark:text-slate-300 dark:bg-gray-900 bg-cover bg-fixed`}
      >
        {children}
      </body>
    </html>
  );
}
