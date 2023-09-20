import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostsMeta, getPostByName } from "../../../utils/posts";
import "highlight.js/styles/github-dark.css";
import "highlight.js/styles/googlecode.css";

export const revalidate = 86400;

interface PostProps {
  params: {
    postId: string;
  };
}

function getFormattedDate(dateString: string): string {
  return new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
    new Date(dateString)
  );
}

export async function generateStaticParams(): Promise<
  {
    postId: string;
  }[]
> {
  const posts = await getPostsMeta();

  if (!posts) return [];

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export async function generateMetadata({
  params: { postId },
}: PostProps): Promise<{
  title: string;
}> {
  const post = await getPostByName(`${postId}.mdx`);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.meta.title,
  };
}

export default async function Post({
  params,
}: PostProps): Promise<JSX.Element> {
  const post = await getPostByName(`${params.postId}.mdx`);

  if (!post) notFound();

  const { meta, content } = post;

  const pubDate = getFormattedDate(meta.date);

  const tags = meta.tags.map((tag) => (
    <Link href={`/tags/${tag}`} key={tag}>
      {tag}
    </Link>
  ));

  return (
    <main className="px-4 md:px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
      <h2 className="text-3xl mt-4 mb-0">{meta.title}</h2>
      <p className="mt-0 text-sm">{pubDate}</p>
      <article>{content}</article>
      <section>
        <h3>Related:</h3>
        <div className="flex flex-row gap-4">{tags}</div>
      </section>
      <p className="mb-10">
        <Link href="/posts">← Back</Link>
      </p>
    </main>
  );
}
