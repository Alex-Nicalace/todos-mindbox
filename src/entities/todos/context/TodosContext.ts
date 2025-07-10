import { createContext } from 'react';
import type { TodosContextProps } from './types';

export const TodosContext = createContext<TodosContextProps | null>(null);
