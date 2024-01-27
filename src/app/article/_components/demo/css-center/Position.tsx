import DemoShowcase from '@src/app/article/_components/demo/DemoShowcase';
import * as styles from '@src/app/article/_components/demo/css-center/Position.css';

const Position = () => {
  return (
    <DemoShowcase>
      <div className={styles.outer}>
        <img
          className={styles.image}
          src="/images/free-photo-001.jpg"
          alt="背景画像"
        />
        <p className={styles.text}>文字をドーン</p>
      </div>
    </DemoShowcase>
  );
};

export default Position;
