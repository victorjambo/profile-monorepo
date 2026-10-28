import type { Event } from "../types";
import type { Tech } from "./stacks";

export const projects: Event<(typeof Tech)[number]>[] = [
  {
    title: "Lit Staking",
    role: "Token staking platform",
    link: "https://holdlit.getlit.wtf",
    liveDemo: "https://holdlit.getlit.wtf",
    img: "/images/banners/lit-staking.png",
    tech: ["React", "TypeScript", "Node.js", "web3"],
    problem:
      "Token holders needed a reliable staking experience that made participation simple without compromising trust.",
    solution:
      "Delivered the official LIT Coin staking interface with a streamlined flow for wallet connection, staking actions, and user feedback.",
    impact:
      "Shipped a production-ready staking experience for a live token ecosystem. Placeholder: add adoption or staking-volume metric.",
  },
  {
    title: "Tokenkid",
    role: "Multichain NFT marketplace",
    link: "https://tokenkid.netlify.app/",
    liveDemo: "https://tokenkid.netlify.app/",
    img: "/images/banners/tokenkid.png",
    tech: ["React", "TypeScript", "Node.js", "web3"],
    problem:
      "NFT users needed a lightweight marketplace flow that could support assets across multiple chains without a fragmented experience.",
    solution:
      "Built a multichain marketplace supporting Celo and Goerli test networks with browsing, wallet connectivity, and transaction flows.",
    impact:
      "Validated a cross-chain product direction with an end-to-end marketplace prototype. Placeholder: add user, volume, or engagement result.",
  },
  {
    title: "Metamask Clone",
    role: "Portfolio management interface",
    link: "https://lighthearted-starburst-103cb0.netlify.app/",
    liveDemo: "https://lighthearted-starburst-103cb0.netlify.app/",
    img: "/images/banners/meta.png",
    tech: ["React", "TypeScript", "Next.js", "Tailwind", "web3"],
    problem:
      "Web3 users often manage fragmented balances and assets across interfaces that make portfolio visibility harder than it should be.",
    solution:
      "Recreated a portfolio dashboard experience focused on asset visibility, account context, and a cleaner overview of holdings.",
    impact:
      "Demonstrated product thinking around wallet UX and dashboard architecture. Placeholder: add performance or usability outcome.",
  },
  {
    title: "Portfolio V2",
    role: "Portfolio platform",
    link: "https://profile-monorepo-v2.vercel.app/",
    liveDemo: "https://profile-monorepo-v2.vercel.app/",
    sourceCode: "https://github.com/victorjambo/profile-monorepo",
    img: "/images/banners/profile-v2.png",
    tech: ["Next.js", "TypeScript", "Tailwind", "Turborepo", "MDX"],
    problem:
      "A personal site needed to communicate engineering depth, consolidate content, and stay easy to evolve over time.",
    solution:
      "Built a monorepo-based portfolio with reusable components, shared packages, and a structure designed for ongoing iteration.",
    impact:
      "Created a maintainable personal platform with faster content and UI updates. Placeholder: add traffic, inbound, or conversion metric.",
  },
  {
    title: "Portfolio V1",
    role: "Open-source resume site",
    link: "https://github.com/victorjambo/personal-resume",
    sourceCode: "https://github.com/victorjambo/personal-resume",
    img: "/images/banners/profile-v1.png",
    tech: ["Next.js", "Javascript", "CSS"],
    problem:
      "An early portfolio needed a public, code-first way to present experience and make technical work easy to review.",
    solution:
      "Delivered the first open-source version of the portfolio with a lightweight structure centered on clarity and credibility.",
    impact:
      "Established a public foundation for personal brand and technical storytelling. Placeholder: add measurable hiring or outreach result.",
  },
];
