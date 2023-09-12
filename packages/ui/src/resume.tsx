import { RESUME_URL } from "shared-data";

export function Resume(): JSX.Element {
  return (
    <iframe
      src={RESUME_URL}
      allow="autoplay"
      className="w-full h-screen"
    ></iframe>
  );
}
