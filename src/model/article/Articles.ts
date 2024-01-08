import * as fs from 'fs';
import { articleDirectoryPath } from '@src/const/path';
import { Article } from '@src/model/article/Article';
import { ArticleSlug } from '@src/model/article/ArticleSlug';

const symbolArticles = Symbol('Articles');

export class Articles {
  readonly symbol: typeof symbolArticles = symbolArticles;

  private readonly list: Article[];

  constructor(list: Article[]) {
    this.list = list;
  }

  get() {
    return this.list;
  }

  sortDescByCreated() {
    return new Articles(
      this.list.sort(
        (a, b) =>
          b.getCreatedAt().get().getTime() - a.getCreatedAt().get().getTime(),
      ),
    );
  }

  static async makeArticlesByFiles() {
    const fileNames = fs.readdirSync(articleDirectoryPath);

    const list: Article[] = await Promise.all(
      fileNames.map(async (fileName) => {
        const slugName = fileName.replace(/\.mdx/, '');
        return Article.makeArticleByFile(new ArticleSlug(slugName));
      }),
    );

    return new Articles(list);
  }
}
