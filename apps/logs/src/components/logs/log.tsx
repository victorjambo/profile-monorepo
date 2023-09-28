import Link from "next/link";

interface LogProps {
  log: string;
  len: number;
  idx: number;
}

export default function Log({ log, len, idx }: LogProps): JSX.Element {
  return (
    <tr
      className={`border-t border-serket border-opacity-20 hover:bg-slate-200 ${
        idx + 1 === len ? "border-b-0" : "border-b"
      }`}
    >
      <td className="pl-3">
        <Link href={`/logs/${log}`}>{log}</Link>
      </td>
      <td className="text-right pr-3">k8s, react</td>
    </tr>
  );
}
