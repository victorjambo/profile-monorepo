import "./globals.css";
import "ui/styles.css";

import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import { Analytics } from "ui";
import { MetadataSEO } from "builders";

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
    <html className="light" lang="en">
      {process.env.NODE_ENV === "production" && <Analytics />}

      <body
        className={`${comfortaa.className} dark:text-slate-300 dark:bg-gray-900 bg-cover bg-fixed`}
      >
        {children}
      </body>
    </html>
  );
}
