import { useMemo } from 'react';
import { cn } from 'shared/lib';
import { Checkbox } from 'shared/ui';
import { useTodos } from '../context';

import './Todos.scss';

export type TodosProps = {
  className?: string;
};

export default function Todos({ className }: TodosProps) {
  const { todosState, dispatch } = useTodos();
  const { todos, filter } = todosState;
  const filteredTodos = useMemo(
    () =>
      ['completed', 'active'].includes(filter)
        ? todos.filter((todo) => todo.completed === (filter === 'completed'))
        : todos,
    [todos, filter]
  );

  function handleToggleTodo(id: string) {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  }

  return (
    <ul className={cn('todos', className)}>
      {filteredTodos.length === 0 ? (
        <li className="todos__item todos__item_empty">
          📝 There are no tasks. Add the first one!
        </li>
      ) : (
        filteredTodos.map((todo) => (
          <li key={todo.id} className="todos__item">
            <Checkbox
              checked={todo.completed}
              label={todo.title}
              onChange={() => handleToggleTodo(todo.id)}
            />
          </li>
        ))
      )}
    </ul>
  );
}
