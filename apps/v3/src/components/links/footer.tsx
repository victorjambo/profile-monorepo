import Link from "next/link";
import React from "react";
import { ThemeToggle } from "../theme-toggle";

export default function FooterLinks(): JSX.Element {
  const blogUrl = `${
    process.env.NEXT_PUBLIC_BLOG_APP_URL ?? "/"
  }?utm_source=mutai.dev`;

  return (
    <div className="flex space-x-6 items-center">
      <Link
        className="hover:border-b old-border-slate-900 border-vase dark:border-slate-300 border-dotted gradient-resume"
        href="/cv"
      >
        resume
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
      <ThemeToggle />
    </div>
  );
}
