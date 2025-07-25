import type { Preview } from '@storybook/react-vite';
import { TodosDecorator } from '../src/entities/todos/config/storybook';
import { ThemeDecorator } from '../src/shared/config/storybook';

import 'app/styles/index.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
  decorators: [ThemeDecorator('light'), TodosDecorator],
};

export default preview;
