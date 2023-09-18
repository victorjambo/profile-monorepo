"use client"
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { DEV_NAME, GIT_REPO, social } from "../../utils/data";
import { Theme } from "../../utils/constants";

export interface IProps {
  gitStats: {
    stars: number;
    forks: number;
    error?: boolean;
  };
}

export default function Footer(): JSX.Element {
  const { theme } = useTheme();
  const gitStats = {
    stars: 0,
    forks: 0,
    error: false
  }

  return (
    <footer className="flex flex-col h-auto min-h-[70px] text-center items-center">
      <div className="md:hidden flex flex-row space-x-8 items-center relative w-max">
        {social.map((item) => (
          <a
            href={item.link}
            key={item.name}
            rel="noreferrer"
            target="_blank"
          >
            <Image
              alt={item.name}
              height={30}
              src={theme === Theme.LIGHT ? item.icons.blue : item.icons.green}
              width={30}
            />
          </a>
        ))}
      </div>
      <div className="text-sky-500 dark:text-green font-mono text-xs">
        <a className="p-[10px]" href={GIT_REPO}>
          <div>
            Built by&nbsp;
            <span className="hover:text-sky-500 dark:hover:text-green">
              {DEV_NAME}
            </span>
          </div>

          <div className="mt-[10px]">
            <span className="inline-flex items-center px-2 space-x-1">
              <StarIcon className="h-3 w-3 inline-flex" />
              <span>{gitStats.stars}</span>
            </span>
            <span className="inline-flex items-center px-2 space-x-1">
              <Image
                alt=""
                className="inline-flex"
                height={12}
                src={`/images/social/icons8-git-merge-${
                  theme === Theme.LIGHT ? "blue" : "green"
                }.png`}
                width={12}
              />
              <span>{gitStats.forks}</span>
            </span>
          </div>
        </a>
      </div>
    </footer>
  );
};
