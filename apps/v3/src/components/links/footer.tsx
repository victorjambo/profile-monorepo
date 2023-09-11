import Link from "next/link";
import React from "react";

const FooterLinks: React.FC = () => {
  return (
    <div className="flex space-x-6">
      <Link
        className="hover:border-b border-slate-900 border-dotted"
        href="/colophon"
        rel="noopener noreferrer"
        target="_blank"
      >
        colophon
      </Link>
      <Link
        className="hover:border-b border-slate-900 border-dotted"
        href="/log"
        rel="noopener noreferrer"
        target="_blank"
      >
        log
      </Link>
    </div>
  );
};

export default FooterLinks;
