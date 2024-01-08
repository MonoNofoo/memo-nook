import { FC, ReactNode } from 'react';
import * as styles from '@src/app/article/_components/h2/H2.css';

export type H2Props = {
  children: ReactNode;
};

const H2: FC<H2Props> = ({ children }) => {
  return <h2 className={styles.heading}>{children}</h2>;
};

export default H2;
