import Image from "next/image";

export function ResponsiveImage(props): JSX.Element {
  return (
    <Image
      height={100}
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
      width={100}
      {...props}
    />
  );
}
