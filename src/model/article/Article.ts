import { CreatedAt } from '@src/model/article/CreatedAt';
import { Title } from '@src/model/article/Title';
import { UpdatedAt } from '@src/model/article/UpdatedAt';

const symbolArticle = Symbol('Article');

export class Article {
  readonly symbol: typeof symbolArticle = symbolArticle;

  private readonly title: Title;

  private readonly createdAt: CreatedAt;

  private readonly updatedAt: UpdatedAt;

  constructor(title: Title, createdAt: CreatedAt, updatedAt: UpdatedAt) {
    this.title = title;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  getCreatedAt() {
    return this.createdAt;
  }
}
