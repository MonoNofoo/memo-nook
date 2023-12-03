import * as fs from 'fs';
import {
  getArticleList,
  getArticleListSortDesc,
} from '@src/model/article/articleList';

jest.mock('fs');

jest.mock(`@src/app/article/(contents)/_mock/mock-1/page.mdx`, () => {
  return { metadata: { title: 'title1' } };
});
jest.mock(`@src/app/article/(contents)/_mock/mock-2/page.mdx`, () => {
  return { metadata: { title: 'title2' } };
});

describe('articleList について', () => {
  beforeEach(() => {
    (
      fs.readdirSync as jest.MockedFunction<typeof fs.readdirSync>
    ).mockImplementation(
      jest.fn().mockReturnValue(['_mock/mock-1', '_mock/mock-2']),
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
    const list = await getArticleList();

    expect(list).toEqual([
      {
        title: 'title1',
        createdAt: new Date('2023-11-01'),
        updatedAt: new Date('2023-11-02'),
      },
      {
        title: 'title2',
        createdAt: new Date('2023-11-03'),
        updatedAt: new Date('2023-11-04'),
      },
    ]);
  });

  it('記事のリストを新しい記事順で取得する', async () => {
    const list = await getArticleListSortDesc();

    expect(list).toEqual([
      {
        title: 'title2',
        createdAt: new Date('2023-11-03'),
        updatedAt: new Date('2023-11-04'),
      },
      {
        title: 'title1',
        createdAt: new Date('2023-11-01'),
        updatedAt: new Date('2023-11-02'),
      },
    ]);
  });
});
