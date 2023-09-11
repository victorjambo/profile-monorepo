import React from "react";
import Link from "next/link";

export function NotImplemented({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <main className="w-full relative">
      <div className="p-10 absolute inset-0">
        <Link href="/">Back</Link>
      </div>
      <div className="w-full h-screen flex justify-center items-center ">
        Not implemented
      </div>
      <div className="absolute bottom-0 w-full">{children}</div>
    </main>
  );
}

export default NotImplemented;
