import { render, screen } from '@testing-library/react';
import OrderedList, {
  OrderedListProps,
} from '@src/app/article/_components/ordered-list/OrderedList';

describe('OrderedList について', () => {
  const testData: OrderedListProps = {
    children: <li>test</li>,
  };
  const setup = (data = testData) => render(<OrderedList {...data} />);
  it('children で渡した値を表示できる', () => {
    setup();

    const target = screen.getByRole('list');

    expect(target).toBeInTheDocument();
  });
});
