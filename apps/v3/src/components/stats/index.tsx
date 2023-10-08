"use client";
import { initializeApp } from "firebase/app";
import type { Timestamp } from "firebase/firestore";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { Collections, Config } from "builders";
import moment from "moment";
import type { FirebaseResponse, FirebaseData } from "../../types";

interface Data extends FirebaseData {
  sortingIndex: number;
}

export default function Stats(): JSX.Element {
  const [data, setData] = useState<Data[]>([]);

  const fetchRoutes = useCallback(async () => {
    const firebaseApp = initializeApp(Config);
    const firestore = getFirestore(firebaseApp);

    const responseData: Data[] = [];

    const snapshot = await getDocs(
      collection(firestore, Collections.routes.collection)
    );
    snapshot.forEach((doc) => {
      const docData = doc.data() as FirebaseResponse<Timestamp>;
      const { created, updated, count } = docData;

      if (count) {
        responseData.push({
          path: doc.id,
          visits: count,
          created: moment(created.toDate()).fromNow(),
          updated: moment(updated.toDate()).format("HH:mmA. ddd, MM."),
          sortingIndex: updated.nanoseconds,
        });
      }
    });

    setData(
      responseData.sort((a, b) => {
        return a.sortingIndex - b.sortingIndex;
      })
    );
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    void fetchRoutes();
  }, [fetchRoutes]);

  return (
    <div className="w-full flex justify-center bg-slate-50 h-screen">
      <section className="prose lg:prose-xl py-20">
        <div className="rounded-md bg-white px-10 py-1 shadow-md">
          <table>
            <thead>
              <tr>
                <th>route</th>
                <th>visits</th>
                <th>updated</th>
                <th>created</th>
              </tr>
            </thead>
            <tbody>
              {data.map((_data) => (
                <tr className="hover:bg-slate-100" key={_data.path}>
                  <td>{_data.path.replace("-", "/")}</td>
                  <td>{_data.visits}</td>
                  <td>{_data.updated}</td>
                  <td>{_data.created}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
