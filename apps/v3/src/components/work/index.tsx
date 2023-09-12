import React from "react";
import Item from "./item";

const Work: React.FC = () => {
  return (
    <div className="h-fit px-11 pt-11">
      <div className="grid grid-cols-2">
        <div />
        <div className="flex flex-col w-full items-center">
          <div className="w-3/4">
            <div className="py-5">stepping stones / where i've been</div>

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
    noun: "IOTA",
    verb: "Web3 investing infra & capital allocation capital",
    link: "https://iota.org",
  },
  {
    noun: "Syndicate",
    verb: "Web3 investing & capital allocation",
    link: "https://syndicate.io",
  },
  {
    noun: "Prezi",
    verb: "capital Web3 investing Web3 infra & capital allocation",
    link: "https://prezi.com",
  },
  {
    noun: "Andela",
    verb: "capital Web3 investing Web3 infra & capital allocation",
    link: "https://andela.com",
  },
  {
    noun: "Glassdoor",
    verb: "capital Web3 investing Web3 infra & capital allocation",
    link: "https://glassdoor.com",
  },
];
