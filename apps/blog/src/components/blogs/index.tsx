"use client";
import { allBlogs } from "../../../.contentlayer/generated";
import Blog from "../blog";

export default function Blogs(): JSX.Element {
  const blogs = allBlogs.filter((blog) => blog.published);

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="pl-3 text-left">title</th>
          <th className="pr-3 text-right">tags</th>
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
