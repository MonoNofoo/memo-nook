'use client';

import { FC } from 'react';
import { Patrick_Hand } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import * as styles from '@src/app/_components/header/Header.css';
import { topPagePath } from '@src/const/pagePath';

const patrick = Patrick_Hand({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const Header: FC = () => {
  const pathname = usePathname();
  const isTopPage = pathname === topPagePath;

  return (
    <header className={clsx(styles.container, patrick.className)}>
      {isTopPage ? (
        <h1 className={styles.title}>MEMO NOOK</h1>
      ) : (
        <Link
          href={topPagePath}
          className={clsx(styles.title, styles.titleLink)}
        >
          MEMO NOOK
        </Link>
      )}
    </header>
  );
};

export default Header;
