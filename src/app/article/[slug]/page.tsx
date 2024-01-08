import * as styles from '@src/app/article/[slug]/page.css';
import { Article } from '@src/model/article/Article';
import { ArticleSlug } from '@src/model/article/ArticleSlug';

const Page = async ({ params }: { params: { slug: string } }) => {
  const Content = await import(`@src/app/article/_mdx/${params.slug}.mdx`);
  const article = await Article.makeArticleByFile(new ArticleSlug(params.slug));

  return (
    <div>
      <h1 className={styles.title}>{Content.metadata.title}</h1>
      <dl className={styles.dateShowcase}>
        <div className={styles.dateRow}>
          <dt>作成日：</dt>
          <dd className={styles.date}>
            <time>{article.getCreatedAt().formatter()}</time>
          </dd>
        </div>
        <div className={styles.dateRow}>
          <dt>更新日：</dt>
          <dd className={styles.date}>
            <time>{article.getUpdatedAt().formatter()}</time>
          </dd>
        </div>
      </dl>

      <Content.default />
    </div>
  );
};

export default Page;
