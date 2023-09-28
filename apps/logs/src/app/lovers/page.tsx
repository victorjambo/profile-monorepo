"use client";
import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Image from "next/image";
import Lovers from "../../logs/lovers.mdx";

function ResponsiveImage(props): JSX.Element {
  return (
    <Image
      alt={props.alt}
      height={100}
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
      width={100}
      {...props}
    />
  );
}

const components = {
  img: ResponsiveImage,
};

export default function Page(): JSX.Element {
  return (
    <MDXProvider components={components}>
      <main className="flex justify-center w-full">
        <article className="prose w-[640px]">
          <Lovers />
        </article>
      </main>
    </MDXProvider>
  );
}
