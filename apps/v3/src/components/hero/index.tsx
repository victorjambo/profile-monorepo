import React from "react";
import { Laila } from "next/font/google";

const laila = Laila({
  subsets: ["latin"],
  weight: "700",
});

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col justify-end h-full max-w-lg">
      <div className={`${laila.className} text-4xl font-bold pb-9`}>
        Victor Mutai
      </div>
      <div className="flex flex-col space-y-4">
        <p>
          Currently building distributed systems at&nbsp;
          <a
            href="https://iota.org"
            className="border-b old-border-slate-900 border-vase border-dotted"
            rel="noopener noreferrer"
            target="_blank"
          >
            IOTA Foundation
          </a>
          &nbsp; An open-source, scalable, feeless, green & permissionless
          distributed ledger.
        </p>

        <p>
          I am a senior software engineer with expertise in ReactJS, and NodeJS.
          Proven track record of delivering high-quality solutions to complex
          problems across various industries, including finance.
        </p>
      </div>
    </div>
  );
};

export default Hero;
