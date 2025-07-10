import type { Meta, StoryObj } from '@storybook/react-vite';

import { Checkbox } from './Checkbox';
import { ThemeDecorator } from 'shared/config/storybook';

const meta = {
  title: 'shared/ui/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: 'Checkbox',
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')],
};
