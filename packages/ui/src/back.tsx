import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

export interface INavBack {
  path?: string;
  label?: string;
}

export function NavBack({ path, label }: INavBack): JSX.Element {
  return (
    <div className="ui-p-10 ui-absolute ui-top-0 ui-left-0">
      <div className="ui-flex ui-items-center ui-space-x-1">
        <ArrowLeftIcon className="ui-w-5 ui-h-5" />
        <Link href="/" className="w-fit hover:border-b border-vase dark:border-slate-300 border-dotted">
          mutai.dev
        </Link>
        {path && (
          <React.Fragment>
            <span className="pr-1">/</span>
            <Link href={path} className="w-fit hover:border-b border-vase dark:border-slate-300 border-dotted">
              <span>{label}</span>
            </Link>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
