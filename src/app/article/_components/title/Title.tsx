import { FC, ReactNode } from 'react';
import * as styles from '@src/app/article/_components/title/Title.css';

export type TitleProps = {
  children: ReactNode;
};

const Title: FC<TitleProps> = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>;
};

export default Title;
