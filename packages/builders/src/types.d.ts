export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
  twitter: string;
}

export interface Event<TypeTech> {
  title: string;
  role: string;
  link: string;
  img?: string;
  tech?: TypeTech[];
  desc?: string;
  problem?: string;
  solution?: string;
  impact?: string;
  liveDemo?: string;
  sourceCode?: string;
}

export interface EventProp<TypeTech> {
  event: Event<TypeTech>;
  counter: number;
  count: number;
}
