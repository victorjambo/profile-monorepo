import React from "react";
import { NavBack } from "./back";

export function NotImplemented({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <main className="ui-w-full ui-relative">
      <NavBack />
      <div className="ui-w-full ui-h-screen ui-flex ui-justify-center ui-items-center">
          This site is still in development.<br />
          Check back later for more stuff...
      </div>
      <div className="ui-absolute ui-bottom-0 ui-w-full">{children}</div>
    </main>
  );
}

export default NotImplemented;
