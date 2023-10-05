import React from "react";
import { works } from "builders";
import Event from "../shared/event";

export default function Work(): JSX.Element {
  return (
    <div className="h-fit px-6 md:px-11 pt-11">
      <div className="grid md:grid-cols-2">
        <div />
        <div className="flex flex-col w-full items-center">
          <div className="w-full lg:w-3/4">
            <div className="py-5 dark:text-white">
              stepping stones / where i&apos;ve been
            </div>

            <div>
              {works.map((work, idx) => (
                <Event
                  count={works.length}
                  counter={idx + 1}
                  event={work}
                  key={work.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
