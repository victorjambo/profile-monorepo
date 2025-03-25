export interface Event<TypeTech> {
  title: string;
  role: string;
  link: string;
  img?: string;
  tech?: TypeTech[];
  desc?: string;
}