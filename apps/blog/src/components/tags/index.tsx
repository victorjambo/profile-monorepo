import Link from "next/link";
import { allBlogs } from "../../../.contentlayer/generated";

export default function Tags(): JSX.Element {
  const tags = allBlogs.map((blog) => blog.tags).flat();
  return (
    <ul>
      {tags.map((tag) => (
        <li key={tag}>
          <Link href={`/logs?filter=${tag}`}>{tag}</Link>
        </li>
      ))}
    </ul>
  );
}
