import type { Decorator } from '@storybook/react';
import { TodosProvider } from '../../context';

export const TodosDecorator: Decorator = (Story) => (
  <TodosProvider>
    <Story />
  </TodosProvider>
);
