import { render } from '@testing-library/react';
import type { JSX } from 'react';
import { TodosProvider } from '../../context';
import type { TodosState } from '../../model';

export function renderWithTodosProvider(
  element: JSX.Element,
  initialState?: TodosState
) {
  return render(
    <TodosProvider initialTodosState={initialState}>{element}</TodosProvider>
  );
}
