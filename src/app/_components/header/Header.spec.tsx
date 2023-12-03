import { render, screen } from '@testing-library/react';
import Header from '@src/app/_components/header/Header';
import { topPagePath } from '@src/const/pagePath';

const mockUsePathname = jest.fn();
jest.mock('next/navigation', () => ({
  usePathname() {
    return mockUsePathname();
  },
}));

describe('Header コンポーネントについて', () => {
  const setup = () => render(<Header />);

  it('isLink が false のときはサイト名が見出しになっている', () => {
    mockUsePathname.mockImplementation(() => '/');

    setup();
    const target = screen.getByRole('heading', {
      level: 1,
      name: /^MEMO NOOK$/,
    });

    expect(target).toBeInTheDocument();
  });

  it('isLink が true のときはサイト名がリンクになっている', () => {
    mockUsePathname.mockImplementation(() => '/dummy');

    setup();
    const target = screen.getByRole('link', {
      name: /^MEMO NOOK$/,
    });

    expect(target).toHaveAttribute('href', topPagePath);
  });
});
