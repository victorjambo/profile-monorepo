"use client";
import { ThemeProvider } from "next-themes";
import ScrollControlProvider from "../context/scrollControl";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ScrollControlProvider>
      <ThemeProvider defaultTheme="dark" attribute="class" storageKey="theme">
        {children}
      </ThemeProvider>
    </ScrollControlProvider>
  );
}
