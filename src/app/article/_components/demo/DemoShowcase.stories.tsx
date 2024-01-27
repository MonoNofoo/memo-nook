import { Meta, StoryObj } from '@storybook/react';
import DemoShowcase from '@src/app/article/_components/demo/DemoShowcase';

const meta = {
  component: DemoShowcase,
  tags: ['autodocs'],
} satisfies Meta<typeof DemoShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'aaa',
  },
};
