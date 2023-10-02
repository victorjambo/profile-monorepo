import React from "react";
import { DEV_EMAIL } from "shared-data";
import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Page(): JSX.Element {
  return (
    <div className="container mx-auto max-w-3xl px-4 lg:px-0">
      <Header />
      <main className="basis-3/4">
        <article>
          <section className="lead">
            <p>👋 Hi - I&apos;m Victor.</p>
            <p>
              I&apos;m an experienced software engineer who loves building web
              apps and designing backend systems. I enjoy working in a team
              environment where skills can be shared as well as developed.{" "}
            </p>
            <p>
              I love taking on complex challenges and creating product-oriented
              solutions that make a real impact.
            </p>

            <p>
              My technical toolbox is quite diverse, and I&apos;m proficient in
              various technologies, such as ReactJS, NodeJS, NextJS, HTML, CSS,
              JavaScript, Solidity, and Python.
            </p>

            <p>
              Frontend-focused engineer with experience working across teams,
              leading technical projects, and building processes, interested in
              social good.
            </p>
          </section>

          <section className="mb-6 mt-6">
            <h3 className="text-xs text-gray-500">elsewhere</h3>
            <div className="text-base">
              <a
                href="https://victorjambo.medium.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                medium
              </a>
              &nbsp;·&nbsp;
              <a
                href={`mailto:${DEV_EMAIL}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                email
              </a>
              &nbsp;·&nbsp;
              <a
                href="https://github.com/victorjambo"
                rel="noopener noreferrer"
                target="_blank"
              >
                github
              </a>
              &nbsp;·&nbsp;
              <a
                href="https://twitter.com/victor_jambo"
                rel="noopener noreferrer"
                target="_blank"
              >
                twitter
              </a>
              &nbsp;·&nbsp;
              <a
                href="https://www.linkedin.com/in/mutaivictor"
                rel="noopener noreferrer"
                target="_blank"
              >
                linkedin
              </a>
            </div>
          </section>

          <section className="mb-6 mt-6">
            <h4>Everything I&apos;ve written online.</h4>
            <ul className="text-base">
              <li>
                <Link className="underline cursor-pointer" href="/logs">
                  Published
                </Link>
                <span> — Stuff I&apos;ve sent.</span>
              </li>
              <li>
                <Link
                  className="underline cursor-pointer"
                  href="/logs?filter=unpublished"
                >
                  Unpublished
                </Link>
                <span> — Those with a potential future.</span>
              </li>
              <li>
                <Link
                  className="underline cursor-pointer"
                  href="/logs?filter=external"
                >
                  Medium
                </Link>
                <span> — published externally.</span>
              </li>
              <li>
                <Link className="underline cursor-pointer" href="/tags">
                  Tags
                </Link>
                <span> — Haphazardly organized loosely by interest.</span>
              </li>
            </ul>
            <p>
              you can find all other posts in the{" "}
              <Link className="underline" href="/logs">
                log
              </Link>
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
