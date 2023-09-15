"use client";
import React, { useState } from "react";
import { IItemProp } from "models";

const Item: React.FC<IItemProp> = ({
  item: { title, role, link, img, desc },
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
        className="grid grid-cols-2 py-4 hover:decoration-dashed hover:decoration-vase hover:underline dark:hover:decoration-slate-300 relative external-link"
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
          <span>{title}</span>
        </div>
        <div className="place-self-end text-right">{role}</div>
      </a>
      <div className="pb-4 text-justify">{desc}</div>
    </div>
  );
};

export default Item;
