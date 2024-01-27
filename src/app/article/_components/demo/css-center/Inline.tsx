import DemoShowcase from '@src/app/article/_components/demo/DemoShowcase';
import * as styles from '@src/app/article/_components/demo/css-center/Inline.css';

const Inline = () => {
  return (
    <DemoShowcase>
      <span className={styles.text}>テキスト</span>
    </DemoShowcase>
  );
};

export default Inline;
