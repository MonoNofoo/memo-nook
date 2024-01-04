'use server';

import { Metadata } from 'next';
import * as fs from 'fs';
import path from 'path';
import { Article } from '@src/model/article/Article';
import { CreatedAt } from '@src/model/article/CreatedAt';
import { Title } from '@src/model/article/Title';
import { UpdatedAt } from '@src/model/article/UpdatedAt';

/**
 * 記事が格納されているディレクトリのパス
 */
const articleDirectoryPath = path.join(
  process.cwd(),
  'src',
  'app',
  'article',
  '(contents)',
);
const symbolArticles = Symbol('Articles');

export class Articles {
  readonly symbol: typeof symbolArticles = symbolArticles;

  private readonly list: Article[];

  constructor(list: Article[]) {
    this.list = list;
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
    const slugNames = fs.readdirSync(articleDirectoryPath);

    const list: Article[] = await Promise.all(
      slugNames.map(async (slugName) => {
        const { birthtime, mtime } = fs.statSync(
          `${articleDirectoryPath}/${slugName}/page.mdx`,
        );
        const { metadata }: { metadata: Metadata } = await import(
          `@src/app/article/(contents)/${slugName}/page.mdx`
        );

        return new Article(
          new Title(metadata.title),
          new CreatedAt(new Date(birthtime)),
          new UpdatedAt(new Date(mtime)),
        );
      }),
    );

    return new Articles(list);
  }
}
