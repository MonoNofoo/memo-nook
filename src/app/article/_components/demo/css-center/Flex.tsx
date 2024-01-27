import { FC } from 'react';
import DemoShowcase from '@src/app/article/_components/demo/DemoShowcase';
import * as styles from '@src/app/article/_components/demo/css-center/Flex.css';

const Flex: FC = () => {
  return (
    <DemoShowcase>
      <div className={styles.outer}>
        <div className={styles.box} />
      </div>
    </DemoShowcase>
  );
};

export default Flex;
