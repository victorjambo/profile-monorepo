"use client";
import React, { useState } from "react";
import type { IEventProp } from "models";
import type { Tech } from "shared-data";

type Props = IEventProp<(typeof Tech)[number]>;

export default function Event({
  event: { title, role, link, img, desc, tech },
  counter,
  count,
}: Props): JSX.Element {
  const [localCoords, setLocalCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (
    event: React.MouseEvent<HTMLAnchorElement>
  ): void => {
    if (!img) return;
    setLocalCoords({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div
      className={`${
        counter === count ? "" : "border-b dark:border-slate-300"
      }`}
    >
      <a
        className="grid grid-cols-2 py-10 md:py-4 relative external-link"
        href={link}
        onMouseMove={handleMouseMove}
        rel="noopener noreferrer"
        target="_blank"
      >
        {img ? (
          <img
            alt={title}
            className="external-link-img absolute z-10 shadow-lg"
            src={img}
            style={{
              left: `${localCoords.x}px`,
              ...(counter === count || counter === count - 1
                ? { bottom: "0px" }
                : { top: "0px" }),
            }}
          />
        ) : null}
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
      {tech ? (
        <div className="pl-2.5 pb-10 md:py-2.5 text-left md:text-justify text-sm">
          <span>Tech: </span>
          <span>{tech.join(", ")}</span>
        </div>
      ) : null}
      {desc ? (
        <div className="pl-2.5 pb-10 md:pb-4 text-left md:text-justify">
          <div dangerouslySetInnerHTML={{ __html: desc }} />
        </div>
      ) : null}
    </div>
  );
}
