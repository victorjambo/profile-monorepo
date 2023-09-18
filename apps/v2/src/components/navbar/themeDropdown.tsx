"use client";
import { useTheme } from "next-themes";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { Theme } from "../../utils/constants";
import { classNames } from "../../utils/classNames";

export default function ThemeDropdown(): JSX.Element {
  const { theme, setTheme, systemTheme } = useTheme();
  let Icon;

  switch (theme) {
    case Theme.LIGHT:
      Icon = SunIcon;
      break;
    case Theme.DARK:
      Icon = MoonIcon;
      break;
    case Theme.SYSTEM:
      Icon = systemTheme === Theme.DARK ? MoonIcon : SunIcon;
      break;
    default:
      Icon = MoonIcon;
      break;
  }

  return (
    <Menu as="div" className="ml-3 relative">
      <div>
        <Menu.Button className="flex text-sm rounded-full">
          <span className="sr-only">Theme</span>
          <Icon className="h-5 w-5 text-sky-500 dark:text-green zoom-hover-center-lg" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="font-semibold origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg py-1 bg-white dark:bg-slate-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <span
                className={classNames(
                  active ? "bg-gray-100 dark:bg-slate-600/30" : "",
                  theme === Theme.LIGHT
                    ? "text-sky-500 dark:text-green"
                    : "text-gray-700 dark:text-slate-300",
                  "px-4 py-2 text-sm flex flex-row space-x-2 cursor-pointer"
                )}
                onClick={() => setTheme(Theme.LIGHT)}
              >
                <SunIcon className="w-5 h-5" />
                <span>Light</span>
              </span>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <span
                className={classNames(
                  active ? "bg-gray-100 dark:bg-slate-600/30" : "",
                  theme === Theme.LIGHT
                    ? "text-gray-700 dark:text-slate-300"
                    : "text-sky-500 dark:text-green",
                  "px-4 py-2 text-sm flex flex-row space-x-2 cursor-pointer"
                )}
                onClick={() => setTheme(Theme.DARK)}
              >
                <MoonIcon className="w-5 h-5" />
                <span>Dark</span>
              </span>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <span
                className={classNames(
                  active ? "bg-gray-100 dark:bg-slate-600/30" : "",
                  theme === Theme.SYSTEM
                    ? "text-sky-500 dark:text-green"
                    : "text-gray-700 dark:text-slate-300",
                  "px-4 py-2 text-sm flex flex-row space-x-2 cursor-pointer"
                )}
                onClick={() => setTheme(Theme.SYSTEM)}
              >
                <ComputerDesktopIcon className="w-5 h-5" />
                <span>System</span>
              </span>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
