import Link from "next/link";
import { getPostsMeta } from "../../../utils/posts";

export const revalidate = 86400;

interface TagProps {
  params: {
    tag: string;
  };
}

export async function generateStaticParams(): Promise<
  {
    tag: string;
  }[]
> {
  const posts = await getPostsMeta();

  if (!posts) return [];

  const tags = new Set(posts.map((post) => post.tags).flat());

  return Array.from(tags).map((tag) => ({ tag }));
}

export function generateMetadata({ params: { tag } }: TagProps): {
  title: string;
} {
  return {
    title: `Posts about ${tag}`,
  };
}

export default async function TagPostList({
  params: { tag },
}: TagProps): Promise<JSX.Element> {
  const posts = await getPostsMeta();

  if (!posts)
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;

  const tagPosts = posts.filter((post) => post.tags.includes(tag));

  if (!tagPosts.length) {
    return (
      <div className="text-center">
        <p className="mt-10">Sorry, no posts for that keyword.</p>
        <Link href="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-3xl mt-4 mb-0">Results for: #{tag}</h2>
      <section className="mt-6 mx-auto max-w-2xl">
        <ul className="w-full list-none p-0">
          {tagPosts.map((post) => (
            <li className="mt-4 text-2xl dark:text-white/90" key={post.id}>
              <Link
                className="underline hover:text-black/70 dark:hover:text-white"
                href={`/posts/${post.id}`}
              >
                {post.title}
              </Link>
              <br />
              <p className="text-sm mt-1">{post.date}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
