import { FC, ReactNode } from 'react';
import * as styles from '@src/app/article/_components/paragraph/Paragraph.css';

export type ParagraphProps = { children: ReactNode };

const Paragraph: FC<ParagraphProps> = ({ children }) => {
  return <p className={styles.text}>{children}</p>;
};

export default Paragraph;
