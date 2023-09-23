import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  updateDoc,
  getDoc,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import { useCallback, useEffect } from "react";
import type { FirebaseCounter } from "models";
import { Collections, Config } from "shared-data";

export const useReferer = (searchParams?: { source: string }): void => {
  const referer = useCallback(async () => {
    const source = searchParams?.source ?? "root";
    const documentId = `${Collections.v3.referer}${source}`;
    const firebaseApp = initializeApp(Config);
    const firestore = getFirestore(firebaseApp);

    const docRef = doc(firestore, Collections.v3.name, documentId);
    const snap = await getDoc(docRef);
    const counter = snap.data() as FirebaseCounter | undefined;

    try {
      if (counter) {
        await updateDoc(docRef, {
          count: counter.count + 1,
          updated: Timestamp.now(),
        });
      } else {
        await setDoc(docRef, {
          count: 1,
          created: Timestamp.now(),
          updated: Timestamp.now(),
        });
      }
    } catch {
      // silent fail
    }
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    void referer();
  }, [referer, searchParams]);
};
