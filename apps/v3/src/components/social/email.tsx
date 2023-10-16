import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { DEV_EMAIL } from "builders";

export function Email(): JSX.Element {
  return (
    <a href={`mailto:${DEV_EMAIL}`} rel="noopener noreferrer" target="_blank">
      <EnvelopeIcon className="" />
    </a>
  );
}
