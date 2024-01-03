import { render, screen } from '@testing-library/react';
import ArticleListItem, {
  ArticleListItemProps,
} from '@src/app/_components/article-list-item/ArticleListItem';

describe('ArticleListItem について', () => {
  const testData: ArticleListItemProps = {
    color: 'skyStripe',
    title: '記事タイトル',
    createdAt: new Date('2023-12-01'),
  };
  const setup = (data = testData) => render(<ArticleListItem {...data} />);
  it('color で受け取った値を data-color 属性にわたしている', () => {
    setup();

    const target = screen.getByRole('listitem').children[0];

    expect(target).toHaveAttribute('data-color', 'skyStripe');
  });

  it('title で受け取った値を h2 として表示する', () => {
    setup();

    const target = screen.getByRole('heading', {
      level: 2,
      name: /^記事タイトル$/,
    });

    expect(target).toBeInTheDocument();
  });

  it('createdAt で受け取った値を表示する', () => {
    setup();

    const target = screen.getByRole('definition').children[0];

    expect(target).toHaveTextContent('2023-12-01');
    expect(target).toHaveAttribute('datetime', '2023-12-01');
  });
});
