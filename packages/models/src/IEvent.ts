export interface IEvent<TypeTech> {
  title: string;
  role: string;
  link: string;
  img?: string;
  tech?: TypeTech[];
  desc?: string;
}

export interface IEventProp<TypeTech> {
  event: IEvent<TypeTech>;
  counter: number;
  count: number;
}
