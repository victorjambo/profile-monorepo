"use client";
import { Resume } from "ui";
import { useVisitors } from "../../../hooks/visitors";


export default function Page(): JSX.Element {
  useVisitors();

  return (
    <div className="w-full h-screen">
      <Resume />
    </div>
  );
}
