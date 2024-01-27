import { render, screen } from '@testing-library/react';
import Blockquote, {
  BlockquoteProps,
} from '@src/app/article/_components/blockquote/Blockquote';

describe('Blockquote について', () => {
  const testData: BlockquoteProps = { children: 'test' };
  const setup = (data = testData) => render(<Blockquote {...data} />);
  it('children で受け取った値を表示できる', () => {
    setup();

    const target = screen.getByText(/^test$/);
    expect(target).toBeInTheDocument();
  });
});
