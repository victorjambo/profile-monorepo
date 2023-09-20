export const Config = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
} as const;

export const Collections = {
  v2: {
    name: process.env.NEXT_PUBLIC_V2_COLLECTION ?? "v2",
    document: process.env.NEXT_PUBLIC_V2_DOCUMENT ?? "resume-dev",
  },
  v3: {
    name: process.env.NEXT_PUBLIC_V3_COLLECTION ?? "v3",
    document: process.env.NEXT_PUBLIC_V3_DOCUMENT ?? "resume-",
  },
} as const;
