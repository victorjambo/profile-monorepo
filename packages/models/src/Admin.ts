export interface V2Data {
  visits: number;
  sinceLastVisit: string;
  visited: string;
}

export interface V3Data extends V2Data {
  path: string;
}

export interface Data {
  path: string;
  visits: number;
  created: string;
  updated: string;
}

export interface ResponseData {
  v2: V2Data;
  v3: V3Data[];
}
