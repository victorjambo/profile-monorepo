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
            select writing
          </div>

          <div className="pt-10 flex flex-col space-y-5 leading-7">
            {blogs.map((blog) => (
              <div key={blog.id}>
                {blog.href ? (
                  <a
                    href={blog.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="cursor-pointer w-fit hover:border-b border-vase dark:border-slate-300 border-dotted flex items-center space-x-2"
                  >
                    <span>• {blog.title}</span>
                    <ArrowUpRightIcon className="w-3 h-3" />
                  </a>
                ) : (
                  <Link href={`/logs/${blog.id}`} className="cursor-pointer w-fit hover:border-b border-vase dark:border-slate-300 border-dotted">
                    • {blog.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </main>
  );
}
