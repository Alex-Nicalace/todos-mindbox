import { useContext } from 'react';
import { TodosContext } from './TodosContext';

export function useTodos() {
  const context = useContext(TodosContext);

  if (context === null) {
    throw new Error('useTodos must be used within a TodosProvider');
  }

  return context;
}
