import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  updateDoc,
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

export const useVisitors = (): void => {
  const visitors = useCallback(async () => {
    const firebaseApp = initializeApp(firebaseConfig);
    const firestore = getFirestore(firebaseApp);
    const visits = collection(firestore, "visits");
    const visitsSnapshot = await getDocs(visits);

    let count = 0;
    visitsSnapshot.forEach((snapshot) => {
      count = snapshot.get("count") as number;
    });
    

    try {
      const resumeRef = doc(firestore, "visits", "resume");
      await updateDoc(resumeRef, {
        count: count + 1,
      });
    } catch {
      // silent fail
    }
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    void visitors();
  }, [visitors]);
};
