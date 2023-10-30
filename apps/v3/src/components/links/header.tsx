"use client";
import React from "react";
import {
  ArrowDownLeftIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline";
import { Popover } from "@headlessui/react";

const links = [
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/mutaivictor/",
  },
  {
    title: "Github",
    link: "https://github.com/victorjambo/",
  },
  {
    title: "Blogs",
    link: process.env.NEXT_PUBLIC_BLOG_APP_URL ?? "https://blog.mutai.dev",
  },
  {
    title: "Mail",
    link: "mailto:victormutaijambo+dev@gmail.com",
  },
  {
    title: "resume",
    link: "/cv",
    internal: true,
  },
];

export default function HeaderLinks(): JSX.Element {
  return (
    <nav className="flex flex-col w-full items-end">
      <ul className="hidden md:block">
        {links.map((link) => (
          <li className="flex justify-end" key={link.title} >
            <a
              className="hover:border-b dark:border-slate-300 border-dotted flex text-right"
              href={link.link}
              rel="noopener noreferrer"
              target={link.internal ? "_self" : "_blank"}
            >
              <span className={link.internal ? "gradient-resume" : ""}>
                {link.title}
              </span>
              {link.internal ? (
                <ArrowDownLeftIcon className="w-3 h-3" />
              ) : (
                <ArrowUpRightIcon className="w-3 h-3" />
              )}
            </a>
          </li>
        ))}
      </ul>
      <Popover className="relative inline-flex md:hidden">
        <Popover.Button className="items-center flex w-10 h-10 justify-center text-sm text-slate-500 rounded-lg  hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <span className="sr-only">Open main menu</span>
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 17 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1h15M1 7h15M1 13h15"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </Popover.Button>

        <Popover.Panel className="absolute z-10 right-0 top-8">
          <ul className="w-full font-medium flex flex-col p-4 mt-4 border border-slate-100 rounded-lg bg-slate-50 dark:bg-slate-800 md:dark:bg-slate-900 dark:border-slate-700">
            {links.map((link) => (
              <li key={link.title}>
                <a
                  className="flex py-2 px-1"
                  href={link.link}
                  rel="noopener noreferrer"
                  target={link.internal ? "_self" : "_blank"}
                >
                  <span className={link.internal ? "gradient-resume" : ""}>
                    {link.title}
                  </span>
                  {link.internal ? (
                    <ArrowDownLeftIcon className="w-3 h-3" />
                  ) : (
                    <ArrowUpRightIcon className="w-3 h-3" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </Popover.Panel>
      </Popover>
    </nav>
  );
}
