import { FC } from 'react';
import { Patrick_Hand } from 'next/font/google';
import Link from 'next/link';
import clsx from 'clsx';
import * as styles from '@src/app/_components/header/Header.css';
import { topPage } from '@src/utils/const/pagePath';

const patrick = Patrick_Hand({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export type HeaderProps = {
  isLink: boolean;
};

const Header: FC<HeaderProps> = ({ isLink }) => {
  return (
    <header className={clsx(styles.container, patrick.className)}>
      {isLink ? (
        <Link href={topPage} className={clsx(styles.title, styles.titleLink)}>
          MEMO NOOK
        </Link>
      ) : (
        <h1 className={styles.title}>MEMO NOOK</h1>
      )}
    </header>
  );
};

export default Header;
