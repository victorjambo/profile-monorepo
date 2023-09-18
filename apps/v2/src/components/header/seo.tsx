export default function Seo(): JSX.Element {
  const title = "Victor Mutai";
  const description = "Victor Mutai Senior Software Engineer";
  const twitter = "victor_jambo";
  const image = "/images/banner.png";

  return (
    <>
      <meta content={description} name="description" />
      <meta content="victor, mutai, web3, engineer" name="keywords" />
      <meta content="website" property="og:type" />
      <meta content={title} property="og:title" />
      <meta content={description} property="og:description" />
      <meta content={image} property="og:image" />
      <meta content={title} property="og:site_name" />
      <meta content="summary" property="twitter:card" />
      <meta content={twitter} property="twitter:creator" />
      <meta content={title} property="twitter:title" />
      <meta content={description} property="twitter:description" />
      <meta content={image} property="twitter:image0" />

      <meta content="yes" name="mobile-web-app-capable" />
      <meta content="yes" name="apple-touch-fullscreen" />
      <meta content="yes" name="apple-mobile-web-app-capable" />
      <meta content="default" name="apple-mobile-web-app-status-bar-style" />
      <meta content="#0f172a" name="theme-color" />

      <link href="/manifest.json" rel="manifest" />

      <link
        href="/images/icons/apple-icon-180x180.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="/images/icons/apple-icon-192x192.png"
        rel="apple-touch-icon"
        sizes="192x192"
      />
      <link
        href="/images/icons/apple-icon-512x512.png"
        rel="apple-touch-icon"
        sizes="512x512"
      />

      <link
        href="/images/icons/apple-splash-1125-2436.png"
        media="(orientation: portrait)"
        rel="apple-touch-startup-image"
      />
      <link
        href="/images/icons/apple-splash-2436-1125.png"
        media="(orientation: landscape)"
        rel="apple-touch-startup-image"
      />
    </>
  );
}
