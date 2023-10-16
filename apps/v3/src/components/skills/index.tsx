import { Tech } from "builders";

export default function Skills(): JSX.Element {
  return (
    <>
      {Tech.map((tech) => (
        <Skill key={tech} tech={tech} />
      ))}
    </>
  );
}

function Skill({ tech }: { tech: string }): JSX.Element {
  return (
    <span className="border dark:border-slate-800 rounded-full px-2 py-1 m-0.5 cursor-default hover:scale-105">
      {tech}
    </span>
  );
}
