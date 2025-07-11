import { renderWithTodosProvider } from '../lib';
import type { TodosState } from '../model';
import Todos from './Todos';

const INITIAL_TODOS_STATE: Record<string, TodosState> = {
  notEmpty: {
    todos: [
      { id: '1', title: 'Todo 1_1', completed: false },
      { id: '2', title: 'Todo 2_2', completed: true },
      { id: '3', title: 'Todo 3_3', completed: false },
    ],
    filter: 'all',
  },
  empty: {
    todos: [],
    filter: 'all',
  },
};

describe('Todos', () => {
  test('renders list', () => {
    const { getByRole } = renderWithTodosProvider(
      <Todos />,
      INITIAL_TODOS_STATE.notEmpty
    );
    expect(getByRole('list')).toBeInTheDocument();
  });

  test('check if todos are rendered', () => {
    const { getByText, queryAllByRole } = renderWithTodosProvider(
      <Todos />,
      INITIAL_TODOS_STATE.notEmpty
    );
    INITIAL_TODOS_STATE.notEmpty.todos.forEach(({ title }) => {
      expect(getByText(title)).toBeInTheDocument();
    });
    const listItems = queryAllByRole('listitem');
    expect(listItems.length).toBe(INITIAL_TODOS_STATE.notEmpty.todos.length);
  });

  test('check if empty list message is rendered', () => {
    const { getByRole } = renderWithTodosProvider(
      <Todos />,
      INITIAL_TODOS_STATE.empty
    );

    expect(getByRole('listitem')).toBeInTheDocument();
    expect(getByRole('listitem')).toHaveClass('todos__item_empty');
  });
});
