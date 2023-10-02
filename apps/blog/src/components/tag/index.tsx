import Link from "next/link";
import { cn } from "shared-data";

// TODO improve color selection
export default function Tag({
  tag,
  idx,
}: {
  tag: string;
  idx: number;
}): JSX.Element {
  return (
    <Link
      className={cn("z-10 py-0.5 px-1 mx-1 rounded-md", {
        "bg-orange-200 dark:bg-orange-800 hover:bg-orange-400": idx === 0,
        "bg-pink-200 dark:bg-pink-800 hover:bg-pink-400": idx === 1,
        "bg-teal-200 dark:bg-teal-800 hover:bg-teal-400": idx === 2,
        "bg-lime-200 dark:bg-lime-800 hover:bg-lime-400": idx === 3,
        "bg-fuchsia-200 dark:bg-fuchsia-800 hover:bg-fuchsia-400": idx === 4,
        "bg-yellow-200 dark:bg-yellow-800 hover:bg-yellow-400": idx === 5,
        "bg-red-200 dark:bg-red-800 hover:bg-red-400": idx === 6,
        "bg-purple-200 dark:bg-purple-800 hover:bg-purple-400": idx === 7,
        "bg-cyan-200 dark:bg-cyan-800 hover:bg-cyan-400": idx === 8,
        "bg-amber-200 dark:bg-amber-800 hover:bg-amber-400": idx === 9,
        "bg-indigo-200 dark:bg-indigo-800 hover:bg-indigo-400": idx === 10,
        "bg-green-200 dark:bg-green-800 hover:bg-green-400": idx === 11,
        "bg-blue-200 dark:bg-blue-800 hover:bg-blue-400": idx === 12,
        "bg-emerald-200 dark:bg-emerald-800 hover:bg-emerald-400": idx === 13,
        "bg-stone-200 dark:bg-stone-800 hover:bg-stone-400": idx === 14,
      })}
      href={`/logs?tags=${tag}`}
      key={tag}
    >
      #{tag}
    </Link>
  );
}
