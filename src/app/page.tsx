import { Metadata } from 'next';
import ArticleList from '@src/app/_components/article-list/ArticleList';
import Profile from '@src/app/_components/profile/Profile';
import * as styles from '@src/app/page.css';

export const metadata: Metadata = {
  description: '備忘録てきななにか。',
};

const Home = async () => {
  return (
    <main className={styles.container}>
      <Profile />
      <ArticleList />
    </main>
  );
};
export default Home;
