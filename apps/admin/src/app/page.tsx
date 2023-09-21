"use client";
import React from "react";
import { useVisitors } from "../hooks/visitors";
import { Laila } from "next/font/google";

const laila = Laila({
  subsets: ["latin"],
  weight: "700",
});

export default function Page(): JSX.Element {
  const {visits, sinceLastVisit, visited} = useVisitors();
  return (
    <main className="w-full relative">
      <div className="h-screen p-6 md:p-11">
        <div className="max-w-[65ch]">
          <div className={`${laila.className} dark:text-white font-bold pb-2`}>
            Admin
          </div>

          <div className="text-lg font-bold pt-10 pb-4">V2</div>
          <div className=" flex flex-col space-y-5 leading-7">
            <div className="w-full">• <b>Visits</b>: {visits}</div>
            <div className="w-full">• <b>Last visitor</b>: {visited}</div>
            <div className="w-full">• <b>Time Since Last Visit</b>: {sinceLastVisit}</div>
          </div>

          {/* V3 */}
          {/* <div className="text-lg font-bold pt-10 pb-4">V3</div>
          <div className=" flex flex-col space-y-5 leading-7">
            <div className="w-full">• <b>Visits</b>: {"visits"}</div>
            <div className="w-full">• <b>Last visitor</b>: {"visited"}</div>
            <div className="w-full">• <b>Time Since Last Visit</b>: {"sinceLastVisit"}</div>
          </div> */}
        </div>
      </div>
    </main>
  );
}
