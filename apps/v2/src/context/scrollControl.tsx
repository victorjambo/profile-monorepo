"use client"
import { createContext, RefObject, useContext, useRef } from "react";

type IRefs = {
  About: RefObject<HTMLElement> | undefined;
  Experience: RefObject<HTMLElement> | undefined;
  Work: RefObject<HTMLElement> | undefined;
  Contact: RefObject<HTMLElement> | undefined;
};

interface IScrollControlProps {
  refs: IRefs;
  scrollInto: (ref: RefObject<HTMLElement> | undefined) => void;
}

const ScrollControlContext = createContext<Partial<IScrollControlProps>>({});

export const useScrollControl = (): Partial<IScrollControlProps> =>
  useContext(ScrollControlContext);

const ScrollControlProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
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

  const scrollInto = (ref: RefObject<HTMLElement> | undefined) => {
    if (ref && ref.current) {
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
};
export default ScrollControlProvider;
