"use client";
import React from "react";
import { useVisitors } from "../hooks/visitors";
import { Laila } from "next/font/google";

const laila = Laila({
  subsets: ["latin"],
  weight: "700",
});

export default function Page(): JSX.Element {
  const {
    v2: { visits, sinceLastVisit, visited },
    v3,
  } = useVisitors();

  return (
    <main className="w-full relative">
      <div className="h-screen p-6 md:p-11">
        <div className="max-w-[65ch]">
          <div className={`${laila.className} dark:text-white font-bold pb-2`}>
            Admin
          </div>

          <div className="text-xl font-bold pt-10 pb-4">V2</div>
          <div className=" flex flex-col space-y-5 leading-7">
            <div className="w-full">
              • <b>Visits</b>: {visits}
            </div>
            <div className="w-full">
              • <b>Last visitor</b>: {visited}
            </div>
            <div className="w-full">
              • <b>Time Since Last Visit</b>: {sinceLastVisit}
            </div>
          </div>

          {v3.length ? (
            <>
              <div className="text-xl font-bold pt-10 pb-4">V3</div>
              {v3.map((data, i) => (
                <div key={data.path} className="pt-6">
                  <div className="text-lg font-bold pb-2">
                    <sup>{i+1}.</sup>
                    <span className="pl-2 underline">{data.path}</span></div>
                  <div className="flex flex-col space-y-5 leading-7">
                    <div className="w-full">
                      • <b>Visits</b>: {data.visits}
                    </div>
                    <div className="w-full">
                      • <b>Last visitor</b>: {data.visited}
                    </div>
                    <div className="w-full">
                      • <b>Time Since Last Visit</b>: {data.sinceLastVisit}
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : null}
        </div>
      </div>
    </main>
  );
}
