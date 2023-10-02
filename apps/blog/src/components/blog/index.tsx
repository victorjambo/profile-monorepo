import { useRouter } from "next/navigation";
import { type Blogs } from "../../../.contentlayer/generated";
import Tag from "../tag";

interface BlogProps {
  blog: Blogs;
  len: number;
  idx: number;
}

export default function Blog({ blog, len, idx }: BlogProps): JSX.Element {
  const router = useRouter();
  return (
    <tr
      className={`border-t hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer ${
        idx + 1 === len ? "border-b-0" : "border-b"
      }`}
    >
      <td
        className="pl-3 py-4"
        onClick={() => {
          router.push(`/logs/${blog.slug}`);
        }}
      >
        {blog.title}
      </td>
      <td className="text-right pr-3 text-sm py-4">
        {blog.tags?.map((tag, i) => <Tag idx={i} key={tag} tag={tag} />)}
      </td>
    </tr>
  );
}
