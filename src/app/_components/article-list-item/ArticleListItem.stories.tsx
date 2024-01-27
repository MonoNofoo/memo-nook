import { Meta, StoryObj } from '@storybook/react';
import ArticleListItem from '@src/app/_components/article-list-item/ArticleListItem';
import { ArticleSlug } from '@src/model/article/ArticleSlug';
import { CreatedAt } from '@src/model/article/CreatedAt';
import { Title } from '@src/model/article/Title';

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
    title: new Title('タイトルタイトルタイトルタイトルタイトルタイトル'),
    createdAt: new CreatedAt(new Date('2023-12-01')),
    slug: new ArticleSlug('slug'),
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
