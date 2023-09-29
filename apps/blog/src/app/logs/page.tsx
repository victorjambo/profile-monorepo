import Header from "../../components/header";
import Footer from "../../components/footer";
import Blogs from "../../components/blogs";

export default function Page({
  searchParams,
}: {
  searchParams?: { unpublished: string };
}): JSX.Element {
  return (
    <div className="container mx-auto max-w-3xl px-4 lg:px-0">
      <Header />
      <main className="basis-1/2">
        <article className="prose-xl">
          <Blogs unpublished={searchParams?.unpublished} />
        </article>
      </main>
      <Footer />
    </div>
  );
}
