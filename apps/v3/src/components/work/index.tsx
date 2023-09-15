import React from "react";
import Item from "../shared/item";
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
                <Item
                  key={work.title}
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
