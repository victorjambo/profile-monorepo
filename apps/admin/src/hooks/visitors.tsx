import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDoc,
  doc,
  updateDoc,
  Timestamp,
} from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import type { FirebaseResponse } from "models";
import { Collections, Config } from "shared-data";
import moment from "moment";

interface Data {
  visits: number;
  sinceLastVisit: string;
  visited: string;
}

export const useVisitors = (): Data => {
  const [data, setData] = useState<Data>({
    visits: 0,
    sinceLastVisit: "",
    visited: "",
  });

  const visitors = useCallback(async () => {
    const firebaseApp = initializeApp(Config);
    const firestore = getFirestore(firebaseApp);

    const v2Ref = doc(firestore, Collections.v2.name, Collections.v2.document);

    const snap = await getDoc(v2Ref);
    const res = snap.data() as FirebaseResponse<Timestamp> | undefined;
    if (res) {
      setData({
        visits: res.count,
        sinceLastVisit: moment(res.updated.toDate()).from(res.created.toDate()),
        visited: moment(res.created.toDate()).fromNow(),
      });
    }
  }, []);

  useEffect(() => {
    // if (process.env.NODE_ENV !== "production") return;
    void visitors();
  }, [visitors]);

  return data;
};
