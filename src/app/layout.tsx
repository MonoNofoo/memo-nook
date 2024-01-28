import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { M_PLUS_1 } from 'next/font/google';
import clsx from 'clsx';
import 'sanitize.css';
import GoogleAnalyticsTag from '@src/app/_components/analytics/GoogleAnalyticsTag';
import Header from '@src/app/_components/header/Header';
import '@src/styles/base.css';

const mPlusOne = M_PLUS_1({
  subsets: ['latin'],
  variable: '--font-m-plus-one',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | MEMO NOOK',
    default: 'MEMO NOOK',
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="ja" className={clsx(mPlusOne.variable)}>
    <head>
      <GoogleAnalyticsTag />
    </head>
    <body>
      <Header />
      {children}
    </body>
  </html>
);
export default RootLayout;
