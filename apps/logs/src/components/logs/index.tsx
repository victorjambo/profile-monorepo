"use client";
import { allLogs } from "contentlayer/generated";
import Log from "./log";

export default function LogsTable(): JSX.Element {
  const posts = allLogs.filter((post) => post.published);

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="pl-3 text-left">title</th>
          <th className="pr-3 text-right">tags</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post, idx) => (
          <Log idx={idx} key={post._id} len={posts.length} log={post} />
        ))}
      </tbody>
    </table>
  );
}
