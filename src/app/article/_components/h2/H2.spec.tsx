import { render, screen } from '@testing-library/react';
import H2, { H2Props } from '@src/app/article/_components/h2/H2';

describe('H2コンポーネントについて', () => {
  const testData: H2Props = {
    children: 'text',
  };
  const setup = (data = testData) => render(<H2 {...data} />);
  it('children で渡された値を表示する', () => {
    setup();

    const target = screen.getByRole('heading', {
      level: 2,
      name: /^text$/,
    });

    expect(target).toBeInTheDocument();
  });
});
