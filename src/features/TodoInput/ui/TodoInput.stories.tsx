import type { Meta, StoryObj } from '@storybook/react-vite';

import { TodoInput } from './TodoInput';
import { ThemeDecorator } from 'shared/config/storybook';

const meta = {
  title: 'features/TodoInput',
  component: TodoInput,
  parameters: {
    layout: 'centered',
    backgrounds: {},
  },
  tags: ['autodocs'],
  args: {
    name: 'TodoInput',
  },
} satisfies Meta<typeof TodoInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')],
};
