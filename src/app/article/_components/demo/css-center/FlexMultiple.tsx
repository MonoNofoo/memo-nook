import DemoShowcase from '@src/app/article/_components/demo/DemoShowcase';
import * as styles from '@src/app/article/_components/demo/css-center/FlexMultiple.css';

const FlexMultiple = () => {
  return (
    <DemoShowcase>
      <p>
        親要素に高さが指定されてない場合は gap
        で指定したサイズ分だけ上下左右に余白ができる
      </p>
      <div className={styles.outer}>
        <div className={styles.box} />
        <div className={styles.box} />
        <div className={styles.box} />
        <div className={styles.box} />
        <div className={styles.box} />
      </div>
      <p>
        親要素に高さが指定されている場合は align-items の効果で gap
        の指定以上に上下の余白が生まれる場合がある
      </p>
      <div className={styles.outer2}>
        <div className={styles.box} />
        <div className={styles.box} />
        <div className={styles.box} />
        <div className={styles.box} />
        <div className={styles.box} />
      </div>
    </DemoShowcase>
  );
};

export default FlexMultiple;
