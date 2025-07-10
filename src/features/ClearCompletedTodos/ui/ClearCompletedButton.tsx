import { useTodos } from 'entities/todos';
import { Button } from 'shared/ui';

type ClearCompletedTodosProps = {
  className?: string;
};
export function ClearCompletedButton({ className }: ClearCompletedTodosProps) {
  const { dispatch } = useTodos();

  function handleClick() {
    dispatch({ type: 'CLEAR_COMPLETED' });
  }

  return (
    <Button className={className} onClick={handleClick}>
      Clear completed
    </Button>
  );
}
