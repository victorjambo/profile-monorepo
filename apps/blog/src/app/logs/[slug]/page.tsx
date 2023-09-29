"use client";
import Image from "next/image";
import { notFound } from "next/navigation";
import { allLogs } from "contentlayer/generated";
import { MDXProvider } from "../../../components/providers";
import Header from "../../../components/header";
import Footer from "../../../components/footer";

export default function Page({
  params,
}: {
  params: { slug: string };
}): JSX.Element {
  const slug = params.slug;
  const post = allLogs.find((log) => log.slug.slice(1) === slug);
  if (!post) return notFound();

  return (
    <div className="container mx-auto max-w-3xl px-4 lg:px-0">
      <title>{post?.title}</title>
      <Header />
      <main className="basis-1/2">
        {post.image ? (
          <Image
            alt={post.title}
            className="my-8 rounded-md border bg-muted transition-colors"
            height={405}
            priority
            src={post.image}
            width={720}
          />
        ) : null}
        <MDXProvider code={post.body.code} />
      </main>
      <Footer />
    </div>
  );
}
