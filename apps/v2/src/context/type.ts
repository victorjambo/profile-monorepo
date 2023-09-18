import type { RefObject } from "react";

interface IRefs {
  About: RefObject<HTMLElement> | undefined;
  Experience: RefObject<HTMLElement> | undefined;
  Work: RefObject<HTMLElement> | undefined;
  Contact: RefObject<HTMLElement> | undefined;
}

export interface IScrollControlProps {
  refs: IRefs;
  scrollInto: (_: RefObject<HTMLElement> | undefined) => void;
}
