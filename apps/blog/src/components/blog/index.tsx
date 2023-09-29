import Link from "next/link";
import { type Logs } from "contentlayer/generated";

interface BlogProps {
  log: Logs;
  len: number;
  idx: number;
}

export default function Blog({ log, len, idx }: BlogProps): JSX.Element {
  return (
    <tr
      className={`border-t border-serket border-opacity-20 hover:bg-slate-200 ${
        idx + 1 === len ? "border-b-0" : "border-b"
      }`}
    >
      <td className="pl-3">
        <Link href={`/logs/${log.slug}`}>{log.title}</Link>
      </td>
      <td className="text-right pr-3 text-sm">#{['react'].join(', #')}</td>
    </tr>
  );
}
