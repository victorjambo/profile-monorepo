"use client"
import { logs } from "../../logs";
import Log from "./log";

export default function Logs(): JSX.Element {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="pl-3 text-left">title</th>
          <th className="pr-3 text-right">tags</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(logs).map((log, idx) => (
          <Log idx={idx} key={log} len={Object.keys(logs).length} log={log} />
        ))}
      </tbody>
    </table>
  );
}
