export interface Event<TypeTech> {
  title: string;
  role: string;
  link: string;
  img?: string;
  tech?: TypeTech[];
  desc?: string;
}

export interface EventProp<TypeTech> {
  event: Event<TypeTech>;
  counter: number;
  count: number;
}

export interface FirebaseResponse<Timestamp> {
  count: number;
  created: Timestamp;
  updated: Timestamp;
}

export interface FirebaseData {
  path: string;
  visits: number;
  updated: string;
  created: string;
}

export interface FirebaseCounter {
  count: number;
}