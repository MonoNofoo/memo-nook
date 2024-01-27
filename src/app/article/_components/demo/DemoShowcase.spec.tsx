import { render, screen } from '@testing-library/react';
import DemoShowcase from '@src/app/article/_components/demo/DemoShowcase';

describe('DemoShowcase について', () => {
  const testData = { children: 'test' };
  const setup = (data = testData) => render(<DemoShowcase {...data} />);

  it('children で渡した値を表示する', () => {
    setup();
    const target = screen.getByText(/^test$/);

    expect(target).toBeInTheDocument();
  });
});
