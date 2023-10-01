import Tags from "../../components/tags";
import Footer from "../../components/footer";
import Header from "../../components/header";

export default function Page(): JSX.Element {
  return (
    <div className="container mx-auto max-w-3xl px-4 lg:px-0">
      <Header />
      <main className="basis-1/2">
        <article>
          <Tags />
        </article>
      </main>
      <Footer />
    </div>
  );
}
