import { FC, ReactNode } from 'react';
import * as styles from '@src/app/article/_components/ordered-list/OrderedList.css';

export type OrderedListProps = { children: ReactNode };

const OrderedList: FC<OrderedListProps> = ({ children }) => {
  return <ol className={styles.list}>{children}</ol>;
};

export default OrderedList;
