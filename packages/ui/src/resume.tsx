import { RESUME_URL } from "builders";

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
