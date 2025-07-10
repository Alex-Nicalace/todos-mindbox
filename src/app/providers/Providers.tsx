import { TodosProvider } from 'entities/todos';
import { ErrorBoundary } from 'shared/ui';

type ProvidersProps = {
  children: React.ReactNode;
};
export function Providers({ children }: ProvidersProps) {
  return (
    <ErrorBoundary fallback={<div>Произошла ошибка</div>}>
      <TodosProvider>{children}</TodosProvider>
    </ErrorBoundary>
  );
}
