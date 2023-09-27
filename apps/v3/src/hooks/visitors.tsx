import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  updateDoc,
  setDoc,
  getDoc,
  Timestamp,
} from "firebase/firestore";
import { useCallback, useEffect } from "react";
import type { FirebaseCounter } from "models";
import { Collections, Config } from "shared-data";

export const useVisitors = (path: string): void => {
  const visitors = useCallback(async () => {
    const documentId = `${Collections.routes.documents[0]}${path}`;
    const firebaseApp = initializeApp(Config);
    const firestore = getFirestore(firebaseApp);

    const docRef = doc(firestore, Collections.routes.collection, documentId);
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
