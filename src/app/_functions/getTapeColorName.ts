import { tapeColorName } from '@src/app/_components/article-list-item/ArticleListItem.css';

export const getTapeColorName = (num: number) => {
  // 記事一覧で使用するテープの色
  const articleListTapes: (typeof tapeColorName)[number][] = [
    'pinkPlaid',
    'yellowStripe',
    'greenDot',
    'purple',
  ];
  return articleListTapes[num % articleListTapes.length];
};
