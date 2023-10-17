import { Raleway } from "next/font/google";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { RESUME_INTERNAL_URL } from "builders";
import Link from "next/link";
import Skills from "../../../components/skills";
import { ThemeToggle } from "../../../components/theme-toggle";
import { Github } from "../../../components/social/github";
import { Linkedin } from "../../../components/social/linkedin";
import { Email } from "../../../components/social/email";

const raleway = Raleway({
  subsets: ["latin"],
});

export const metadata = {
  title: "cv",
};

export default function Page(): JSX.Element {
  return (
    <main
      className={`${raleway.className} bg-slate-50 dark:bg-slate-900 w-full dark:text-slate-300`}
    >
      <div className="flex justify-center py-0 md:pt-16 flex-col">
        <div className="bg-white dark:bg-slate-900 dark:shadow-2xl container mx-auto rounded-lg border dark:border-slate-800 relative">
          <div className="absolute right-0 p-5">
            <a download="victor-mutai-resume" href={RESUME_INTERNAL_URL}>
              <ArrowDownTrayIcon className="w-5 h-5 hover:scale-125" />
            </a>
          </div>
          <div className="md:grid grid-cols-3 divide-x dark:divide-slate-800 h-full py-5">
            <section className="text-center p-12 flex-col flex divide-y dark:divide-slate-800">
              <div>
                <span className="font-bold text-4xl">Victor Mutai</span>
                <div className="flex justify-center space-x-2 py-6">
                  <Github />
                  <Linkedin />
                  <Email />
                </div>
              </div>
              <div className="text-left">
                <h2 className="text-xl py-6 font-mono">skills</h2>
                <div className="text-xs flex flex-wrap">
                  <Skills />
                </div>
              </div>
            </section>
            <section className="col-span-2 p-12 prose-sm md:prose-lg prose-ul:list-disc">
              <section>
                <h1>Product-focused Software Engineer</h1>
                <p>
                  I&#39;m an experienced software engineer who loves building
                  web apps and designing backend systems. I enjoy working in a
                  team environment where skills can be shared as well as
                  developed. I love taking on complex challenges and creating
                  product-oriented solutions that make a real impact. My
                  technical toolbox is quite diverse, and I&#39;m proficient in
                  various technologies, such as ReactJS, NodeJS, NextJS, HTML,
                  CSS, JavaScript, Solidity, and Python.
                </p>
              </section>
              <section id="experience">
                <h2>Experience</h2>
                <div>
                  <h3>Senior Software Engineer</h3>
                  <span className="flex flex-col space-y-2">
                    <span className="font-medium space-x-1 text-base">
                      <a
                        href="https://iota.org"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        IOTA Foundation
                      </a>
                      <span>•</span>
                      <span>remote</span>
                    </span>
                    <span className="font-medium space-x-1 text-sm text-slate-600">
                      <span>Jun, 2023 - Present</span>
                      <span>•</span>
                      <span>5 mos</span>
                    </span>
                  </span>

                  <ul>
                    <li>
                      Building an infrastructure for a distributed supply chain
                      used for global trade.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3>Full Stack Software Engineer</h3>
                  <span className="flex flex-col space-y-2">
                    <span className="font-medium space-x-1 text-base">
                      <a
                        href="https://syndicate.io"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Syndicate
                      </a>
                      <span>•</span>
                      <span>remote</span>
                    </span>
                    <span className="font-medium space-x-1 text-sm text-slate-600">
                      <span>May 2021 - Jun 2023</span>
                      <span>•</span>
                      <span>2 yrs 2 mos</span>
                    </span>
                  </span>
                  <ul>
                    <li>
                      Develop large-scale modular ReactJS app with NextJS,
                      Typescript, and Tailwind.
                    </li>
                    <li>
                      Implement real-time data updates using Redux, improving
                      data accuracy and responsiveness
                    </li>
                    <li>
                      Lead small project teams to build and launch
                      industry-specific features, including secure payment
                      processing and data visualisation
                    </li>
                    <li>
                      Test and QA for responsiveness and efficiency,
                      troubleshoot and fix bugs, ensuring compliance with
                      relevant regulations
                    </li>
                    <li>
                      Collaborate with team members to optimise workflows,
                      experiment with new ideas, and improve existing ones
                    </li>
                    <li>
                      Design and integrate GraphQL backend with various systems,
                      ensuring seamless data flow and integration
                    </li>
                    <li>
                      Architected and implemented robust platforms for managing
                      ERC-20 Tokens, NFTs, and Staking Tokens, optimising
                      security and user experience.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3>Software Engineer</h3>
                  <span className="flex flex-col space-y-2">
                    <span className="font-medium space-x-1 text-base">
                      <a
                        href="https://prezi.com"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Prezi
                      </a>
                      <span>•</span>
                      <span>remote</span>
                    </span>
                    <span className="font-medium space-x-1 text-sm text-slate-600">
                      <span>Jun, 2019 - Apr, 2021</span>
                      <span>•</span>
                      <span>2 yrs</span>
                    </span>
                  </span>
                  <ul>
                    <li>
                      Built a new microservice with Django, React, and DynamoDB
                      to provide notification systems to our app.
                    </li>
                    <li>
                      Led the migration of payments and subscriptions data for
                      hundreds of thousands of users between two major
                      subscription-management service providers, ensuring a
                      seamless transition with minimal downtime
                    </li>
                    <li>
                      Besides writing code, I wrote technical and concept
                      documentation.
                    </li>
                    <li>
                      Integrating with 3rd party APIs including, Zuora, AllPago,
                      Braintree, Kount, Paypal, and SalesForce.
                    </li>
                    <li>
                      Created internal RESTful APIs for efficient data retrieval
                      and manipulation in various applications
                    </li>
                    <li>
                      Successfully adjusted payment flows at Prezi to
                      accommodate A/B testing experiments, resulting in valuable
                      insights and informed decision-making
                    </li>
                  </ul>
                </div>
                <div>
                  <h3>Software Engineer</h3>
                  <span className="flex flex-col space-y-2">
                    <span className="font-medium space-x-1 text-base">
                      <a
                        href="https://andela.com"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Andela
                      </a>
                      <span>•</span>
                      <span>hybrid</span>
                    </span>
                    <span className="font-medium space-x-1 text-sm text-slate-600">
                      <span>May 2018 - Sep 2020</span>
                      <span>•</span>
                      <span>2 yrs 5 mos</span>
                    </span>
                  </span>
                  <ul>
                    <li>
                      Frontend Technical Team Lead for an internal management
                      platform, responsible for designing and implementing
                      frontend features with ReactJS.
                    </li>
                    <li>
                      Developed custom components, including charts, graphs, and
                      data tables, to enhance the user experience and provide
                      better insights into data
                    </li>
                    <li>
                      Mentored and onboarded junior engineers in ReactJs best
                      practices, improving overall team performance
                    </li>
                    <li>
                      Designed a secure, scalable backend REST API with Python
                      Flask, facilitating efficient data processing for multiple
                      applications
                    </li>
                  </ul>
                </div>
                <div>
                  <h3>Data Aggregation Specialist</h3>
                  <span className="flex flex-col space-y-2">
                    <span className="font-medium space-x-1 text-base">
                      <a
                        href="https://glassdoor.com"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Glassdoor
                      </a>
                      <span>•</span>
                      <span>remote</span>
                    </span>
                    <span className="font-medium space-x-1 text-sm text-slate-600">
                      <span>Sep, 2015 - Apr, 2018</span>
                      <span>•</span>
                      <span>2 yrs 8 mos</span>
                    </span>
                  </span>
                  <ul>
                    <li>
                      Developed custom web crawlers for various industries,
                      extracting and analysing data, ensuring accuracy and
                      compliance with industry standards
                    </li>
                    <li>
                      Collaborated with teams to optimise data aggregation
                      processes, resulting in improved data quality and reduced
                      error rates
                    </li>
                    <li>
                      Provided technical support for sales and customer success
                      teams, assisting in the onboarding process and addressing
                      any technical challenges
                    </li>
                  </ul>
                </div>
              </section>

              <section id="education">
                <h2>Education</h2>

                <div>
                  <h3>BSc Information Technology, Information Technology</h3>
                  <span className="flex flex-col space-y-2">
                    <span className="font-medium space-x-1 text-base">
                      <a
                        href="https://www.jkuat.ac.ke/undergraduate-courses/bsc-information-technology/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Jomo Kenyatta University of Agriculture and Technology
                      </a>
                    </span>
                    <span className="font-medium text-sm text-slate-600">
                      <span>Completed: Jan, 2015</span>
                    </span>
                  </span>

                  <ul>
                    <li>Scripting Languages (Ruby, Python).</li>
                    <li>data structures and algorithms (Java).</li>
                    <li>Computer Security.</li>
                    <li>Web development (HTML, CSS, JavaScript).</li>
                  </ul>
                </div>
              </section>

              <section id="projects">
                <h2>Projects</h2>

                <div>
                  <h3>
                    <a
                      href="https://holdlit.getlit.wtf"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      LIT Staking
                    </a>
                  </h3>
                  <span className="flex flex-col space-y-2">
                    <span className="font-medium space-x-1 text-sm text-slate-600">
                      <span>2022</span>
                    </span>
                    <span>Official staking site for LIT Coin</span>
                  </span>
                </div>

                <div>
                  <h3>
                    <a
                      href="https://tokenkid.netlify.app"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      TokenKid
                    </a>
                  </h3>
                  <span className="flex flex-col space-y-2">
                    <span className="font-medium space-x-1 text-sm text-slate-600">
                      <span>2022 - Present</span>
                    </span>
                    <span>Multichain NFT marketplace</span>
                  </span>
                </div>
              </section>
            </section>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 dark:shadow-2xl container mx-auto rounded-t-lg border dark:border-slate-800 mt-16">
          <div className="flex justify-between items-center py-4 px-12">
            <Link className="flex text-sm font-bold" href="/">
              main site 🙌
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </main>
  );
}
