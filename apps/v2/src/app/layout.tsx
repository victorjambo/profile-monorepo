import "./globals.css";
import "ui/styles.css";
import type { Metadata } from "next";
import { MetadataSEO } from "builders";
import Header from "../components/header";
import { Providers } from "./providers";

export const metadata: Metadata = MetadataSEO;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html className="scroll-smooth w-full box-border" lang="en">
      <Header />
      <body className="bg-white dark:bg-slate-900 font-mono">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
