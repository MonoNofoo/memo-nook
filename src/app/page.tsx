import { Metadata } from 'next';
import * as styles from '@src/app/page.css';

export const metadata: Metadata = {
  description: '備忘録てきななにか。',
};

const Home = () => <main className={styles.dummy}>test</main>;
export default Home;
