"use client";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { Popover } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { allBlogs } from "../../../.contentlayer/generated";
import Blog from "../blog";

export default function Blogs({
  query,
}: {
  query?: { unpublished: string; filter: string };
}): JSX.Element {
  const router = useRouter();

  const blogs = allBlogs.filter((blog) => {
    if (query?.unpublished) return blog.isVisible && !blog.published;
    if (query?.filter)
      return blog.isVisible && blog.tags?.includes(query.filter);
    return blog.isVisible && blog.published;
  });

  return (
    <table className="w-full">
      <thead>
        <tr className="">
          <th className="pl-3 text-left">title</th>
          <th className="pr-3 text-right">
            <Popover className="relative">
              <Popover.Button className="align-middle" type="button">
                <EllipsisHorizontalIcon className="w-5 h-5 bg-slate-100 rounded" />
              </Popover.Button>
              <Popover.Panel className="absolute z-10 bg-serket">
                <div className="flex flex-col">
                  <button
                    onClick={() => {
                      router.push("/logs?unpublished=true");
                    }}
                    type="button"
                  >
                    unpublished
                  </button>
                  <button
                    onClick={() => {
                      router.push("/logs");
                    }}
                    type="button"
                  >
                    published
                  </button>
                </div>
              </Popover.Panel>
            </Popover>
          </th>
        </tr>
      </thead>
      <tbody>
        {blogs.map((blog, idx) => (
          <Blog blog={blog} idx={idx} key={blog._id} len={blogs.length} />
        ))}
      </tbody>
    </table>
  );
}
