"use client";
import React, { useState } from "react";

interface IItem {
  item: {
    noun: string;
    verb: string;
    link: string;
    img?: string;
  };
  counter: number;
  count: number;
}
const Item: React.FC<IItem> = ({
  item: { noun, verb, link, img },
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
    <a
      href={link}
      className={`grid grid-cols-2 py-4 hover:decoration-dashed hover:decoration-vase hover:underline relative external-link ${
        counter === count ? "" : "border-b"
      }`}
      rel="noopener noreferrer"
      target="_blank"
      onMouseMove={handleMouseMove}
    >
      {img && (
        <img
          src={img}
          alt={noun}
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
        <span>{noun}</span>
      </div>
      <div className="place-self-end text-right">{verb}</div>
    </a>
  );
};

export default Item;
