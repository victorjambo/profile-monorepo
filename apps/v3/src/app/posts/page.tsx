import Link from "next/link";
import { getPostsMeta } from "../../utils/posts";

export default async function Posts(): Promise<JSX.Element> {
  const posts = await getPostsMeta();

  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;
  }

  return (
    <div className="mx-auto">
      <section className="mt-6 mx-auto max-w-2xl">
        <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2>
        <ul className="w-full list-none p-0">
          {posts.map((post) => (
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
    </div>
  );
}
