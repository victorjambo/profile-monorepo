import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const links = [
  {
    title: "Github",
    link: "https://github.com/victorjambo/",
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/mutaivictor/",
  },
  {
    title: "Mail",
    link: "mailto:victormutaijambo+dev@gmail.com",
  },
];

const HeaderLinks: React.FC = () => {
  return (
    <div className="flex flex-col w-full items-end">
      {links.map((link) => (
        <a
          className="hover:border-b old-border-slate-900 border-vase border-dotted flex"
          href={link.link}
          rel="noopener noreferrer"
          target="_blank"
          key={link.title}
        >
          <span>{link.title}</span>
          <ArrowUpRightIcon className="w-3 h-3" />
        </a>
      ))}
    </div>
  );
};

export default HeaderLinks;
