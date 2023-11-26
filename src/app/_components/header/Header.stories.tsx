import Header from '@src/app/_components/header/Header';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Scroll: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '3000px' }}>
        <Story />
      </div>
    ),
  ],
};
