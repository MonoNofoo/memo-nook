import { Meta, StoryObj } from '@storybook/react';
import ArticleListItem from '@src/app/_components/article-list-item/ArticleListItem';

const meta = {
  component: ArticleListItem,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ul style={{ padding: '0', margin: '0' }}>
        <Story />
      </ul>
    ),
  ],
} satisfies Meta<typeof ArticleListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'skyStripe',
    title: 'タイトルタイトルタイトルタイトルタイトルタイトル',
    createdAt: new Date('2023-12-01'),
  },
};

export const Pink: Story = {
  args: {
    ...Default.args,
    color: 'pinkPlaid',
  },
};

export const Yellow: Story = {
  args: {
    ...Default.args,
    color: 'yellowStripe',
  },
};

export const Green: Story = {
  args: {
    ...Default.args,
    color: 'greenDot',
  },
};

export const Purple: Story = {
  args: {
    ...Default.args,
    color: 'purple',
  },
};
