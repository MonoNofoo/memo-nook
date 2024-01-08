import { FC, ReactNode } from 'react';
import * as styles from '@src/app/article/_components/h4/H4.css';

export type H4Props = {
  children: ReactNode;
};

const H4: FC<H4Props> = ({ children }) => {
  return <h4 className={styles.heading}>{children}</h4>;
};

export default H4;
