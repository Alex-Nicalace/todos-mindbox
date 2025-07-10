export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

type Filter = 'all' | 'active' | 'completed';

export interface TodosState {
  todos: Todo[];
  filter: Filter;
}

export type Action =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: string }
  | { type: 'CLEAR_COMPLETED' }
  | { type: 'SET_FILTER'; payload: Filter };
