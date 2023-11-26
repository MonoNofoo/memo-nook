import { Meta, StoryObj } from '@storybook/react';
import Profile from '@src/app/_components/profile/Profile';

const meta = {
  component: Profile,
  tags: ['autodocs'],
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
