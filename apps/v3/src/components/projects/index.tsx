import React from "react";
import Event from "../shared/event";
import { projects } from "shared-data";

const Projects: React.FC = () => {
  return (
    <div className="h-fit px-6 md:px-11 pb-20 mt-10 lg:-mt-16">
      <div className="grid md:grid-cols-2">
        <div className="flex flex-col w-full items-center">
          <div className="w-full lg:w-3/4">
            <div className="py-5 dark:text-white">some projects i worked on</div>

            <div>
              {projects.map((project, idx) => (
                <Event
                  key={project.title}
                  event={project}
                  counter={idx + 1}
                  count={projects.length}
                />
              ))}
            </div>
          </div>
        </div>
        <div />
      </div>
    </div>
  );
};

export default Projects;


