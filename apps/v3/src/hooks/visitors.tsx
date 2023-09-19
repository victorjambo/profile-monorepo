import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  updateDoc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { useCallback, useEffect } from "react";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
} as const;

export const useVisitors = (path: string): void => {
  const visitors = useCallback(async () => {
    const documentId = `resume-${path}`;
    const firebaseApp = initializeApp(firebaseConfig);
    const firestore = getFirestore(firebaseApp);

    const docRef = doc(firestore, "v3", documentId);
    const snap = await getDoc(docRef);
    const counter = snap.data() as { count: number } | undefined;

    try {
      if (counter) {
        await updateDoc(docRef, {
          count: counter.count + 1,
        });
      } else {
        await setDoc(docRef, {
          count: 1,
        });
      }
    } catch {
      // silent fail
    }
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (!path) return;
    void visitors();
  }, [visitors, path]);
};
