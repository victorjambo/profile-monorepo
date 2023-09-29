"use client";
import Image from "next/image";
import { notFound } from "next/navigation";
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
    <div className="container mx-auto max-w-3xl px-4 lg:px-0">
      <title>{blog.title}</title>
      <Header />
      <main className="basis-1/2">
        {blog.image ? (
          <Image
            alt={blog.title}
            className="my-8 rounded-md border bg-muted transition-colors"
            height={405}
            priority
            src={blog.image}
            width={720}
          />
        ) : null}
        <MDXProvider code={blog.body.code} />
      </main>
      <Footer />
    </div>
  );
}
