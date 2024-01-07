import { ReactNode } from 'react';
import '@src/app/_lib/prism/prism-holi-theme.css';
import * as styles from '@src/app/article/layout.css';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className={styles.container}>
      <article className={styles.article}>
        <span className={styles.tape} data-position="topLeft" />
        <span className={styles.tape} data-position="topRight" />
        {children}
        <span className={styles.tape} data-position="bottomLeft" />
        <span className={styles.tape} data-position="bottomRight" />
      </article>
    </main>
  );
};
export default Layout;
