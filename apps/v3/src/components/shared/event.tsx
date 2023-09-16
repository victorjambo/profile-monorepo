"use client";
import React, { useState } from "react";
import { IEventProp } from "models";
import { Tech } from "shared-data";

type Props = IEventProp<(typeof Tech)[number]>;

const Event: React.FC<Props> = ({
  event: { title, role, link, img, desc, tech },
  counter,
  count,
}) => {
  const [localCoords, setLocalCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!img) return;
    setLocalCoords({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div
      className={` ${
        counter === count ? "" : "border-b dark:border-slate-300"
      }`}
    >
      <a
        href={link}
        className="grid grid-cols-2 py-4 relative external-link"
        rel="noopener noreferrer"
        target="_blank"
        onMouseMove={handleMouseMove}
      >
        {img && (
          <img
            src={img}
            alt={title}
            className="external-link-img absolute z-10 shadow-lg"
            style={{
              left: `${localCoords.x}px`,
              ...(counter === count || counter === count - 1
                ? { bottom: "0px" }
                : { top: "0px" }),
            }}
          />
        )}
        <div className="font-extrabold">
          <sup className="pr-1">{counter}.</sup>
          <span className="hover:border-b border-vase dark:border-slate-300 border-dotted">
            {title}
          </span>
        </div>
        <div
          className={`hover:border-b border-vase dark:border-slate-300 border-dotted place-self-end text-right ${
            desc ? "italic" : ""
          }`}
        >
          {role}
        </div>
      </a>
      {tech && (
        <div className="pl-2.5 py-2.5 text-justify text-sm">
          <span>Tech: </span>
          <span>{tech.join(", ")}</span>
        </div>
      )}
      {desc && (
        <div className="pl-2.5 pb-4 text-justify">
          <div dangerouslySetInnerHTML={{ __html: desc }} />
        </div>
      )}
    </div>
  );
};

export default Event;
