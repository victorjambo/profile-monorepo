"use client";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDoc,
  doc,
  updateDoc,
  Timestamp,
  setDoc,
} from "firebase/firestore";
import { useCallback, useEffect } from "react";
import type { FirebaseCounter } from "models";
import { Collections, Config, V2Documents } from "builders";

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
      if (counter) {
        await updateDoc(resumeRef, {
          count: counter.count + 1,
          updated: Timestamp.now(),
        });
      } else {
        await setDoc(resumeRef, {
          count: 1,
          created: Timestamp.now(),
          updated: Timestamp.now(),
        });
      }
    } catch {
      // silent fail
    }
  }, [searchParams?.source]);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    void visitors();
  }, [visitors]);
};
