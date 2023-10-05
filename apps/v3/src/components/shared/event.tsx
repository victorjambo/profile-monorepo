import type { IEventProp } from "models";
import type { Tech } from "builders";

type Props = IEventProp<(typeof Tech)[number]>;

export default function Event({
  event: { title, role, link, desc, tech },
  counter,
  count,
}: Props): JSX.Element {
  return (
    <div
      className={`${counter === count ? "" : "border-b dark:border-slate-300"}`}
    >
      <a
        className="grid grid-cols-2 py-10 md:py-4 relative external-link"
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
        <div
          className={`hover:border-b border-vase dark:border-slate-300 border-dotted place-self-end text-right ${
            desc ? "italic" : ""
          }`}
        >
          {role}
        </div>
      </a>
      {tech ? (
        <div className="pl-2.5 pb-10 md:py-2.5 text-left md:text-justify text-sm">
          <span>Tech: </span>
          <span>{tech.join(", ")}</span>
        </div>
      ) : null}
      {desc ? (
        <div className="pl-2.5 pb-10 md:pb-4 text-left md:text-justify">
          <div dangerouslySetInnerHTML={{ __html: desc }} />
        </div>
      ) : null}
    </div>
  );
}
