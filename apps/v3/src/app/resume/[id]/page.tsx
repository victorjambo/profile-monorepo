"use client";
import { NavBack, Resume } from "ui";
import { useVisitors } from "../../../hooks/visitors";

export default function ResumeView({
  params,
}: {
  params: { id: string };
}): JSX.Element {
  useVisitors(params.id);

  return (
    <div className="w-full h-screen bg-[#1d1d1d]">
      <NavBack color />
      <Resume />
    </div>
  );
}
