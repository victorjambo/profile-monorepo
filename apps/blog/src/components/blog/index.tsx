import { useRouter } from "next/navigation";
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
      className={`border-t border-serket border-opacity-20 hover:bg-slate-200 cursor-pointer ${
        idx + 1 === len ? "border-b-0" : "border-b"
      }`}
      onClick={() => {
        router.push(`/logs/${blog.slug}`);
      }}
    >
      <td className="pl-3">{blog.title}</td>
      <td className="text-right pr-3 text-sm">#{blog.tags?.join(", #")}</td>
    </tr>
  );
}
