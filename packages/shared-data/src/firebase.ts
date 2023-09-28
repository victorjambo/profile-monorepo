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
  routes: {
    collection: process.env.NEXT_PUBLIC_ROUTES_COLLECTION ?? "v3-routes",
    documents: [
      process.env.NEXT_PUBLIC_ROUTES_DOCUMENTS_RESUME ?? "resume-",
      process.env.NEXT_PUBLIC_ROUTES_DOCUMENTS_ROOT ?? "root-",
    ],
  },
  secrets: {
    collection: process.env.NEXT_PUBLIC_SECRETS_COLLECTION ?? "v3-secrets",
    documents: [
      process.env.NEXT_PUBLIC_SECRETS_DOCUMENTS_AUTO ?? "x2kuBdlkU32SVqWGh3bY",
    ],
  },
  v2: {
    collection: process.env.NEXT_PUBLIC_V2_COLLECTION ?? "v2",
    documents: [process.env.NEXT_PUBLIC_V2_DOCUMENTS_ROOT ?? "root-"],
  },
} as const;

export enum RoutesDocuments {
  Resume,
  Root,
}

export enum SecretsDocuments {
  Auto,
}

export enum V2Documents {
  Root,
}
