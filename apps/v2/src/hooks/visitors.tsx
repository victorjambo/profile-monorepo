import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDoc,
  doc,
  updateDoc,
  Timestamp,
} from "firebase/firestore";
import { useCallback, useEffect } from "react";
import type { FirebaseCounter, FirebasePayload } from "models";
import { Collections, Config, V2Documents } from "shared-data";

export const useVisitors = (searchParams?: { source: string }): void => {
  const visitors = useCallback(async () => {
    const source = searchParams?.source ?? "home";
    const documentId = `${Collections.v2.documents[V2Documents.Root]}${source}`;

    const firebaseApp = initializeApp(Config);
    const firestore = getFirestore(firebaseApp);

    const resumeRef = doc(firestore, Collections.v2.collection, documentId);
    const snap = await getDoc(resumeRef);
    const counter = snap.data() as FirebaseCounter | undefined;

    try {
      let payload: FirebasePayload<Timestamp> = {
        count: 1,
        created: Timestamp.now(),
        updated: Timestamp.now(),
      };

      if (counter?.count) {
        payload = {
          count: counter.count + 1,
          updated: Timestamp.now(),
        };
      }

      await updateDoc(resumeRef, payload as never);
    } catch {
      // silent fail
    }
  }, [searchParams?.source]);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    void visitors();
  }, [visitors]);
};
