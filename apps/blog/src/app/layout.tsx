import "../styles/globals.css";
import "../styles/mdx.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { BlogAnalytics } from "ui";
import { MetadataSEO, cn } from "builders";
import { ThemeProvider } from "../components/theme-provider";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = localFont({
  src: "../../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  ...MetadataSEO,
  title: {
    default: "Blog | Victor Mutai",
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

        {process.env.NODE_ENV === "production" && <BlogAnalytics />}
      </body>
    </html>
  );
}
