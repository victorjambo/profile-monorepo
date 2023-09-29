"use client";
import { allBlogs } from "../../../.contentlayer/generated";
import Blog from "../blog";

export default function Blogs({
  query,
}: {
  query?: { unpublished: string; filter: string };
}): JSX.Element {
  const blogs = allBlogs.filter((blog) => {
    if (query?.unpublished) return blog.isVisible && !blog.published;
    if (query?.filter)
      return blog.isVisible && blog.tags?.includes(query.filter);
    return blog.isVisible && blog.published;
  });

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="pl-3 text-left">title</th>
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
