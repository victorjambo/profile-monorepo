import Link from "next/link";
import React from "react";

const FooterLinks: React.FC = () => {
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
        href="/logs"
      >
        logs
      </Link>
    </div>
  );
};

export default FooterLinks;
