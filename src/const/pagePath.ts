import { ArticleSlug } from '@src/model/article/ArticleSlug';

export const topPagePath = '/';
export const detailArticlePagePath = (slug: ArticleSlug) =>
  `/article/${slug.get()}`;
