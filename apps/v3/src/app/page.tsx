import HeaderLinks from "../components/links/header";
import Work from "../components/work";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Projects from "../components/projects";

export default function Page(): JSX.Element {
  return (
    <main className="w-full">
      <div className="h-screen p-11 grid grid-cols-2">
        <Hero />
        <HeaderLinks />
      </div>
      <Work />
      <Projects />
      <Footer />
    </main>
  );
}
