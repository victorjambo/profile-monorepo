"use client";
import Link from "next/link";
import { logs } from "../../logs";

export default function Page(): JSX.Element {
  return (
    <div className="prose flex flex-col">
      {Object.keys(logs).map((log) => (
        <Link href={`/logs/${log}`} key={log}>
          {log}
        </Link>
      ))}
    </div>
  );
}
