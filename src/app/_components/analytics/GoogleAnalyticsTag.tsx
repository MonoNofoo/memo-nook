import { FC } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';

const GoogleAnalyticsTag: FC = () => {
  const gTagId = process.env.NEXT_PUBLIC_GA_ID;

  if (gTagId === undefined) {
    return null;
  }

  return <GoogleAnalytics gaId={gTagId} />;
};

export default GoogleAnalyticsTag;
