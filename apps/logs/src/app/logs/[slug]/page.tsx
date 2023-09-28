"use client";
import { MDXProvider } from "@mdx-js/react";
import { notFound } from "next/navigation";
import { logs } from "../../../logs";
import { ProviderComponents } from "../../../components/providers";
import Header from "../../../components/header";
import Footer from "../../../components/footer";

export default function Page({
  params,
}: {
  params: { slug: string };
}): JSX.Element {
  const slug = params.slug;

  const found = Object.keys(logs).find((log) => log === slug);
  if (!found) return notFound();

  const Component = logs[slug];

  return (
    <div className="container mx-auto max-w-3xl px-4 lg:px-0">
      <Header />
      <MDXProvider components={ProviderComponents}>
        <main className="basis-1/2">
          <article className="prose-xl">{Component()}</article>
        </main>
      </MDXProvider>
      <Footer />
    </div>
  );
}
