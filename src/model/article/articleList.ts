'use server';

import * as fs from 'fs';
import path from 'path';
import { ArticleInfo } from '@src/model/article/article';

export type ArticleInfoList = ArticleInfo[];

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

export const getArticleList = async () => {
  const slugNames = fs.readdirSync(articleDirectoryPath);

  const list: ArticleInfoList = await Promise.all(
    slugNames.map(async (slugName) => {
      const { birthtime, mtime } = fs.statSync(
        `${articleDirectoryPath}/${slugName}/page.mdx`,
      );
      const { metadata } = await import(
        `@src/app/article/(contents)/${slugName}/page.mdx`
      );

      return {
        title: metadata.title,
        createdAt: new Date(birthtime),
        updatedAt: new Date(mtime),
      };
    }),
  );

  return list;
};

export const getArticleListSortDesc = async () => {
  const list = await getArticleList();

  return list.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
};
