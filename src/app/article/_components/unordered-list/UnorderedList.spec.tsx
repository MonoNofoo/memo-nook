import { render, screen } from '@testing-library/react';
import UnorderedList, {
  ListProps,
} from '@src/app/article/_components/unordered-list/UnorderedList';

describe('UnorderedList コンポーネントについて', () => {
  const testData: ListProps = {
    children: <li>test</li>,
  };
  const setup = (data = testData) => render(<UnorderedList {...data} />);

  it('children で渡した値を表示出来る', () => {
    setup();

    const target = screen.getByRole('list');

    expect(target).toBeInTheDocument();
  });
});
