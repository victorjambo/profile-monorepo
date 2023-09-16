import React from "react";
import Event from "../shared/event";
import { works } from "shared-data";

const Work: React.FC = () => {
  return (
    <div className="h-fit px-6 md:px-11 pt-11">
      <div className="grid md:grid-cols-2">
        <div />
        <div className="flex flex-col w-full items-center">
          <div className="w-full lg:w-3/4">
            <div className="py-5 dark:text-white">
              stepping stones / where i've been
            </div>

            <div>
              {works.map((work, idx) => (
                <Event
                  key={work.title}
                  event={work}
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
