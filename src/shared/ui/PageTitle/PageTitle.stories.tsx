import type { Meta, StoryObj } from '@storybook/react-vite';

import { PageTitle } from './PageTitle';
import { ThemeDecorator } from 'shared/config/storybook';

const meta = {
  title: 'shared/ui/PageTitle',
  component: PageTitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PageTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    children: 'PageTitle',
  },
};

export const Dark: Story = {
  args: {
    children: 'PageTitle',
  },
  decorators: [ThemeDecorator('dark')],
};
