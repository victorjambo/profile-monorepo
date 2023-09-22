"use client";
import React from "react";
import HeaderLinks from "../components/links/header";
import Work from "../components/work";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Projects from "../components/projects";
// import { useVisitors } from "../hooks/visitors";

export default function Page(): JSX.Element {
  // useVisitors("/", {
  //   isLogged: true,
  //   query: searchParams?.source
  // });

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
