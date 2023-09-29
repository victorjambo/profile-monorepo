import "./globals.css";
import "ui/styles.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "ui";
import { MetadataSEO } from "shared-data";
import { ThemeProvider } from "../components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...MetadataSEO,
  title: {
    default: "Victor Mutai",
    template: `%s | Victor Mutai`,
  },
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
        className={`${inter.className} dark:text-slate-300 dark:bg-gray-900`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
