import { blogs } from "shared-data";
import Footer from "../../components/footer";
import { Laila } from "next/font/google";
import HeaderLinks from "../../components/links/header";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { NavBack } from "ui";

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
