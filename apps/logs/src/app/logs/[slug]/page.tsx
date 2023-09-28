"use client";
import Link from "next/link";
import { MDXProvider } from "@mdx-js/react";
import { notFound } from 'next/navigation'
import { logs } from "../../../logs";
import { ProviderComponents } from "../../../components/providers";

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
    <div>
      <Link href="/logs">Go back</Link>

      <div>this is: {params.slug}</div>

      <MDXProvider components={ProviderComponents}>
        <main className="flex justify-center w-full">
          <article className="prose w-[640px]">{Component()}</article>
        </main>
      </MDXProvider>
    </div>
  );
}
