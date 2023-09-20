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
import { Collections, Config } from "shared-data";

export const useVisitors = (): void => {
  const visitors = useCallback(async () => {
    const firebaseApp = initializeApp(Config);
    const firestore = getFirestore(firebaseApp);

    const resumeRef = doc(
      firestore,
      Collections.v2.name,
      Collections.v2.document
    );
    const snap = await getDoc(resumeRef);
    const counter = snap.data() as FirebaseCounter | undefined;

    try {
      let payload: FirebasePayload<Timestamp> = {
        count: 1,
        created: Timestamp.now(),
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
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    void visitors();
  }, [visitors]);
};
