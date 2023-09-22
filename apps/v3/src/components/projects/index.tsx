import { projects } from "shared-data";
import ProjectEvent from "../shared/project-event";

export default function Projects(): JSX.Element {
  return (
    <div className="h-fit px-6 md:px-11 pb-20 mt-10 lg:-mt-16">
      <div className="grid md:grid-cols-2">
        <div className="flex flex-col w-full items-center">
          <div className="w-full lg:w-3/4">
            <div className="py-5 dark:text-white">
              some projects i worked on
            </div>

            <div>
              {projects.map((project, idx) => (
                <ProjectEvent
                  count={projects.length}
                  counter={idx + 1}
                  event={project}
                  key={project.title}
                />
              ))}
            </div>
          </div>
        </div>
        <div />
      </div>
    </div>
  );
}
