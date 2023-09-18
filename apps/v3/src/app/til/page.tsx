import { Laila } from "next/font/google";
import { NavBack } from "ui";
import HeaderLinks from "../../components/links/header";
import Footer from "../../components/footer";

const laila = Laila({
  subsets: ["latin"],
  weight: "700",
});

export default function Page(): JSX.Element {
  return (
    <main className="w-full relative">
      <div className="h-screen p-6 md:p-11">
        <NavBack />
        <HeaderLinks />
        <div className="max-w-[65ch]">
          <div className={`${laila.className} dark:text-white font-bold pb-2`}>
            til
          </div>
          <div>its working on my machine 😂</div>
          
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </main>
  );
}
