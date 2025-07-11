import { useState } from 'react';

import { useTodos } from 'entities/todos';
import ArrowIcon from 'shared/assets/icons/arrow-down.svg?react';
import { cn } from 'shared/lib';

import './TodoInput.scss';

type TodoInputProps = {
  className?: string;
};

export function TodoInput({ className }: TodoInputProps) {
  const [todo, setTodo] = useState('');
  const { dispatch } = useTodos();

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      dispatch({ type: 'ADD_TODO', payload: todo });
      setTodo('');
    }
  }

  return (
    <div className={cn('todo-input', className)}>
      <input
        className="todo-input__input"
        placeholder="What needs to be done?"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <span className="todo-input__icon">
        <ArrowIcon width={24} height={24} />
      </span>
    </div>
  );
}
