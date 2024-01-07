import { Metadata } from 'next';
import * as fs from 'fs';
import { articleDirectoryPath } from '@src/const/path';
import { ArticleSlug } from '@src/model/article/ArticleSlug';
import { CreatedAt } from '@src/model/article/CreatedAt';
import { Title } from '@src/model/article/Title';
import { UpdatedAt } from '@src/model/article/UpdatedAt';

const symbolArticle = Symbol('Article');

export class Article {
  readonly symbol: typeof symbolArticle = symbolArticle;

  private readonly title: Title;

  private readonly createdAt: CreatedAt;

  private readonly updatedAt: UpdatedAt;

  private readonly articleSlug: ArticleSlug;

  constructor(
    title: Title,
    createdAt: CreatedAt,
    updatedAt: UpdatedAt,
    articleSlug: ArticleSlug,
  ) {
    this.title = title;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
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

    const { birthtime, mtime } = fs.statSync(
      `${articleDirectoryPath}/${slug.get()}/page.mdx`,
    );
    const { metadata }: { metadata: Metadata } = await import(
      `@src/app/article/(contents)/${slug.get()}/page.mdx`
    );

    return new Article(
      new Title(metadata.title),
      new CreatedAt(new Date(birthtime)),
      new UpdatedAt(new Date(mtime)),
      slug,
    );
  }
}
