"use client";
import { ThemeProvider } from "next-themes";
import ScrollControlProvider from "../context/scrollControl";

export function Providers({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <ScrollControlProvider>
      <ThemeProvider attribute="class" defaultTheme="dark" storageKey="theme">
        {children}
      </ThemeProvider>
    </ScrollControlProvider>
  );
}
