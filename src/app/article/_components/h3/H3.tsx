import { FC, ReactNode } from 'react';
import * as styles from '@src/app/article/_components/h3/H3.css';

export type H3Props = {
  children: ReactNode;
};

const H3: FC<H3Props> = ({ children }) => {
  return <h3 className={styles.heading}>{children}</h3>;
};

export default H3;
