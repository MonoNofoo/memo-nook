import { Meta, StoryObj } from '@storybook/react';
import Header from '@src/app/_components/header/Header';

const meta = {
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TitleHeader: Story = {
  args: {
    isLink: false,
  },
};

export const TitleLink: Story = {
  args: {
    isLink: true,
  },
};
