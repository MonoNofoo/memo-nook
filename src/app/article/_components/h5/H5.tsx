import { FC, ReactNode } from 'react';
import * as styles from '@src/app/article/_components/h5/H5.css';

export type H5Props = {
  children: ReactNode;
};

const H5: FC<H5Props> = ({ children }) => {
  return <h5 className={styles.heading}>{children}</h5>;
};

export default H5;
