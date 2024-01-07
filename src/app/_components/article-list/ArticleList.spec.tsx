import { render, screen } from '@testing-library/react';
import ArticleList from '@src/app/_components/article-list/ArticleList';
import { Article } from '@src/model/article/Article';
import { ArticleSlug } from '@src/model/article/ArticleSlug';
import { Articles } from '@src/model/article/Articles';
import { CreatedAt } from '@src/model/article/CreatedAt';
import { Title } from '@src/model/article/Title';
import { UpdatedAt } from '@src/model/article/UpdatedAt';

describe('ArticleListについて', () => {
  // ファイルから取得する処理をモック
  jest.spyOn(Articles, 'makeArticlesByFiles').mockImplementation(async () => {
    return new Articles([
      new Article(
        new Title('title'),
        new CreatedAt(new Date('2023-12-01')),
        new UpdatedAt(new Date('2023-12-02')),
        new ArticleSlug('slug'),
      ),
    ]);
  });
  // サーバーコンポーネントを無理やり描写
  const setup = async () => {
    const component = await ArticleList();
    return render(component);
  };

  it('ArticleListItemが使用されている', async () => {
    await setup();

    const target = screen.getByTestId('ArticleListItem');

    expect(target).toBeInTheDocument();
  });
});
