import React from "react";
import Item from "../work/item";

const Projects: React.FC = () => {
  return (
    <div className="h-fit px-6 md:px-11 pb-20 mt-10 lg:-mt-16">
      <div className="grid md:grid-cols-2">
        <div className="flex flex-col w-full items-center">
          <div className="w-full lg:w-3/4">
            <div className="py-5 dark:text-white">some projects i worked on</div>

            <div>
              {projects.map((project, idx) => (
                <Item
                  key={project.noun}
                  item={project}
                  counter={idx + 1}
                  count={projects.length}
                />
              ))}
            </div>
          </div>
        </div>
        <div />
      </div>
    </div>
  );
};

export default Projects;

const projects = [
  {
    noun: "Lit Staking",
    verb: "Official staking site for LIT Coin",
    link: "https://coinmarketcap.com/currencies/lit/",
    img: "/images/banners/lit-staking.png"
  },
  {
    noun: "Tokenkid",
    verb: "TokenKid is multichain NFT Marketplace. Supports Celo and Goerli Testnet",
    link: "https://tokenkid.netlify.app/",
    img: "/images/banners/tokenkid.png"
  },
  {
    noun: "Metamask Clone",
    verb: "Metamask Portfolio Clone: helps you View and manage your entire Web3 portfolio.",
    link: "https://lighthearted-starburst-103cb0.netlify.app/",
    img: "/images/banners/meta.png"
  },
  {
    noun: "Portfolio V2",
    verb: "This technical Portfolio website. Code is open source.",
    link: "https://profile-monorepo-v2.vercel.app/",
    img: "/images/banners/profile-v2.png"
  },
  {
    noun: "Portfolio V1",
    verb: "This technical Portfolio website. Code is open source.",
    link: "https://github.com/victorjambo/personal-resume",
    img: "/images/banners/profile-v1.png"
  },
];
