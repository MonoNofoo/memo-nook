import { FC } from 'react';
import Link from 'next/link';
import * as styles from '@src/app/_components/article-list-item/ArticleListItem.css';
import { tapeColorName } from '@src/app/_components/article-list-item/ArticleListItem.css';
import { detailArticlePagePath } from '@src/const/pagePath';
import { ArticleSlug } from '@src/model/article/ArticleSlug';
import { CreatedAt } from '@src/model/article/CreatedAt';
import { Title } from '@src/model/article/Title';

export type ArticleListItemProps = {
  color: (typeof tapeColorName)[number];
  title: Title;
  createdAt: CreatedAt;
  slug: ArticleSlug;
};

const ArticleListItem: FC<ArticleListItemProps> = ({
  color,
  title,
  createdAt,
  slug,
}) => {
  const formatted = createdAt.formatter();

  return (
    <li className={styles.container} data-testid="ArticleListItem">
      <span className={styles.tape} data-color={color} />
      <Link href={detailArticlePagePath(slug)} className={styles.link}>
        <h2 className={styles.title}>{title.get()}</h2>
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
