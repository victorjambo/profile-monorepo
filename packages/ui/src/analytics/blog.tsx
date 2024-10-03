import Script from "next/script";

export function BlogAnalytics(): JSX.Element {
  return (
    <>
      {/* <Script src="/scripts/debugger.js" /> */}

      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XR67L5VWX3"
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', 'G-XR67L5VWX3');
              `,
        }}
      />
    </>
  );
}
