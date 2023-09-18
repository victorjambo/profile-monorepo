"use client";
import { DEV_EMAIL } from "../../utils/data";
import { useTheme } from "next-themes";
import { Theme } from "../../utils/constants";
import { useMemo } from "react";
import GithubIcon from "../icons/github";
import TwitterIcon from "../icons/twitter";
import LinkedinIcon from "../icons/linkedin";
import MediumIcon from "../icons/medium";
import StackOverflowIcon from "../icons/stackOverflow";

const Side: React.FC = () => {
  const { theme } = useTheme();

  const social = useMemo(() => {
    const isLightTheme = theme === Theme.LIGHT;
    return [
      {
        icon: <GithubIcon theme={isLightTheme} />,
        name: "github",
        link: "https://github.com/victorjambo",
      },
      {
        icon: <TwitterIcon theme={isLightTheme} />,
        name: "twitter",
        link: "https://twitter.com/victor_jambo",
      },
      {
        icon: <LinkedinIcon theme={isLightTheme} />,
        name: "linkedin",
        link: "https://www.linkedin.com/in/mutaivictor",
      },
      {
        icon: <StackOverflowIcon theme={isLightTheme} />,
        name: "stack overflow",
        link: "https://stackoverflow.com/users/7770278/victor-mutai/",
      },
      {
        icon: <MediumIcon theme={isLightTheme} />,
        name: "medium",
        link: "https://victorjambo.medium.com/",
      },
    ];
  }, [theme]);

  return (
    <div className="hidden md:block">
      <MainComponent orientation="left-10">
        <div className="flex flex-col space-y-2 items-center relative side">
          {social.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="zoom-hover-top py-1"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </MainComponent>
      <MainComponent orientation="right-10">
        <div className="flex flex-col items-center relative side text-sky-500 dark:text-green">
          <a
            className="my-5 p-[10px] font-mono text-xs tracking-widest [writing-mode:vertical-rl] cursor-pointer zoom-hover-center"
            href={`mailto:${DEV_EMAIL}`}
          >
            {DEV_EMAIL}
          </a>
        </div>
      </MainComponent>
    </div>
  );
};

export default Side;

const MainComponent: React.FC<{
  orientation: string;
  children: React.ReactNode;
}> = ({ children, orientation }) => {
  return (
    <div className={`fixed bottom-0 z-10 text-slate ${orientation}`}>
      {children}
    </div>
  );
};
