import React from "react";
import Link from "next/link";

export function NotImplemented({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <main className="ui-w-full ui-relative">
      <div className="ui-p-10 ui-absolute ui-inset-0">
        <Link href="/">Back</Link>
      </div>
      <div className="ui-w-full ui-h-screen ui-flex ui-justify-center ui-items-center">
          This site is still in development.<br />
          Check back later for more stuff...
      </div>
      <div className="ui-absolute ui-bottom-0 ui-w-full">{children}</div>
    </main>
  );
}

export default NotImplemented;
