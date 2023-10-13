import type { Dispatch, SetStateAction } from "react";
import type { Tech } from "builders";
import type { EventProp } from "../../types";

type Props = EventProp<(typeof Tech)[number]> & {
  setCurrentImg: Dispatch<
    SetStateAction<{
      title: string;
      img: string;
    }>
  >;
};

export default function ProjectEvent({
  event: { title, role, link, tech, img },
  counter,
  count,
  setCurrentImg,
}: Props): JSX.Element {
  return (
    <div
      className={`${counter === count ? "" : "border-b dark:border-slate-300"}`}
      onMouseEnter={() => {
        setCurrentImg({
          title,
          img: img ?? "",
        });
      }}
      onMouseLeave={() => {
        setCurrentImg({
          title: "",
          img: "",
        });
      }}
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
