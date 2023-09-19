export default function ResumeView(): JSX.Element {
  return (
    <div className="w-full h-screen">
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        frameBorder="0"
        height="315"
        src="https://www.youtube.com/embed/qtPSqLTvbDU?si=5_DJiy2kyZg2CDze"
        title="YouTube video player"
        width="560"
      />
    </div>
  );
}
