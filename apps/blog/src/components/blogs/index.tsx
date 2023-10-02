"use client";
import { allBlogs } from "../../../.contentlayer/generated";
import Blog from "../blog";
import TableFilter from "../table-filter";

export default function Blogs({
  query,
}: {
  query?: { filter: string; tags: string };
}): JSX.Element {
  const blogs = allBlogs.filter((blog) => {
    if (query) {
      if (query.filter && query.filter === "unpublished") {
        return blog.isVisible && !blog.published;
      }
      if (query.filter && query.filter === "external") {
        return blog.isVisible && blog.isExternal;
      }
      if (query.tags) {
        return blog.isVisible && blog.tags?.includes(query.tags);
      }
    }
    return blog.isVisible && blog.published;
  });

  return (
    <table className="w-full">
      <thead>
        <tr className="pb-5">
          <th className="pl-3 text-left">title</th>
          <th className="pr-3 text-right">
            <TableFilter />
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
