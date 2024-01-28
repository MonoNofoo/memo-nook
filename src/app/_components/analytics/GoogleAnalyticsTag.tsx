import { FC } from 'react';
import Script from 'next/script';

const GoogleAnalyticsTag: FC = () => {
  const gTagId = process.env.NEXT_PUBLIC_GA_ID;

  if (gTagId === undefined) {
    return null;
  }

  return (
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${gTagId}`}
      id="GoogleAnalyticsTag"
      data-testid="GoogleAnalyticsTag"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', '${gTagId}');
      `,
      }}
    />
  );
};

export default GoogleAnalyticsTag;
