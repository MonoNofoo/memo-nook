import { render, screen } from '@testing-library/react';
import H4, { H4Props } from '@src/app/article/_components/h4/H4';

describe('H2コンポーネントについて', () => {
  const testData: H4Props = {
    children: 'text',
  };
  const setup = (data = testData) => render(<H4 {...data} />);
  it('children で渡された値を表示する', () => {
    setup();

    const target = screen.getByRole('heading', {
      level: 4,
      name: /^text$/,
    });

    expect(target).toBeInTheDocument();
  });
});
