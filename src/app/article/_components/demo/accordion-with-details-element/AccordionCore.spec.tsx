import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import AccordionCore, {
  AccordionCoreProps,
} from '@src/app/article/_components/demo/accordion-with-details-element/AccordionCore';

describe('AccordionCoreについて', () => {
  const testData: AccordionCoreProps = {
    summary: 'summary-text',
    children: 'content-text',
    isOpen: false,
    handleToggle: () => {},
  };
  const setup = (data = testData) => render(<AccordionCore {...data} />);

  it('summaryで渡した値が summary 要素に表示される', () => {
    setup();
    const target = screen.getByText('summary-text');

    expect(target).toBeInTheDocument();
  });

  it('children でアコーディオンの中身を渡せる', () => {
    setup();
    const target = screen.getByText('content-text');

    expect(target).toBeInTheDocument();
  });

  it('isOpen で true を渡したら open 属性が存在する', () => {
    setup({ ...testData, isOpen: true });
    const target = screen.getByRole('group');

    expect(target).toHaveAttribute('open');
  });

  it('isOpen で false を渡したら open 属性が存在しない', () => {
    setup();
    const target = screen.getByRole('group');

    expect(target).not.toHaveAttribute('open');
  });

  it('summary 要素をクリックすると handleToggle が発火する', async () => {
    const mockFn = jest.fn();
    const user = userEvent.setup();
    setup({ ...testData, handleToggle: mockFn });
    const target = screen.getByText('summary-text');

    await user.click(target);

    expect(mockFn).toHaveBeenCalledWith(true);
  });
});
