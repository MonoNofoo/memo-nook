const symbolArticleSlug = Symbol('ArticleSlug');

export class ArticleSlug {
  readonly symbol: typeof symbolArticleSlug = symbolArticleSlug;

  private readonly value: string;

  constructor(value: string) {
    this.value = value;
  }

  get() {
    return this.value;
  }
}
