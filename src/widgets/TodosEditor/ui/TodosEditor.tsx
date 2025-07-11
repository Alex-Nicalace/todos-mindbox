import { ActiveTodosCount, Todos } from 'entities/todos';
import { ClearCompletedButton } from 'features/ClearCompletedTodos';
import { TodoFilter } from 'features/TodoFilter';
import { TodoInput } from 'features/TodoInput';
import { cn } from 'shared/lib';

import './TodosEditor.scss';

type TodosEditorProps = {
  className?: string;
};
export default function TodosEditor({ className }: TodosEditorProps) {
  return (
    <div className={cn('todos-editor', className)}>
      <TodoInput className="todos-editor__input" />
      <Todos className="todos-editor__todos" />
      <footer>
        <ActiveTodosCount />
        <TodoFilter />
        <ClearCompletedButton />
      </footer>
    </div>
  );
}
