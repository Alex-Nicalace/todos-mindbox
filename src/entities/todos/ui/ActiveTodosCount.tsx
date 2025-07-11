import { cn, pluralize } from 'shared/lib';
import { useTodos } from '../context';

import './ActiveTodosCount.scss';

type ActiveTodosCountProps = {
  className?: string;
};
export function ActiveTodosCount({ className }: ActiveTodosCountProps) {
  const {
    todosState: { todos },
  } = useTodos();
  const activeCount = todos.filter((todo) => !todo.completed).length;

  return (
    <span className={cn('active-todos-count', className)}>{`${pluralize(
      activeCount,
      'item'
    )} left`}</span>
  );
}
