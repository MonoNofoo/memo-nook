import DemoShowcase from '@src/app/article/_components/demo/DemoShowcase';
import * as styles from '@src/app/article/_components/demo/css-center/Grid.css';

const Grid = () => {
  return (
    <DemoShowcase>
      <div className={styles.outer}>
        <div className={styles.box} />
      </div>
    </DemoShowcase>
  );
};

export default Grid;
