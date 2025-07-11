import { PageTitle } from 'shared/ui';
import { TodosEditor } from 'widgets/TodosEditor';

import './TodosPage.scss';

export default function TodosPage() {
  return (
    <main className="todospage">
      <PageTitle className="todospage__title">todos</PageTitle>
      <TodosEditor className="todospage__editor" />
    </main>
  );
}
