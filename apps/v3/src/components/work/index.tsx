import React from "react";

const Work: React.FC = () => {
  return (
    <div className="h-fit p-11">
      <div className="grid grid-cols-2">
        <div />
        <div className="flex flex-col w-3/4 justify-center">
          <div className="py-5">stepping stones / where i've been </div>

          <div className="">
            {history.map((h) => (
              <div key={h.noun} className="grid grid-cols-2 border-b">
                <div>{h.noun}</div>
                <div className="place-self-end text-right">{h.verb}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

const history = [
  {
    noun: "1. IOTA",
    verb: "Web3 investing infra & capital allocation capital",
  },
  {
    noun: "2. Syndicate",
    verb: "Web3 investing & capital allocation",
  },
  {
    noun: "3. Prezi",
    verb: "capital Web3 investing Web3 infra & capital allocation",
  },
];
