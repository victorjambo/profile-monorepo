import React from "react";
import Script from "next/script";
import HeaderLinks from "../components/links/header";
import Work from "../components/work";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Projects from "../components/projects";

export default function Page(): JSX.Element {
  return (
    <>
      {/* {process.env.NODE_ENV !== "development" && <Script src="/scripts/debugger.js" />} */}
      <main className="w-full">
        <div className="h-screen p-6 md:p-11 grid md:grid-cols-2">
          <div className="md:order-first order-last">
            <Hero />
          </div>
          <HeaderLinks />
        </div>
        <Work />
        <Projects />
        <Footer />
      </main>
    </>
  );
}
