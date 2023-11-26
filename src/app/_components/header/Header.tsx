import { Patrick_Hand } from 'next/font/google';
import * as styles from '@src/app/_components/header/Header.css';
import clsx from 'clsx';

const patrick = Patrick_Hand({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const Header = () => {
  return (
    <header className={clsx(styles.container, patrick.className)}>
      <h1 className={styles.title}>MEMO NOOK</h1>
    </header>
  );
};

export default Header;
