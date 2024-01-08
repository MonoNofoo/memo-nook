import * as fs from 'fs';
import { Article } from '@src/model/article/Article';
import { ArticleSlug } from '@src/model/article/ArticleSlug';
import { Articles } from '@src/model/article/Articles';
import { CreatedAt } from '@src/model/article/CreatedAt';
import { Title } from '@src/model/article/Title';
import { UpdatedAt } from '@src/model/article/UpdatedAt';

jest.mock('fs');

jest.mock(`@src/app/article/_mock/mock-1.mdx`, () => {
  return { metadata: { title: 'title1' } };
});
jest.mock(`@src/app/article/_mock/mock-2.mdx`, () => {
  return { metadata: { title: 'title2' } };
});

describe('Articles について', () => {
  beforeEach(() => {
    (
      fs.readdirSync as jest.MockedFunction<typeof fs.readdirSync>
    ).mockImplementation(
      jest.fn().mockReturnValue(['../_mock/mock-1', '../_mock/mock-2']),
    );

    (fs.statSync as jest.MockedFunction<typeof fs.statSync>)
      .mockImplementationOnce(
        jest.fn().mockReturnValue({
          birthtime: new Date('2023-11-01'),
          mtime: new Date('2023-11-02'),
        }),
      )
      .mockImplementationOnce(
        jest.fn().mockReturnValue({
          birthtime: new Date('2023-11-03'),
          mtime: new Date('2023-11-04'),
        }),
      );
  });

  it('記事リストを取得する', async () => {
    const list = await Articles.makeArticlesByFiles();

    expect(list).toEqual(
      new Articles([
        new Article(
          new Title('title1'),
          new CreatedAt(new Date('2023-11-01')),
          new UpdatedAt(new Date('2023-11-02')),
          new ArticleSlug('../_mock/mock-1'),
        ),
        new Article(
          new Title('title2'),
          new CreatedAt(new Date('2023-11-03')),
          new UpdatedAt(new Date('2023-11-04')),
          new ArticleSlug('../_mock/mock-2'),
        ),
      ]),
    );
  });

  it('記事のリストを新しい記事順で取得する', async () => {
    const list = await Articles.makeArticlesByFiles();
    const target = list.sortDescByCreated();

    expect(target).toEqual(
      new Articles([
        new Article(
          new Title('title2'),
          new CreatedAt(new Date('2023-11-03')),
          new UpdatedAt(new Date('2023-11-04')),
          new ArticleSlug('../_mock/mock-2'),
        ),
        new Article(
          new Title('title1'),
          new CreatedAt(new Date('2023-11-01')),
          new UpdatedAt(new Date('2023-11-02')),
          new ArticleSlug('../_mock/mock-1'),
        ),
      ]),
    );
  });
});
