import Link from "next/link";
import React from "react";

export default function FooterLinks(): JSX.Element {
  const blogUrl = `${
    process.env.NEXT_PUBLIC_BLOG_APP_URL ?? "/"
  }?utm_source=mutai.dev`;

  return (
    <div className="flex space-x-6">
      <Link
        className="hover:border-b old-border-slate-900 border-vase dark:border-slate-300 border-dotted"
        href="/resume/c2l0ZQ?utm_source=c2l0ZQ"
      >
        cv
      </Link>
      <Link
        className="hover:border-b old-border-slate-900 border-vase dark:border-slate-300 border-dotted"
        href="/colophon"
      >
        colophon
      </Link>
      <Link
        className="hover:border-b old-border-slate-900 border-vase dark:border-slate-300 border-dotted"
        href={blogUrl}
      >
        logs
      </Link>
    </div>
  );
}
