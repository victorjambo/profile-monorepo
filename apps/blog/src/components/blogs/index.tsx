"use client";
import { allBlogs } from "../../../.contentlayer/generated";
import Blog from "../blog";

export default function Blogs(): JSX.Element {
  const blogs = allBlogs.filter((blog) => blog.isVisible);

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
