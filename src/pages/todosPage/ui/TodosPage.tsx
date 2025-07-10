import { Todos } from 'entities/todos';
import { TodoInput } from 'features/TodoInput';
import { PageTitle } from 'shared/ui';

export default function TodosPage() {
  return (
    <main className="todospage">
      <PageTitle>todos</PageTitle>
      <TodoInput />
      <Todos />
    </main>
  );
}
