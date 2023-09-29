"use client";
import { useTheme } from "next-themes";
import { Menu } from "@headlessui/react";
import {
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

export function ThemeToggle(): JSX.Element {
  const { setTheme } = useTheme();

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground rounded-md h-8 w-8 px-0">
        <SunIcon className="w-5 h-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="w-5 h-5 absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Menu.Button>
      <Menu.Items className="absolute bottom-10 right-0 mt-2 min-w-[8rem] divide-y rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <Menu.Item>
          {({ active }) => (
            <button
              className={`${
                active ? "font-bold" : ""
              } group flex w-full items-center px-2 py-2 text-sm`}
              onClick={() => {
                setTheme("light");
              }}
              type="button"
            >
              <SunIcon className="w-5 h-5 pr-1" />
              <span>Light</span>
            </button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button
              className={`${
                active ? "font-bold" : ""
              } group flex w-full items-center px-2 py-2 text-sm`}
              onClick={() => {
                setTheme("dark");
              }}
              type="button"
            >
              <MoonIcon className="w-5 h-5 pr-1" />
              <span>Dark</span>
            </button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button
              className={`${
                active ? "font-bold" : ""
              } group flex w-full items-center px-2 py-2 text-sm`}
              onClick={() => {
                setTheme("system");
              }}
              type="button"
            >
              <ComputerDesktopIcon className="w-5 h-5 pr-1" />
              <span>System</span>
            </button>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
