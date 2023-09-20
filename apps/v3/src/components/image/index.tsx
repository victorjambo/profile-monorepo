import Image from "next/image";

interface CustomImageProps {
  src: string;
  alt: string;
  priority?: string;
}

export default function CustomImage({
  src,
  alt,
  priority,
}: CustomImageProps): JSX.Element {
  const _priority = Boolean(priority);

  return (
    <div className="w-full h-full">
      <Image
        alt={alt}
        className="rounded-lg mx-auto"
        height={650}
        priority={_priority}
        src={src}
        width={650}
      />
    </div>
  );
}
