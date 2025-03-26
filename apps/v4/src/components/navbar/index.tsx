"use client";
import { useTheme } from "next-themes";
import Link from "next/link";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const nextTheme = theme === "light" ? "dark" : "light";

  return (
    <nav className="flex justify-between py-9">
      <Link href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Victor Mutai
        </span>
      </Link>
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/education">Education</Link>
        </li>
        <li>
          <Link href="/experience">Experience</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <button onClick={() => setTheme(nextTheme)}>{nextTheme}</button>
        </li>
      </ul>
    </nav>
  );
}
