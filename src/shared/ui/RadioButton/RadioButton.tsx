import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { cn } from 'shared/lib';

import './RadioButton.scss';

type RadioButtonProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'type' | 'children'
> & {
  label?: string;
};

export function RadioButton({ className, label, ...props }: RadioButtonProps) {
  return (
    <label className={cn('radio-button', className)}>
      <input {...props} className="sr-only" type="radio" />
      {label}
    </label>
  );
}
