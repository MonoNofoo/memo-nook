import { ReactNode } from 'react';
import '@src/app/_lib/prism/prism-holi-theme.css';

const Layout = ({ children }: { children: ReactNode }) => (
  <article>{children}</article>
);
export default Layout;
