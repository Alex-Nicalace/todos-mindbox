import type { Meta, StoryObj } from '@storybook/react-vite';

import { RadioButton } from './RadioButton';
import { ThemeDecorator } from 'shared/config/storybook';

const meta = {
  title: 'shared/ui/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    label: 'Option 1',
    name: 'group1',
    value: 'option1',
  },
};

export const DefaultDark: Story = {
  args: {
    label: 'Option 1',
    name: 'group1',
    value: 'option1',
  },
  decorators: [ThemeDecorator('dark')],
};

const items = ['Option 1', 'Option 2', 'Option 3'];

export const Group: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {items.map((item) => (
        <RadioButton key={item} {...args} label={item} value={item} />
      ))}
    </div>
  ),
  args: {
    name: 'group1',
  },
};

export const GroupDark: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {items.map((item) => (
        <RadioButton key={item} {...args} label={item} value={item} />
      ))}
    </div>
  ),
  args: {
    name: 'group1',
  },
  decorators: [ThemeDecorator('dark')],
};
