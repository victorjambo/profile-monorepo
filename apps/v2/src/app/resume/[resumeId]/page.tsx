import { Resume } from "ui";

export default function Page({
  params,
}: {
  params: { resumeId: string };
}): JSX.Element {
  return (
    <div className="w-full h-screen" id={params.resumeId}>
      <Resume />
    </div>
  );
}
