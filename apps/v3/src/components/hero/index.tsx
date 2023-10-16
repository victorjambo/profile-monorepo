import React from "react";
import { Laila } from "next/font/google";
import Link from "next/link";

const laila = Laila({
  subsets: ["latin"],
  weight: "700",
});

export default function Hero(): JSX.Element {
  return (
    <div className="flex flex-col justify-end h-full max-w-lg">
      <div
        className={`${laila.className} dark:text-white text-4xl font-bold pb-9`}
      >
        Victor Mutai
      </div>
      <div className="flex flex-col space-y-4">
        <p>
          Currently building distributed systems at&nbsp;
          <a
            className="border-b old-border-slate-900 border-vase dark:border-slate-300 border-dotted"
            href="https://iota.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            IOTA Foundation
          </a>
          &nbsp; An open-source, scalable, feeless, green & permission less
          distributed ledger.
        </p>

        <p>
          I am a senior software engineer with expertise in ReactJS, and NodeJS.
          Proven track record of delivering high-quality solutions to complex
          problems across various industries, including finance.
        </p>

        <div className="border hover:shadow-md p-5 rounded-2xl">
          View my <Link className="gradient-resume" href="/cv">resume</Link> 📒
        </div>
      </div>
    </div>
  );
}
