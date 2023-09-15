import React from "react";
import Item from "../shared/item";

const Work: React.FC = () => {
  return (
    <div className="h-fit px-6 md:px-11 pt-11">
      <div className="grid md:grid-cols-2">
        <div />
        <div className="flex flex-col w-full items-center">
          <div className="w-full lg:w-3/4">
            <div className="py-5 dark:text-white">stepping stones / where i've been</div>

            <div>
              {works.map((work, idx) => (
                <Item
                  key={work.noun}
                  item={work}
                  counter={idx + 1}
                  count={works.length}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

const works = [
  {
    noun: "IOTA Foundation",
    verb: "Building infrastructure for global trade",
    link: "https://iota.org",
  },
  {
    noun: "Syndicate",
    verb: "Web3 investing infra & capital allocation capital",
    link: "https://syndicate.io",
  },
  {
    noun: "Prezi",
    verb: "Built payments platform",
    link: "https://prezi.com",
  },
  {
    noun: "Andela",
    verb: "I'll update this later",
    link: "https://andela.com",
  },
  {
    noun: "Glassdoor",
    verb: "I'll update this later",
    link: "https://glassdoor.com",
  },
];
