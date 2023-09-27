"use client";
import React, { useState } from "react";
import Login from "../../components/login";
import Stats from "../../components/stats";

export default function Page(): JSX.Element {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  return <main>{!isAuth ? <Stats /> : <Login setIsAuth={setIsAuth} />}</main>;
}
