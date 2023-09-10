"use client";
import { SectionHeader } from "../../components/sections";
import { useScrollControl } from "../../context/scrollControl";
import { aboutMe, technologies } from "../../utils/data";
import Image from "next/image";

const AboutSection: React.FC = () => {
  const { refs } = useScrollControl();

  return (
    <section ref={refs?.About} id="about" className="max-w-[900px] mx-auto">
      <SectionHeader idx="01." title="About me" />
      <div className="grid sm:gap-[50px] grid-cols-none sm:grid-cols-image text-slate-600 dark:text-slate font-sans">
        <div className="space-y-3">
          <div>
            <Image
              src="/images/me.jpeg"
              alt="me"
              width={90}
              height={90}
              className="float-right block sm:hidden rounded-2xl"
            />
            {aboutMe.map((about) => (
              <p key={about}>{about}</p>
            ))}
          </div>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul className="grid grid-cols-2 gap-1 font-mono">
            {technologies.map((tech) => (
              <li key={tech} className="list">
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="dark:bg-green bg-sky-500 hover:bg-transparent rounded-2xl h-max">
          <Image
            src="/images/me.jpeg"
            alt="me"
            width={500}
            height={500}
            className="sm:block hidden rounded-2xl mix-blend-multiply grayscale contrast-100 hover:mix-blend-normal hover:filter-none"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
