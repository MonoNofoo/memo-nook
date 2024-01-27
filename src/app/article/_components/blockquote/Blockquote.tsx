import { FC, ReactNode } from 'react';
import * as styles from '@src/app/article/_components/blockquote/Blockquote.css';

export type BlockquoteProps = { children: ReactNode };

const Blockquote: FC<BlockquoteProps> = ({ children }) => {
  return <blockquote className={styles.blockquote}>{children}</blockquote>;
};

export default Blockquote;
