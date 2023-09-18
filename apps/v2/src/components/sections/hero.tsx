"use client";
import { DEV_NAME } from "../../utils/data";

export default function HeroSection(): JSX.Element {
  return (
    <section className="max-w-[1000px] mx-auto" id="hero">
      <div className="flex flex-col justify-center min-h-screen">
        <div className="text-sky-500 dark:text-green font-normal mb-5 sm:mb-[30px] mr-[2px] sm:mr-1 ">
          Hi, my name is
        </div>
        <div className="font-sans text-slate-800 dark:text-slate-lightest font-semibold leading-[1.1] hero-size">
          {DEV_NAME}.
        </div>
        <div className="font-sans text-slate-500 dark:text-slate font-semibold hero-size mt-[10px] leading-[0.9]">
          I build things for web3.
        </div>
        <p className="mt-5 max-w-lg font-sans text-slate-600 dark:text-slate leading-[24px]">
          Currently building distributed systems at&nbsp;
          <a
            className="text-sky-500 dark:text-green cursor-pointer"
            href="https://twitter.com/iota"
            rel="noreferrer"
            target="_blank"
          >
            IOTA Foundation
          </a>
          &nbsp;An open-source, scalable, feeless, green & permission less
          distributed ledger.
        </p>
        <div className="mt-[50px]">
          <a
            className="text-sky-500 dark:text-green hover:bg-sky-50 dark:hover:bg-green-tint border border-sky-500 dark:border-green rounded py-5 px-7 text-sm cursor-pointer"
            href="https://resume.github.io/?victorjambo"
            rel="noreferrer"
            target="_blank"
          >
            Github Resume!
          </a>
        </div>
      </div>
    </section>
  );
}
