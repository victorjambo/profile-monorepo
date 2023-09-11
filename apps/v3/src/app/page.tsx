import HeaderLinks from "../components/links/header";
import FooterLinks from "../components/links/footer";
import Work from "../components/work";
import Hero from "../components/hero";

export default function Page(): JSX.Element {
  return (
    <main className="w-full">
      <div className="h-screen p-11 grid grid-cols-2">
        <Hero />

        <HeaderLinks />
      </div>
      <div className="h-fit p-11">
        <Work />
      </div>
      <div className="flex justify-between px-11 py-5 border-t">
        <div>© 2023 Victor Mutai</div>
        <FooterLinks />
      </div>
    </main>
  );
}
