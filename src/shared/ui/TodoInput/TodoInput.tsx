import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import ArrowIcon from 'shared/assets/icons/arrow-down.svg?react';
import { cn } from 'shared/lib';

import './TodoInput.scss';

type TodoInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export function TodoInput({ className, ...props }: TodoInputProps) {
  return (
    <div className={cn('todo-input', className)}>
      <input className="todo-input__input" {...props} />
      <ArrowIcon className="todo-input__icon" width={24} height={24} />
    </div>
  );
}
