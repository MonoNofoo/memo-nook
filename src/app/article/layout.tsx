import { ReactNode } from 'react';
import '@src/app/_lib/prism/prism-holi-theme.css';

export default function Layout({ children }: { children: ReactNode }) {
  return <article>{children}</article>;
}
