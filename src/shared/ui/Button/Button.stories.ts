import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './Button';
import { ThemeDecorator } from 'shared/config/storybook';

const meta = {
  title: 'shared/ui/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'Button',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')],
};
