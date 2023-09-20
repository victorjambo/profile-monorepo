interface VideoProps {
  id: string;
}

export default function Video({ id }: VideoProps): JSX.Element {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
      />
    </div>
  );
}
