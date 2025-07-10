import type { TodosState, Action } from '../model';

export interface TodosContextProps {
  todosState: TodosState;
  dispatch: React.Dispatch<Action>;
}
