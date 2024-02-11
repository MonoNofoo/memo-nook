import { Meta, StoryObj } from '@storybook/react';
import AccordionCore from '@src/app/article/_components/demo/accordion-with-details-element/AccordionCore';

const meta = {
  component: AccordionCore,
  tags: ['autodocs'],
} satisfies Meta<typeof AccordionCore>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    summary: 'eee',
    children: 'bbb',
    isOpen: false,
    handleToggle: (isOpen) => {
      console.log(isOpen);
    },
  },
};
