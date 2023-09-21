import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDoc,
  doc,
  getDocs,
  collection,
  Timestamp,
} from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import type { FirebaseResponse } from "models";
import { Collections, Config } from "shared-data";
import moment from "moment";
import { ResponseData, V2Data, V3Data } from "models";

export const useVisitors = (): ResponseData => {
  const [v2, setV2Data] = useState<V2Data>({
    visits: 0,
    sinceLastVisit: "",
    visited: "",
  });

  const [v3, setV3Data] = useState<V3Data[]>([]);

  const visitors = useCallback(async () => {
    const firebaseApp = initializeApp(Config);
    const firestore = getFirestore(firebaseApp);

    // V2
    const v2Snapshot = await getDoc(
      doc(firestore, Collections.v2.name, Collections.v2.document)
    );
    const v2data = v2Snapshot.data() as FirebaseResponse<Timestamp> | undefined;
    if (v2data) {
      setV2Data({
        visits: v2data.count,
        sinceLastVisit: moment(v2data.updated.toDate()).from(
          v2data.created.toDate()
        ),
        visited: moment(v2data.created.toDate()).fromNow(),
      });
    }

    // V3
    const v3Snapshot = await getDocs(
      collection(firestore, Collections.v3.name)
    );
    const _data: V3Data[] = [];
    v3Snapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const v3data = doc.data() as FirebaseResponse<Timestamp>;
      _data.push({
        path: doc.id,
        visits: v3data.count,
        sinceLastVisit: moment(v3data.updated.toDate()).from(
          v3data.created.toDate()
        ),
        visited: moment(v3data.created.toDate()).fromNow(),
      });
    });
    setV3Data(_data);
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    void visitors();
  }, [visitors]);

  return {
    v2,
    v3,
  };
};
