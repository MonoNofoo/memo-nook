import { FC } from 'react';
import * as styles from '@src/app/article/[slug]/page.css';
import { Article } from '@src/model/article/Article';
import { ArticleSlug } from '@src/model/article/ArticleSlug';

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const article = await import(`@src/app/article/_mdx/${params.slug}.mdx`);

  return {
    title: article.metadata.title,
    description: article.metadata.description,
  };
};

const Page: FC<{ params: { slug: string } }> = async ({ params }) => {
  const { default: Content, metadata } = await import(
    `@src/app/article/_mdx/${params.slug}.mdx`
  );
  const article = await Article.makeArticleByFile(new ArticleSlug(params.slug));

  return (
    <div>
      <h1 className={styles.title}>{metadata.title}</h1>
      <dl className={styles.dateShowcase}>
        <div className={styles.dateRow}>
          <dt>作成日：</dt>
          <dd className={styles.date}>
            <time>{article.getCreatedAt().formatter()}</time>
          </dd>
        </div>
      </dl>

      <Content />
    </div>
  );
};

export default Page;
