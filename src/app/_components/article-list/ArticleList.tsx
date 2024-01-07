'use server';

import ArticleListItem from '@src/app/_components/article-list-item/ArticleListItem';
import * as styles from '@src/app/_components/article-list/ArticleList.css';
import { getTapeColorName } from '@src/app/_functions/getTapeColorName';
import { Articles } from '@src/model/article/Articles';

const ArticleList = async () => {
  const articles = (await Articles.makeArticlesByFiles()).sortDescByCreated();
  return (
    <ul className={styles.container}>
      {articles.get().map((article, index) => (
        <ArticleListItem
          color={getTapeColorName(index)}
          title={article.getTitle()}
          createdAt={article.getCreatedAt()}
          key={article.getArticleSlug().get()}
          slug={article.getArticleSlug()}
        />
      ))}
    </ul>
  );
};

export default ArticleList;
