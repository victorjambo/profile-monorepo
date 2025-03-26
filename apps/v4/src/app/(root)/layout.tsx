import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MetadataSEO } from "builders";
import { Navbar } from "../../components/navbar";
import { ThemeProvider } from "../../components/theme-provider";
// import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = MetadataSEO;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased mx-auto container`}
      >
        <React.StrictMode>
          <React.Suspense fallback={<div>Loading</div>}>
            <ThemeProvider defaultTheme="light" enableSystem={false}>
              <Navbar />
              {children}
            </ThemeProvider>
          </React.Suspense>
        </React.StrictMode>
      </body>
    </html>
  );
}
