import React from "react";

export default function StackOverflowIcon({
  theme,
}: {
  theme: boolean;
}): JSX.Element {
  const color = theme ? "#0EA5E9" : "#64FFDA";

  return (
    <svg
      fill={color}
      height="21px"
      viewBox="0 0 50 50"
      width="21px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 40.34375 1.960938 L 37.859375 2.417969 L 41.1875 20.625 L 43.171875 20.324219 Z M 29.0625 6.664063 L 27.101563 8.078125 L 37.300781 23.035156 L 39.046875 21.796875 Z M 20.351563 15.507813 L 19.113281 17.703125 L 34.5 27 L 35.664063 25.003906 Z M 16.164063 25.171875 L 15.628906 27.402344 L 33.359375 31.894531 L 34 29.921875 Z M 9 29 L 9 47.984375 L 38.902344 48 L 38.902344 47.984375 C 38.933594 47.984375 39 29 39 29 L 37 29 L 37 46 L 11 46 L 11 29 Z M 15.171875 33.375 L 14.902344 35.339844 L 33 37 L 33.203125 35.035156 Z M 15 40 L 15 42 L 33 41.929688 L 33 40 Z"
        fillRule="evenodd"
      />
    </svg>
  );
}
