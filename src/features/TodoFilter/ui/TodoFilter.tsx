import { useTodos, type Filter } from 'entities/todos';
import { cn } from 'shared/lib';
import { RadioButton } from 'shared/ui';

import './TodoFilter.scss';

const ITEMS: Filter[] = ['all', 'active', 'completed'];

type TodoFilterProps = {
  className?: string;
};
export function TodoFilter({ className }: TodoFilterProps) {
  const {
    dispatch,
    todosState: { filter },
  } = useTodos();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: 'SET_FILTER', payload: e.target.value as Filter });
  }

  return (
    <div className={cn('todo-filter', className)}>
      {ITEMS.map((item) => (
        <RadioButton
          key={item}
          className="todo-filter__item"
          name="todo-filter"
          label={item}
          checked={filter === item}
          onChange={handleChange}
          value={item}
        />
      ))}
    </div>
  );
}
