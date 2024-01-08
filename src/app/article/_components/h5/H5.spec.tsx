import { render, screen } from '@testing-library/react';
import H5, { H5Props } from '@src/app/article/_components/h5/H5';

describe('H2コンポーネントについて', () => {
  const testData: H5Props = {
    children: 'text',
  };
  const setup = (data = testData) => render(<H5 {...data} />);
  it('children で渡された値を表示する', () => {
    setup();

    const target = screen.getByRole('heading', {
      level: 5,
      name: /^text$/,
    });

    expect(target).toBeInTheDocument();
  });
});
