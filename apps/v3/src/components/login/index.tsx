"use client";

import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Collections, Config } from "shared-data";

interface LoginProps {
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Login({ setIsAuth }: LoginProps): JSX.Element {
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setLoading(true);

    const firebaseApp = initializeApp(Config);
    const firestore = getFirestore(firebaseApp);

    const docRef = doc(
      firestore,
      Collections.secrets.collection,
      Collections.secrets.documents[0]
    );
    const snap = await getDoc(docRef);
    const res = snap.data() as { password: string } | undefined;

    if (res?.password === password) {
      setIsAuth(true);
    } else {
      setError(true);
    }
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (error) setError(false);
    setPassword(e.target.value);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-slate-50">
      <div className="w-96 rounded-xl shadow-md p-10 bg-white">
        <span>sign in</span>
        <form
          className="flex flex-col space-y-4 mt-6"
          onSubmit={(e) => {
            void handleSubmit(e);
          }}
        >
          <input
            className={`p-4 border text-xl ${
              error
                ? "border-orange-700 ring ring-orange-400/10"
                : "border-slate-600"
            }`}
            onChange={handleChange}
            value={password}
          />
          <button
            className={`p-4 !bg-green-400 ${
              !password ? "!cursor-not-allowed" : ""
            }`}
            disabled={!password || loading}
            type="submit"
          >
            {loading ? "Logging..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
