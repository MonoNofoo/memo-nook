import { FC, ReactNode } from 'react';
import * as styles from '@src/app/article/_components/unordered-list/UnorderedList.css';

export type ListProps = { children: ReactNode };

const UnorderedList: FC<ListProps> = ({ children, ...props }) => {
  return (
    <ul className={styles.list} {...props}>
      {children}
    </ul>
  );
};

export default UnorderedList;
