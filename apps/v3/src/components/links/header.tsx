import React from "react";

const HeaderLinks: React.FC = () => {
  return (
    <div className="flex flex-col w-full items-end">
      <a
        className="hover:border-b border-slate-900 border-dotted"
        href="https://github.com/victorjambo/"
        rel="noopener noreferrer"
        target="_blank"
      >
        Github
      </a>
      <a
        className="hover:border-b border-slate-900 border-dotted"
        href="https://www.linkedin.com/in/mutaivictor/"
        rel="noopener noreferrer"
        target="_blank"
      >
        Linkedin
      </a>
      <a
        className="hover:border-b border-slate-900 border-dotted"
        href="mailto:victormutaijambo+dev@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        Mail
      </a>
    </div>
  );
};

export default HeaderLinks;
