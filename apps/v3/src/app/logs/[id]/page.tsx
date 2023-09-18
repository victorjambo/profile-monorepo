"use client";
import { useEffect, useState } from "react";
import { Laila } from "next/font/google";
import { blogs } from "shared-data";
import type { IBlog } from "models";
import { NavBack } from "ui";
import HeaderLinks from "../../../components/links/header";
import Footer from "../../../components/footer";

const laila = Laila({
  subsets: ["latin"],
  weight: "700",
});

export default function Page({ params }: { params: { id: string }}): JSX.Element {
  const [blog, setBlog] = useState<IBlog | null>(null);

  useEffect(() => {
    const blogId = params.id;
    if (blogId) {
      const _blog = blogs.find((b) => b.id === Number(blogId));
      if (_blog) {
        setBlog(_blog);
      }
    }
  }, []);

  return (
    <main className="w-full relative">
      <div className="h-screen p-6 md:p-11">
        <NavBack path="/logs" label="logs" />
        <HeaderLinks />
        {blog && (
          <div className="max-w-[65ch]">
            <div
              className={`${laila.className} dark:text-white text-3xl font-bold pb-9`}
            >
              {blog.title}
            </div>

            <div className="pt-10 flex flex-col space-y-5 leading-7">
              <p>
                {blog.description}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </main>
  );
}
