import { RESUME_URL } from "shared-data";

export function Resume(): JSX.Element {
  return (
    <iframe
      allow="autoplay"
      className="w-full h-screen"
      src={RESUME_URL}
      title="resume"
     />
  );
}
