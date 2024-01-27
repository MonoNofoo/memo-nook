import { FC, ReactNode } from 'react';
import * as styles from '@src/app/article/_components/code/Code.css';

export type CodeProps = {
  children: ReactNode;
};

const Code: FC<CodeProps> = ({ children }) => {
  return (
    <code data-testid="Code" className={styles.code}>
      {children}
    </code>
  );
};

export default Code;
