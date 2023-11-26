import { render, screen } from '@testing-library/react';
import Header, { HeaderProps } from '@src/app/_components/header/Header';

describe('Header コンポーネントについて', () => {
  const testData: HeaderProps = {
    isLink: false,
  };

  const setup = (data = testData) => render(<Header {...data} />);

  it('isLink が false のときはサイト名が見出しになっている', () => {
    setup();
    const target = screen.getByRole('heading', {
      level: 1,
      name: /^MEMO NOOK$/,
    });

    expect(target).toBeInTheDocument();
  });

  it('isLink が true のときはサイト名がリンクになっている', () => {
    setup({ isLink: true });
    const target = screen.getByRole('link', {
      name: /^MEMO NOOK$/,
    });

    expect(target).toHaveAttribute('href', '/');
  });
});
