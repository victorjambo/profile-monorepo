import { useRouter } from "next/navigation";
import Link from "next/link";
import { type Blogs } from "../../../.contentlayer/generated";

interface BlogProps {
  blog: Blogs;
  len: number;
  idx: number;
}

export default function Blog({ blog, len, idx }: BlogProps): JSX.Element {
  const router = useRouter();
  return (
    <tr
      className={`border-t border-serket border-opacity-20 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer ${
        idx + 1 === len ? "border-b-0" : "border-b"
      }`}
    >
      <td
        className="pl-3"
        onClick={() => {
          router.push(`/logs/${blog.slug}`);
        }}
      >
        {blog.title}
      </td>
      <td className="text-right pr-3 text-sm">
        {blog.tags?.map((tag) => (
          <Link
            className="z-10 py-0.5 px-1 bg-slate-100 hover:bg-slate-300 mx-1 rounded-md"
            href={`/logs?filter=${tag}`}
            key={tag}
          >
            #{tag}
          </Link>
        ))}
      </td>
    </tr>
  );
}
