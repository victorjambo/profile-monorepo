"use client";
import { initializeApp } from "firebase/app";
import type { Timestamp } from "firebase/firestore";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import type { FirebaseResponse, Data } from "models";
import { useCallback, useEffect, useState } from "react";
import { Collections, Config } from "shared-data";
import moment from "moment";

export default function Stats(): JSX.Element {
  const [data, setData] = useState<Data[]>([]);

  const fetchRoutes = useCallback(async () => {
    const firebaseApp = initializeApp(Config);
    const firestore = getFirestore(firebaseApp);

    const _data: Data[] = [];

    const snapshot = await getDocs(
      collection(firestore, Collections.routes.collection)
    );
    snapshot.forEach((doc) => {
      const docData = doc.data() as FirebaseResponse<Timestamp>;
      const { created, updated, count } = docData;

      if (count) {
        _data.push({
          path: doc.id,
          visits: count,
          created: moment(created.toDate()).format("ddd, hA"),
          updated: moment(updated.toDate()).format("ddd, hA"),
        });
      }
    });

    setData(_data);
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    void fetchRoutes();
  }, [fetchRoutes]);

  return (
    <div className="w-full flex justify-center bg-slate-50 h-screen">
      <div className="py-20">
        <div className="w-[640px] bg-white p-5 shadow-md">
          <div className="grid grid-cols-5 pb-4 font-bold">
            <div className="col-span-2 pl-4">route</div>
            <div className="text-center">visits</div>
            <div className="text-center">updated</div>
            <div className="text-center">created</div>
          </div>

          {data.map((_data) => (
            <div
              className="grid grid-cols-5 border-t py-4 hover:bg-slate-100"
              key={_data.path}
            >
              <div className="col-span-2 pl-4">
                {_data.path.replace("-", "/")}
              </div>
              <div className="text-center">{_data.visits}</div>
              <div className="text-center">{_data.updated}</div>
              <div className="text-center">{_data.created}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
