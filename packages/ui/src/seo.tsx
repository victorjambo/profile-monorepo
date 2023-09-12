export const SEO: React.FC = () => {
  const title = "Victor Mutai";
  const description = "Victor Mutai Senior Software Engineer";
  const twitter = "victor_jambo";
  const image = "/images/banner.png";

  return (
    <>
      <meta name="description" content={description} />
      <meta name="keywords" content="victor, mutai, web3, engineer" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={title} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={twitter} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image0" content={image} />

      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-touch-fullscreen" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="theme-color" content="#0f172a" />

      <link rel="manifest" href="/manifest.json" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/icons/apple-icon-180x180.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="192x192"
        href="/images/icons/apple-icon-192x192.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="512x512"
        href="/images/icons/apple-icon-512x512.png"
      />

      <link
        rel="apple-touch-startup-image"
        media="(orientation: portrait)"
        href="/images/icons/apple-splash-1125-2436.png"
      />
      <link
        rel="apple-touch-startup-image"
        media="(orientation: landscape)"
        href="/images/icons/apple-splash-2436-1125.png"
      />
    </>
  );
};
