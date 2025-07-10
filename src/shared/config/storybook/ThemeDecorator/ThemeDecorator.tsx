import type { Decorator } from '@storybook/react';

export const ThemeDecorator =
  (theme: 'light' | 'dark'): Decorator =>
  (Story) =>
    (
      <div className={`app ${theme}`}>
        <Story />
      </div>
    );
