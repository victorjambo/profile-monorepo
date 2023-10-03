"use client";

import "../styles/globals.css";
import "../styles/mdx.css";
import "nprogress/nprogress.css";

import NProgress from "nprogress";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "ui";
import { MetadataSEO, cn } from "shared-data";
import Head from "next/head";
import { ThemeProvider } from "../components/theme-provider";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = localFont({
  src: "../../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

// export const metadata: Metadata = {
//   ...MetadataSEO,
//   title: {
//     default: "Victor Mutai",
//     template: `%s | Victor Mutai`,
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Borrowed from:
  // https://github.com/vercel/next.js/discussions/42016
  useEffect(() => {
    const handleStart = (): void => {
      NProgress.start();
    };

    const handleStop = (): void => {
      NProgress.done();
    };

    handleStop();

    return () => {
      handleStart();
    };
  }, [pathname, searchParams]);

  return (
    <html lang="en">
      {process.env.NODE_ENV === "production" && <Analytics />}
      <Head>
        <link
          crossOrigin="anonymous"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          referrerPolicy="no-referrer"
          rel="stylesheet"
        />
      </Head>

      <body
        className={cn(
          "bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
