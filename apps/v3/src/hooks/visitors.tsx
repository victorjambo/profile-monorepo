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

export const useVisitors = (
  path: string,
  search?: { isLogged: boolean; query?: string }
): void => {
  const visitors = useCallback(async () => {
    let documentId = `${Collections.v3.document}${path}`;
    if (search) {
      documentId = "source-wip";
    }
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
        });
      }
    } catch {
      // silent fail
    }
  }, []);

  useEffect(() => {
    // if (process.env.NODE_ENV !== "production") return;
    if (!path) return;
    if (search && search.isLogged && !search.query) return;
    void visitors();
  }, [visitors, path, search]);
};
