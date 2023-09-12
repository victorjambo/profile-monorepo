import { NotImplemented } from "ui";
import Footer from "../../components/footer";
import { Laila } from "next/font/google";
import HeaderLinks from "../../components/links/header";
import Link from "next/link";

const laila = Laila({
  subsets: ["latin"],
  weight: "700",
});

export default function Page(): JSX.Element {
  return (
    <main className="w-full relative">
      <div className="h-screen p-6 md:p-11">
        <HeaderLinks />
        <div className="max-w-[65ch]">
          <div
            className={`${laila.className} dark:text-white font-bold pb-2`}
          >
            select writing
          </div>

          <div className="pt-10 flex flex-col space-y-5 leading-7">
            <Link href="/logs/1">
              • Local Storage vs Cookies
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </main>
  );
}
