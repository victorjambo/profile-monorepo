import FontLoader from "./fontLoader";
import Seo from "./seo";

export default function Header(): JSX.Element {
  return (
    <head>
      <Seo />
      <link href="/favicon.ico" rel="icon" />
      <FontLoader />

      <script
        dangerouslySetInnerHTML={{
          __html: `(function(h,o,t,j,a,r){
                          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                          h._hjSettings={hjid:${process.env.NEXT_PUBLIC_HOTJAR},hjsv:6};
                          a=o.getElementsByTagName('head')[0];
                          r=o.createElement('script');r.async=1;
                          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                          a.appendChild(r);
                        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
        }}
      />

      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                  page_path: window.location.pathname,
                });
              `,
        }}
      />
    </head>
  );
};
