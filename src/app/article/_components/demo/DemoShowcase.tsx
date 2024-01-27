import { FC, ReactNode } from 'react';
import * as styles from '@src/app/article/_components/demo/DemoShowcase.css';

export type DemoShowcaseProps = { children: ReactNode };
const DemoShowcase: FC<DemoShowcaseProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
};

export default DemoShowcase;
