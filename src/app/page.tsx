import { Metadata } from 'next';
import Profile from '@src/app/_components/profile/Profile';
import * as styles from '@src/app/page.css';

export const metadata: Metadata = {
  description: '備忘録てきななにか。',
};

const Home = () => (
  <main className={styles.container}>
    <Profile />
  </main>
);
export default Home;
