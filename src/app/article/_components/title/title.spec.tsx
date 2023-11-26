import { render, screen } from '@testing-library/react';
import Title, { TitleProps } from '@src/app/article/_components/title/title';

describe('Title コンポーネントについて', () => {
  const testData: TitleProps = {
    children: 'title text',
  };
  const setup = (data = testData) => render(<Title {...data} />);

  it('props で渡された値を表示する', () => {
    setup();

    const target = screen.getByRole('heading', {
      level: 1,
      name: /^title text$/,
    });

    expect(target).toBeInTheDocument();
  });
});
