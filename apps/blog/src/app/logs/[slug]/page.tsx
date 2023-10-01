/* eslint-disable @typescript-eslint/no-unsafe-argument -- . */
"use client";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";
import { cn } from "shared-data";
import { notFound } from "next/navigation";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import { calculateReadTime } from "../../../helpers/utils";
import { MDXProvider } from "../../../components/providers";
import { allBlogs } from "../../../../.contentlayer/generated";
import type { Blogs } from "../../../../.contentlayer/generated";

interface PageProps {
  params: {
    slug: string;
  };
}

function getPostFromParams(params: { slug: string }): Blogs | null {
  const blog = allBlogs.find((b) => b.slug === params.slug);

  if (!blog) return null;

  return blog;
}

export default function Page({ params }: PageProps): JSX.Element {
  const blog = getPostFromParams(params);

  if (!blog) return notFound();

  const readTime = calculateReadTime(blog.body.raw);

  return (
    <div className="relative container mx-auto max-w-3xl px-4 lg:px-0">
      <title>{blog.title}</title>
      <Header />
      <Link
        className={cn(
          "items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 absolute left-[-200px] top-34 hidden xl:inline-flex"
        )}
        href="/logs"
      >
        <ChevronLeftIcon className="mr-2 h-4 w-4" />
        <span>See all logs</span>
      </Link>
      <main className="basis-3/4">
        <div className="flex items-center text-sm text-muted-foreground">
          <span>{readTime} min read</span>
          {blog.date ? (
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- .
            <time dateTime={blog.date}>
              &nbsp;·&nbsp;{moment(blog.date).format("MMM Do, YYYY")}
            </time>
          ) : null}
        </div>
        <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">
          {blog.title}
        </h1>
        {blog.image ? (
          <Image
            alt={blog.title}
            className="my-8 rounded-md border bg-muted transition-colors"
            height={405}
            priority
            src={blog.image}
            width={768}
          />
        ) : null}
        <MDXProvider code={blog.body.code} />
      </main>
      <Footer />
    </div>
  );
}
