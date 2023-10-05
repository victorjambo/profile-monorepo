import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import type { NavBackProps } from "./types";

export function NavBack({
  path,
  label,
  color = false,
}: NavBackProps): JSX.Element {
  return (
    <div
      className={`ui-p-10 ui-absolute ui-top-0 ui-left-0 ${
        color ? "ui-text-white" : ""
      }`}
    >
      <div className="ui-flex ui-items-center ui-space-x-1">
        <ArrowLeftIcon className="ui-w-5 ui-h-5" />
        <Link
          className="w-fit hover:border-b border-vase dark:border-slate-300 border-dotted"
          href="/"
        >
          mutai.dev
        </Link>
        {path ? (
          <>
            <span className="pr-1">/</span>
            <Link
              className="w-fit hover:border-b border-vase dark:border-slate-300 border-dotted"
              href={`${path}`}
            >
              <span>{label}</span>
            </Link>
          </>
        ) : null}
      </div>
    </div>
  );
}
