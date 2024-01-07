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
}
