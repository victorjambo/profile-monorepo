import Link from "next/link";
import React from "react";

export default function FooterLinks(): JSX.Element {
  return (
    <div className="flex space-x-6">
      <Link
        className="hover:border-b old-border-slate-900 border-vase dark:border-slate-300 border-dotted"
        href="/colophon"
      >
        colophon
      </Link>
      <Link
        className="hover:border-b old-border-slate-900 border-vase dark:border-slate-300 border-dotted"
        href="https://blog.mutai.dev/"
      >
        logs
      </Link>
    </div>
  );
}
