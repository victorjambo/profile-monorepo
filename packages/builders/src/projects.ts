import type { IEvent } from "models";
import type { Tech } from "./stacks";

export const projects: IEvent<(typeof Tech)[number]>[] = [
  {
    title: "Lit Staking",
    role: "Official staking site for LIT Coin",
    link: "https://coinmarketcap.com/currencies/lit/",
    img: "/images/banners/lit-staking.png",
  },
  {
    title: "Tokenkid",
    role: "TokenKid is multichain NFT Marketplace. Supports Celo and Goerli Testnet",
    link: "https://tokenkid.netlify.app/",
    img: "/images/banners/tokenkid.png",
  },
  {
    title: "Metamask Clone",
    role: "Metamask Portfolio Clone: helps you View and manage your entire Web3 portfolio.",
    link: "https://lighthearted-starburst-103cb0.netlify.app/",
    img: "/images/banners/meta.png",
  },
  {
    title: "Portfolio V2",
    role: "This technical Portfolio website. Code is open source.",
    link: "https://profile-monorepo-v2.vercel.app/",
    img: "/images/banners/profile-v2.png",
  },
  {
    title: "Portfolio V1",
    role: "This technical Portfolio website. Code is open source.",
    link: "https://github.com/victorjambo/personal-resume",
    img: "/images/banners/profile-v1.png",
  },
];
