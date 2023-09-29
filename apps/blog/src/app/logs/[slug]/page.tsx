"use client";
import Image from "next/image";
import { notFound } from "next/navigation";
import { allBlogs, type Blogs } from "contentlayer/generated";
import { MDXProvider } from "../../../components/providers";
import Header from "../../../components/header";
import Footer from "../../../components/footer";

export default function Page({
  params,
}: {
  params: { slug: string };
}): JSX.Element {
  const slug = params.slug;
  const blog = allBlogs.find((b: Blogs) => b.slug === slug);
  if (!blog) return notFound();

  return (
    <div className="container mx-auto max-w-3xl px-4 lg:px-0">
      <title>{blog?.title}</title>
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
