import "intersection-observer";
import { useCallback, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

interface VideoProps {
  src: string;
  caption: string;
  ratio: number;
  className?: string;
}

export default function Video({
  src,
  caption,
  ratio,
  className = "",
}: VideoProps): JSX.Element {
  const [inViewRef, inView] = useInView({
    threshold: 1,
  });
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const setRefs = useCallback(
    (node: HTMLVideoElement | null) => {
      // Ref's from useRef needs to have the node assigned to `current`
      videoRef.current = node;
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node);

      if (node) {
        node.addEventListener("click", () => {
          if (node.paused) {
            void node.play();
          } else {
            node.pause();
          }
        });
      }
    },
    [inViewRef]
  );

  useEffect(() => {
    if (videoRef.current) {
      if (inView) {
        void videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [inView]);

  return (
    <div
      className={className}
      style={{ position: "relative", marginBlock: "2rem 1rem" }}
    >
      <div style={{ paddingBottom: `${ratio * 100}%` }} />
      <video
        autoPlay
        loop
        muted
        playsInline
        ref={setRefs}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <source src={src} type="video/mp4" />
      </video>
      {caption ? (
        <figcaption
          style={{ fontSize: ".9rem", textAlign: "center", marginTop: "1em" }}
        >
          {caption}
        </figcaption>
      ) : null}
    </div>
  );
}
