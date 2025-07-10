import { useMemo, useReducer } from 'react';
import { type TodosState, todosReducer } from '../model';
import { TodosContext } from './TodosContext';

const initialTodosState: TodosState = {
  todos: [
    { id: '1', title: 'Todo 1', completed: false },
    { id: '2', title: 'Todo 2', completed: true },
    { id: '3', title: 'Todo 3', completed: false },
  ],
  filter: 'all',
};

type TodosProviderProps = {
  children: React.ReactNode;
};
export function TodosProvider({ children }: TodosProviderProps) {
  const [todos, dispatch] = useReducer(todosReducer, initialTodosState);

  const contextValue = useMemo(
    () => ({
      todosState: todos,
      dispatch,
    }),
    [todos]
  );

  return <TodosContext value={contextValue}>{children}</TodosContext>;
}
