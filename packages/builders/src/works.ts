import type { IEvent } from "models";
import type { Tech } from "./stacks";

export const works: IEvent<(typeof Tech)[number]>[] = [
  {
    title: "IOTA Foundation",
    role: "Senior Software Engineer",
    link: "https://iota.org",
    tech: ["React", "TypeScript", "Node.js", "AWS"],
    desc: `Building an open-source infrastructure for global trade.`,
  },
  {
    title: "Syndicate",
    role: "Fullstack software engineer",
    link: "https://syndicate.io",
    tech: ["React", "TypeScript", "Next.js", "GraphQL", "web3"],
    desc: `spent 2 years building web3 investments products and features.
           Notable work included the 
           <a
            rel="noopener noreferrer"
            target="_blank"
            style="border-bottom-width: 1px; border-style: dotted; border-color: #357EFC;"
            href="https://techcrunch.com/2022/01/25/crypto-startup-syndicate-looks-to-demystify-daos-with-web3-investment-club-product/">
              investment club
           </a> 
           experience, account creation + authentication, and profiles for individuals and on-chain communities.`,
  },
  {
    title: "Prezi",
    role: "Fullstack Software Engineer, Payments",
    link: "https://prezi.com",
    tech: ["Python", "Django", "React", "TypeScript", "ETL"],
    desc: `build and manage microservices to handle Payments and user signup.
            Handled payments with tools like Zuora and Braintree`,
  },
  {
    title: "Andela",
    role: "Fullstack Software Engineer",
    tech: ["React", "Python", "Flask", "Node.js"],
    link: "https://andela.com",
    desc: `worked with cross functional teams to build Andela social platform`
  },
  {
    title: "Glassdoor",
    role: "Data Aggregation Engineer",
    tech: ["Ruby on Rails", "Tableau", "Javascript"],
    link: "https://glassdoor.com",
    desc: `Manage web crawlers, and build ETLs`
  },
];
