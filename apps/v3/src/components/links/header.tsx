import React from "react";
import {
  ArrowDownLeftIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline";

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
    link: process.env.NEXT_PUBLIC_BLOG_APP_URL ?? "/",
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
    <div className="flex flex-col w-full items-end">
      {links.map((link) => (
        <a
          className="hover:border-b old-border-slate-900 border-vase dark:border-slate-300 border-dotted flex"
          href={link.link}
          key={link.title}
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
      ))}
    </div>
  );
}
