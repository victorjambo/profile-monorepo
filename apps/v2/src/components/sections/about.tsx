"use client";
import Image from "next/image";
import { useScrollControl } from "../../context/scrollControl";
import { aboutMe, technologies } from "../../utils/data";
import { SectionHeader } from "./index";

export default function AboutSection(): JSX.Element {
  const { refs } = useScrollControl();

  return (
    <section className="max-w-[900px] mx-auto" id="about" ref={refs?.About}>
      <SectionHeader idx="01." title="About me" />
      <div className="grid sm:gap-[50px] grid-cols-none sm:grid-cols-image text-slate-600 dark:text-slate font-sans">
        <div className="space-y-3">
          <div>
            <Image
              alt="me"
              className="float-right block sm:hidden rounded-2xl"
              height={90}
              src="/images/me.jpeg"
              width={90}
            />
            {aboutMe.map((about) => (
              <p key={about}>{about}</p>
            ))}
          </div>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul className="grid grid-cols-2 gap-1 font-mono">
            {technologies.map((tech) => (
              <li className="list" key={tech}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="dark:bg-green bg-sky-500 hover:bg-transparent rounded-2xl h-max">
          <Image
            alt="me"
            className="sm:block hidden rounded-2xl mix-blend-multiply grayscale contrast-100 hover:mix-blend-normal hover:filter-none"
            height={500}
            src="/images/me.jpeg"
            width={500}
          />
        </div>
      </div>
    </section>
  );
}
