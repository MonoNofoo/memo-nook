import fs from 'fs';
import { Article } from '@src/model/article/Article';
import { ArticleSlug } from '@src/model/article/ArticleSlug';
import { CreatedAt } from '@src/model/article/CreatedAt';
import { Title } from '@src/model/article/Title';
import { UpdatedAt } from '@src/model/article/UpdatedAt';

jest.mock('fs');

jest.mock(`@src/app/article/_mock/mock-1.mdx`, () => {
  return { metadata: { title: 'title1' } };
});

describe('Article について', () => {
  beforeEach(() => {
    (fs.statSync as jest.MockedFunction<typeof fs.statSync>).mockImplementation(
      jest.fn().mockReturnValue({
        birthtime: new Date('2023-11-01'),
        mtime: new Date('2023-11-02'),
      }),
    );
  });

  it('getArticleByFileで記事を取得する', async () => {
    const articleSlug = new ArticleSlug('../_mock/mock-1');
    const article = await Article.makeArticleByFile(articleSlug);

    expect(article).toEqual(
      new Article(
        new Title('title1'),
        new CreatedAt(new Date('2023-11-01')),
        new UpdatedAt(new Date('2023-11-02')),
        articleSlug,
      ),
    );
  });
});
