export interface FirebasePayload<Timestamp> {
  count: number;
  created?: Timestamp;
  updated?: Timestamp;
}

export interface FirebaseCounter {
  count: number;
}
