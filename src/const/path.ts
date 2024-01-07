import path from 'path';

/**
 * 記事が格納されているディレクトリのパス
 */
export const articleDirectoryPath = path.join(
  process.cwd(),
  'src',
  'app',
  'article',
  '(contents)',
);
