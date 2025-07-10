import { useMemo } from 'react';
import { Checkbox } from 'shared/ui';
import { useTodos } from '../context';

export default function Todos() {
  const { todosState } = useTodos();
  const { todos, filter } = todosState;
  const filteredTodos = useMemo(
    () =>
      ['completed', 'active'].includes(filter)
        ? todos.filter((todo) => todo.completed === (filter === 'completed'))
        : todos,
    [todos, filter]
  );

  return (
    <ul className="todos">
      {filteredTodos.map((todo) => (
        <li key={todo.id} className="todos__item">
          <Checkbox checked={todo.completed} label={todo.title} />
        </li>
      ))}
    </ul>
  );
}
