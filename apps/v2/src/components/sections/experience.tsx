"use client"
import { SectionHeader } from ".";

import { Tab } from "@headlessui/react";
import { classNames } from "../../utils/classNames";
import { companies } from "../../utils/data";
import { useScrollControl } from "../../context/scrollControl";

const ExperienceSection: React.FC = () => {
  const { refs } = useScrollControl();

  return (
    <section
      ref={refs?.Experience}
      id="experience"
      className="max-w-[700px] mx-auto py-[100px]"
    >
      <SectionHeader idx="02." title="Where I've Worked" />

      <Tab.Group>
        <div className="min-h-[340px] flex flex-col md:flex-row text-slate-800 dark:text-slate-light">
          <Tab.List className="flex flex-row md:flex-col w-full md:w-max overflow-y-scroll md:overflow-y-visible">
            {companies.map((company) => (
              <Tab
                key={company.name}
                className={({ selected }) =>
                  classNames(
                    "flex items-center h-[42px] px-5 pb-[2px] border-b-2 md:border-b-0 border-l-0 md:border-l-2 cursor-pointer font-mono text-[13px] text-left whitespace-nowrap hover:bg-gray-100 dark:hover:bg-blue-navy-light",
                    selected
                      ? "border-sky-500 dark:border-green text-sky-500 dark:text-green"
                      : "border-slate-300 dark:border-blue-navy-lightest"
                  )
                }
              >
                {company.name}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-5 md:mt-0 ml-0 md:ml-5 font-sans">
            {companies.map((company) => (
              <Tab.Panel
                key={company.name}
                className="px-[5px] py-[10px] h-auto w-full"
              >
                <div className="mb-[2px] text-[22px] font-medium leading-snug text-slate-600 dark:text-slate-lightest">
                  {company.role}&nbsp;&nbsp;
                  <a
                    href={company.link}
                    target="_blank"
                    className="text-sky-500 dark:text-green cursor-pointer inline-block"
                    rel="noreferrer"
                  >
                    @{company.name}
                  </a>
                </div>
                <div className="mb-6 text-slate-400 dark:text-slate-lightest text-xs font-mono">
                  {company.duration}
                </div>
                <div className="text-slate-600 dark:text-slate font-sans leading-[24px]">
                  {company.subtitle}
                </div>
                <div
                  className="text-slate-600 dark:text-slate font-sans leading-[24px]"
                  dangerouslySetInnerHTML={{ __html: company.responsibilities }}
                />
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </div>
      </Tab.Group>
    </section>
  );
};

export default ExperienceSection;
