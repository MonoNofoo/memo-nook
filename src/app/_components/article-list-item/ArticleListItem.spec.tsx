import { render, screen } from '@testing-library/react';
import ArticleListItem, {
  ArticleListItemProps,
} from '@src/app/_components/article-list-item/ArticleListItem';
import { ArticleSlug } from '@src/model/article/ArticleSlug';
import { CreatedAt } from '@src/model/article/CreatedAt';
import { Title } from '@src/model/article/Title';

describe('ArticleListItem について', () => {
  const testData: ArticleListItemProps = {
    color: 'skyStripe',
    title: new Title('記事タイトル'),
    createdAt: new CreatedAt(new Date('2023-12-01')),
    slug: new ArticleSlug('slug'),
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

  it('記事ページへのリンクが存在する', () => {
    setup();

    const target = screen.getByRole('link');

    expect(target).toHaveAttribute('href', '/article/slug');
  });
});
