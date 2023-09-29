import React from "react";
import { DEV_EMAIL } from "shared-data";
import Blogs from "../components/blogs";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Page(): JSX.Element {
  return (
    <div className="container mx-auto max-w-3xl px-4 lg:px-0">
      <Header />
      <main className="basis-3/4">
        <article className="prose-xl">
          <section>
            <p className="lead">👋 Hi - I&apos;m Victor.</p>
            <p className="lead">
              I&apos;m an experienced software engineer who loves building web
              apps and designing backend systems.
            </p>
            <p className="lead">
              I enjoy working in a team environment where skills can be shared
              as well as developed.{" "}
            </p>
            <p className="lead">
              I love taking on complex challenges and creating product-oriented
              solutions that make a real impact.
            </p>

            <p className="text-lg">
              My technical toolbox is quite diverse, and I&apos;m proficient in
              various technologies, such as ReactJS, NodeJS, NextJS, HTML, CSS,
              JavaScript, Solidity, and Python.
            </p>

            <p className="text-lg">
              Frontend-focused engineer with experience working across teams,
              leading technical projects, and building processes, interested in
              social good.
            </p>
            <p>In a previous life: built investment clubs.</p>
          </section>

          <section className="mb-6 mt-6">
            <h3 className="text-xs text-gray-500">elsewhere</h3>
            <div>
              <a href="https://victorjambo.medium.com" rel="noopener noreferrer" target="_blank">
                medium
              </a>
              &nbsp;·&nbsp;
              <a href={`mailto:${DEV_EMAIL}`} rel="noopener noreferrer" target="_blank">
                email
              </a>
              &nbsp;·&nbsp;
              <a href="https://github.com/victorjambo" rel="noopener noreferrer" target="_blank">
                github
              </a>
              &nbsp;·&nbsp;
              <a href="https://twitter.com/victor_jambo" rel="noopener noreferrer" target="_blank">
                twitter
              </a>
              &nbsp;·&nbsp;
              <a href="https://www.linkedin.com/in/mutaivictor" rel="noopener noreferrer" target="_blank">
                linkedin
              </a>
            </div>
          </section>

          <section className="mb-6 mt-6">
            <Blogs />
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
