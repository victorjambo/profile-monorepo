import "./globals.css";
import "ui/styles.css";

import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
// import { Header } from "ui";
import Script from 'next/script'

const comfortaa = Comfortaa({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Victor Mutai",
  description: "Senior Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={`${comfortaa.className} old-text-slate-800 text-[#004580] bg-[#fff2e2]`}>{children}</body>
    </html>
  );
}
