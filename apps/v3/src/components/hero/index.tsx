import React from "react";
import { Laila } from "next/font/google";
import Link from "next/link";

const laila = Laila({
  subsets: ["latin"],
  weight: "700",
});

export default function Hero(): JSX.Element {
  return (
    <section className="flex h-full max-w-2xl flex-col justify-center py-10 md:py-16">
      <div className="flex flex-col gap-5 md:gap-6">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
            Victor Mutai
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Lead Engineer focused on supply-chain platforms, trade data
            infrastructure, and resilient backend systems.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h1
            className={`${laila.className} text-4xl font-bold leading-tight text-slate-950 dark:text-white md:text-5xl md:leading-tight`}
          >
            Building scalable supply-chain infrastructure for global trade
          </h1>

          <p className="max-w-xl text-base leading-7 text-slate-700 dark:text-slate-200 md:text-lg">
            Lead Engineer specializing in Node.js, TypeScript,
            UN/CEFACT-aligned systems, and cross-border data-sharing
            platforms.
          </p>

          <p className="max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300 md:text-base">
            I design and deliver backend systems, integration workflows, and
            platform architecture for modern trade and logistics products.
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
          <Link
            className="button-primary"
            href="/#projects"
          >
            View Projects
          </Link>
          <a
            className="button-secondary"
            href="mailto:victormutaijambo+dev@gmail.com"
          >
            Contact Me
          </a>
        </div>

        <div className="pt-4 text-sm text-slate-600 dark:text-slate-300">
          View my <Link className="gradient-resume" href="/cv">resume</Link>
        </div>
      </div>
    </section>
  );
}
