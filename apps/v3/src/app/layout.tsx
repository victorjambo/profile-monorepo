import "./globals.css";

import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";

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
      <body className={`${comfortaa.className} text-slate-800`}>{children}</body>
    </html>
  );
}
