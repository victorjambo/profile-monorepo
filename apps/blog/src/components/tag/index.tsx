import Link from "next/link";
import { cn } from "shared-data";

// bg-${colors[4]}-200 dark:bg-${colors[4]}-800 hover:bg-${colors[4]}-400

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
      })}
      href={`/logs?filter=${tag}`}
      key={tag}
    >
      #{tag}
    </Link>
  );
}
