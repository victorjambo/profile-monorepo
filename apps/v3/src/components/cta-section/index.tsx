import React from "react";
import { RESUME_INTERNAL_URL } from "builders";

type CTASectionProps = {
  title?: string;
  subtitle?: string;
  className?: string;
};

const GITHUB_URL = "https://github.com/victorjambo/";

export default function CTASection({
  title = "Let\u2019s build reliable systems that scale",
  subtitle = "I\u2019m open to engineering leadership, backend architecture, and integration-focused opportunities.",
  className = "",
}: CTASectionProps): JSX.Element {
  return (
    <section className={`px-6 md:px-11 ${className}`.trim()}>
      <div className="rounded-[2rem] border border-slate-200 bg-white px-6 py-8 md:px-10 md:py-10 dark:border-slate-800 dark:bg-slate-950">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
              Ready to collaborate
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white md:text-3xl">
              {title}
            </h2>
            <p className="max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300 md:text-base">
              {subtitle}
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap md:justify-end">
            <a className="button-primary" href="mailto:victormutaijambo+dev@gmail.com">
              Hire Me
            </a>
            <a
              className="button-secondary"
              href={GITHUB_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              View GitHub
            </a>
            <a
              className="button-secondary"
              download="victor-mutai-cv.pdf"
              href={RESUME_INTERNAL_URL}
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
