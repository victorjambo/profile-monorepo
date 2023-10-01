"use client";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { cn } from "shared-data";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import type { Blogs } from "../../../../.contentlayer/generated";
import { allBlogs } from "../../../../.contentlayer/generated";
import { MDXProvider } from "../../../components/providers";
import Header from "../../../components/header";
import Footer from "../../../components/footer";

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

  return (
    <div className="relative container mx-auto max-w-3xl px-4 lg:px-0">
      <title>{blog.title}</title>
      <Header />
      <Link
        className={cn(
          "absolute left-[-200px] top-34 hidden xl:inline-flex items-center"
        )}
        href="/logs"
      >
        <ChevronLeftIcon className="mr-2 h-4 w-4" />
        <span>See all logs</span>
      </Link>
      <main className="basis-3/4">
        {blog.date ? (
          <time className="block text-sm text-muted-foreground">
            Published on {blog.date}
          </time>
        ) : null}
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
