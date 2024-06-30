import { render, screen } from '@testing-library/react';
import Image from '@src/app/article/_components/image/Image';

describe('Image について', () => {
  const testData = { src: '/image.png', alt: 'test' };
  // テストコードなので許容
  // eslint-disable-next-line jsx-a11y/alt-text
  const setup = (data = testData) => render(<Image {...data} />);

  it('alt 属性値と src 属性を渡せる', () => {
    setup();

    const target = screen.getByRole('img', { name: 'test' });

    expect(target).toBeInTheDocument();
  });
});
