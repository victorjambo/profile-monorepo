export interface FirebasePayload<Timestamp> {
  count: number;
  created?: Timestamp;
  updated?: Timestamp;
}

export interface FirebaseResponse<Timestamp> {
  count: number;
  created: Timestamp;
  updated: Timestamp;
}

export interface FirebaseCounter {
  count: number;
}

export interface Data {
  path: string;
  visits: number;
  updated: string;
  created: string;
}
