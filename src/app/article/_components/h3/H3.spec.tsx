import { render, screen } from '@testing-library/react';
import H3, { H3Props } from '@src/app/article/_components/h3/H3';

describe('H2コンポーネントについて', () => {
  const testData: H3Props = {
    children: 'text',
  };
  const setup = (data = testData) => render(<H3 {...data} />);
  it('children で渡された値を表示する', () => {
    setup();

    const target = screen.getByRole('heading', {
      level: 3,
      name: /^text$/,
    });

    expect(target).toBeInTheDocument();
  });
});
