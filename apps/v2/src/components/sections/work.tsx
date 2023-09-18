"use client";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useScrollControl } from "../../context/scrollControl";
import { Theme } from "../../utils/constants";
import { projects } from "../../utils/data";
import { SectionHeader } from "./index";

export default function WorkSection(): JSX.Element {
  const { refs } = useScrollControl();
  const { theme } = useTheme();

  return (
    <section
      className="max-w-[1000px] mx-auto py-[100px]"
      id="work"
      ref={refs?.Work}
    >
      <SectionHeader idx="03." title="Some Things I've Built" />

      <ul className="font-sans space-y-[100px]">
        {projects.map((project) => (
          <li
            className="grid grid-col-featured gap-[10px] items-center idea"
            key={project.name}
          >
            <div className="project-content">
              <div>
                <p className="py-[10px] text-sky-500 dark:text-green font-mono text-xs">
                  Featured Project
                </p>

                <h3 className="mb-5 text-slate-500 dark:text-slate-lightest hover:text-sky-500 dark:hover:text-green featured-size font-semibold">
                  <a className="relative" href={project.link}>
                    {project.name}
                    {project.wip ? (
                      <span className="text-sky-50 dark:text-green text-xs absolute">
                        (WIP)
                      </span>
                    ) : null}
                  </a>
                </h3>

                <div className="text-slate-light p-[25px] rounded bg-blue-navy-light project-description-shadow">
                  <p dangerouslySetInnerHTML={{ __html: project.body }} />
                </div>

                <ul className="flex flex-wrap mt-[25px] mb-[10px] font-mono text-slate-500 dark:text-slate-light text-xs">
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>

                <div className="flex items-center mt-[10px] -ml-[10px] text-slate-600 dark:text-slate-lightest externals">
                  {project.learnMore ? (
                    <a
                      className="text-sky-500 dark:text-green hover:bg-sky-50 dark:hover:bg-green-tint border border-sky-500 dark:border-green rounded py-3 px-4 font-mono m-[10px] text-xs"
                      href={project.learnMore}
                    >
                      Learn More
                    </a>
                  ) : null}
                  {project.git ? (
                    <a className="p-[10px] zoom-hover-top" href={project.git}>
                      <Image
                        alt="git"
                        height={20}
                        src={`/images/social/icons8-github-${
                          theme === Theme.LIGHT ? "blue" : "green"
                        }.svg`}
                        width={20}
                      />
                    </a>
                  ) : null}
                  {project.share ? (
                    <a
                      className="p-[10px]"
                      href={project.share}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="project-image opacity-5 md:opacity-100">
              <a href={project.link}>
                <img
                  alt=""
                  className="w-full object-cover"
                  src={project.image}
                />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
