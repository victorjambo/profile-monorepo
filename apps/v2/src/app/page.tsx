"use client";
import React, { Suspense } from "react";
import Navbar from "../components/navbar";
import Side from "../components/side";
import AboutSection from "../components/sections/about";
import HeroSection from "../components/sections/hero";
import Footer from "../components/footer";
import ContactSection from "../components/sections/contact";
import ExperienceSection from "../components/sections/experience";
import WorkSection from "../components/sections/work";
import { useVisitors } from "../hooks/visitors";

export default function Home({
  searchParams,
}: {
  searchParams?: { source: string };
}): JSX.Element {
  useVisitors(searchParams);

  return (
    <div>
      <Navbar />
      <Suspense>
        <Side />
      </Suspense>

      <div className="mx-auto px-[6%] md:px-[150px]">
        <main className="h-full">
          <HeroSection />
          <Suspense>
            <AboutSection />
          </Suspense>
          <Suspense>
            <ExperienceSection />
          </Suspense>
          <Suspense>
            <WorkSection />
          </Suspense>
          <Suspense>
            <ContactSection />
          </Suspense>
        </main>
        <Suspense>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}
