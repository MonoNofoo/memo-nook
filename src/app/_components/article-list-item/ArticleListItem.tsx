import { FC } from 'react';
import Link from 'next/link';
import * as styles from '@src/app/_components/article-list-item/ArticleListItem.css';
import { tapeColorName } from '@src/app/_components/article-list-item/ArticleListItem.css';
import { CreatedAt } from '@src/model/article/CreatedAt';

export type ArticleListItemProps = {
  color: (typeof tapeColorName)[number];
  title: string;
  createdAt: Date;
};

const ArticleListItem: FC<ArticleListItemProps> = ({
  color,
  title,
  createdAt,
}) => {
  const formatted = new CreatedAt(createdAt).formatter();

  return (
    <li className={styles.container}>
      <span className={styles.tape} data-color={color} />
      <Link href="/" className={styles.link}>
        <h2 className={styles.title}>{title}</h2>
        <dl className={styles.dateShowcase}>
          <dt>作成日</dt>
          <dd className={styles.date}>
            <time dateTime={formatted}>{formatted}</time>
          </dd>
        </dl>
      </Link>
    </li>
  );
};

export default ArticleListItem;
