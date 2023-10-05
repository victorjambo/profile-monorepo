import type { IEventProp } from "models";
import type { Tech } from "builders";

type Props = IEventProp<(typeof Tech)[number]>;

export default function ProjectEvent({
  event: { title, role, link, tech },
  counter,
  count,
}: Props): JSX.Element {
  return (
    <div
      className={`${counter === count ? "" : "border-b dark:border-slate-300"}`}
    >
      <a
        className="grid grid-row-2 lg:grid-rows-none grid-cols-none lg:grid-cols-3 gap-4 lg:gap-0 py-4"
        href={link}
        rel="noopener noreferrer"
        target="_blank"
      >
        
        <div className="font-extrabold">
          <sup className="pr-1">{counter}.</sup>
          <span className="hover:border-b border-vase dark:border-slate-300 border-dotted">
            {title}
          </span>
        </div>

        <div className="hover:border-b border-vase dark:border-slate-300 border-dotted leading-loose lg:col-span-2 lg:text-right">
          {role}
        </div>

      </a>

      {tech ? (
        <div className="pl-2.5 pb-10 md:py-2.5 text-left md:text-justify text-sm">
          <span>Tech: </span>
          <span>{tech.join(", ")}</span>
        </div>
      ) : null}
    </div>
  );
}
