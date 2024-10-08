"use client";
import React from "react";
import HeaderLinks from "../../components/links/header";
import Work from "../../components/work";
import Hero from "../../components/hero";
import Footer from "../../components/footer";
import Projects from "../../components/projects";
import { useReferer } from "../../hooks/referer";

export default function Page({
  searchParams,
}: {
  searchParams?: { source: string };
}): JSX.Element {
  useReferer(searchParams);

  return (
    <main className="w-full">
      <div className="h-[100dvh] md:h-screen p-6 md:p-11 grid md:grid-cols-2">
        <div className="md:order-first order-last">
          <Hero />
        </div>
        <HeaderLinks />
      </div>
      <Work />
      <Projects />
      <Footer />
    </main>
  );
}
