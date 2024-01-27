import { render, screen } from '@testing-library/react';
import Code, { CodeProps } from '@src/app/article/_components/code/Code';

describe('Code について', () => {
  const testData: CodeProps = {
    children: 'test',
  };
  const setup = (data = testData) => render(<Code {...data} />);
  it('渡した children が表示される', () => {
    setup();

    const target = screen.getByTestId('Code');
    expect(target).toBeInTheDocument();
  });
});
