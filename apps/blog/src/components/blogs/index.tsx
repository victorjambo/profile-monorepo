"use client";
import Link from "next/link";
import Image from "next/image";
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
    <div>
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground">
            A blog built using Contentlayer. Posts are written in MDX.
          </p>
        </div>
      </div>
      <hr className="my-8" />
      {blogs.length ? (
        <div className="grid gap-10 sm:grid-cols-2">
          {blogs.map((blog, index) => (
            <article
              className="group relative flex flex-col space-y-2"
              key={blog._id}
            >
              {blog.image ? <Image
                  alt={blog.title}
                  className="rounded-md border bg-muted transition-colors h-[225px] object-fill"
                  height={225}
                  priority={index <= 1}
                  src={blog.image}
                  width={804}
                /> : null}
              <h2 className="text-2xl font-extrabold">{blog.title}</h2>
              {blog.description ? <p className="text-muted-foreground">{blog.description}</p> : null}
              {blog.date ? <p className="text-sm text-muted-foreground">
                  {blog.date}
                </p> : null}
              <Link className="absolute inset-0" href={blog.slug} >
                <span className="sr-only">View Article</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>No posts published.</p>
      )}
    </div>
  );
}
