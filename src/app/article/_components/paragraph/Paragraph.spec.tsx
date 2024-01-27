import { render, screen } from '@testing-library/react';
import Paragraph, {
  ParagraphProps,
} from '@src/app/article/_components/paragraph/Paragraph';

describe('Paragraph について', () => {
  const testData: ParagraphProps = { children: 'test' };
  const setup = (data = testData) => render(<Paragraph {...data} />);

  it('children で渡した値を表示している', () => {
    setup();

    const target = screen.getByText(/^test$/);

    expect(target).toBeInTheDocument();
  });
});
