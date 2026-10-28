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
  event: {
    title,
    role,
    link,
    tech,
    img,
    problem,
    solution,
    impact,
    liveDemo,
    sourceCode,
  },
  counter,
  setCurrentImg,
}: Props): JSX.Element {
  return (
    <article
      className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950 md:p-6"
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
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <div className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
              Project {counter}
            </div>
            <a
              className="inline-flex items-start text-xl font-semibold text-slate-950 hover:border-b border-vase dark:border-slate-300 dark:text-white border-dotted"
              href={liveDemo ?? link}
              rel="noopener noreferrer"
              target="_blank"
            >
              <sup className="pr-2 pt-1 text-xs text-slate-500 dark:text-slate-400">
                {counter}.
              </sup>
              <span>{title}</span>
            </a>
          </div>

          <div className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300">
            {role}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="grid gap-1">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Problem
            </div>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
              {problem ?? "Placeholder: add short problem statement."}
            </p>
          </div>

          <div className="grid gap-1">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Solution
            </div>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
              {solution ?? "Placeholder: add concise solution summary."}
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 px-4 py-3 dark:bg-slate-900/80">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Impact
            </div>
            <p className="pt-1 text-sm font-medium leading-6 text-slate-900 dark:text-slate-100">
              {impact ?? "Placeholder: add outcome, metric, or business result."}
            </p>
          </div>
        </div>

        {tech?.length ? (
          <div className="flex flex-wrap gap-2">
            {tech.map((item) => (
              <span
                className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600 dark:border-slate-700 dark:text-slate-300"
                key={`${title}-${item}`}
              >
                {item}
              </span>
            ))}
          </div>
        ) : null}

        <div className="flex flex-wrap gap-3 text-sm">
          {liveDemo ? (
            <a
              className="button-primary"
              href={liveDemo}
              rel="noopener noreferrer"
              target="_blank"
            >
              Live Demo
            </a>
          ) : (
            <span className="button-secondary opacity-70">
              Live Demo Placeholder
            </span>
          )}

          {sourceCode ? (
            <a
              className="button-secondary"
              href={sourceCode}
              rel="noopener noreferrer"
              target="_blank"
            >
              Source Code
            </a>
          ) : (
            <span className="button-secondary opacity-70">
              Source Code Placeholder
            </span>
          )}

          {!liveDemo && !sourceCode ? (
            <a
              className="button-secondary"
              href={link}
              rel="noopener noreferrer"
              target="_blank"
            >
              Project Link
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
