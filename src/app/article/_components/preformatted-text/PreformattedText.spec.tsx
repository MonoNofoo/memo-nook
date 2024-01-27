import { render, screen } from '@testing-library/react';
import PreformattedText, {
  PreformattedTextProps,
} from '@src/app/article/_components/preformatted-text/PreformattedText';

describe('PreformattedText について', () => {
  const testData: PreformattedTextProps = {
    children: 'test',
    className: 'class-name',
  };
  const setup = (data = testData) => render(<PreformattedText {...data} />);

  it('children で渡された値が表示される', () => {
    setup();
    const target = screen.getByTestId('PreformattedText');

    expect(target).toBeInTheDocument();
  });

  it('className で渡された値を class 属性値の値として渡せる', () => {
    setup();
    const target = screen.getByTestId('PreformattedText');

    expect(target).toHaveAttribute('class', 'class-name');
  });
});
