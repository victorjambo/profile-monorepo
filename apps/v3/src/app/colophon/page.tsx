import { Laila } from "next/font/google";
import { NavBack } from "ui";
import Footer from "../../components/footer";
import HeaderLinks from "../../components/links/header";

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
          <div
            className={`${laila.className} dark:text-white text-xl font-bold pb-5`}
          >
            colophon
          </div>

          <div className="py-1.5 pl-4 border-l-4 border-gray-900 dark:border-white">
            <blockquote>
              A <i>colophon</i> is a designer word for &apos;how this site was made&apos;
            </blockquote>
          </div>

          <div className="py-5 flex flex-col space-y-5 leading-7">
            Here are a few of the tools I used to put this site together:
            <ul className="pl-6">
              <li>• NextJS</li>
              <li>• ReactJS</li>
              <li>• Turborepo</li>
              <li>• Tailwindcss</li>
              <li>• Netlify</li>
              <li>• Vercel</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </main>
  );
}
