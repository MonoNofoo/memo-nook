import { Metadata } from 'next';
import { ArticleSlug } from '@src/model/article/ArticleSlug';
import { CreatedAt } from '@src/model/article/CreatedAt';
import { Title } from '@src/model/article/Title';

const symbolArticle = Symbol('Article');

export class Article {
  readonly symbol: typeof symbolArticle = symbolArticle;

  private readonly title: Title;

  private readonly createdAt: CreatedAt;

  private readonly articleSlug: ArticleSlug;

  constructor(title: Title, createdAt: CreatedAt, articleSlug: ArticleSlug) {
    this.title = title;
    this.createdAt = createdAt;
    this.articleSlug = articleSlug;
  }

  getTitle() {
    return this.title;
  }

  getCreatedAt() {
    return this.createdAt;
  }

  getArticleSlug() {
    return this.articleSlug;
  }

  static async makeArticleByFile(slug: ArticleSlug) {
    'use server';

    const {
      metadata,
      createdAt,
    }: { metadata: Metadata; createdAt: CreatedAt } = await import(
      `@src/app/article/_mdx/${slug.get()}.mdx`
    );

    return new Article(new Title(metadata.title), createdAt, slug);
  }
}
