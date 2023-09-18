"use client";
import type { RefObject } from "react";
import { createContext, useContext, useRef } from "react";
import type { IScrollControlProps } from "./type";

const ScrollControlContext = createContext<Partial<IScrollControlProps>>({});

export const useScrollControl = (): Partial<IScrollControlProps> =>
  useContext(ScrollControlContext);

export default function ScrollControlProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const workRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const refs = {
    About: aboutRef,
    Experience: experienceRef,
    Work: workRef,
    Contact: contactRef,
  };

  const scrollInto = (ref: RefObject<HTMLElement> | undefined): void => {
    if (ref?.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "end",
      });
    }
  };

  return (
    <ScrollControlContext.Provider
      value={{
        refs,
        scrollInto,
      }}
    >
      {children}
    </ScrollControlContext.Provider>
  );
}
