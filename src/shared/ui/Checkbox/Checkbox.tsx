import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { cn } from 'shared/lib';
import CheckIcon from 'shared/assets/icons/check.svg?react';

import './Checkbox.scss';

type CheckboxProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'type' | 'children'
> & {
  label?: string;
};
export function Checkbox({ className, label, ...props }: CheckboxProps) {
  return (
    <label className={cn('checkbox', className)}>
      <input {...props} className="sr-only" type="checkbox" />
      <span className="checkbox__checkmark">
        <CheckIcon
          className="checkbox__checkmark-icon"
          width={25}
          height={25}
        />
      </span>
      {label && <span className="checkbox__label">{label}</span>}
    </label>
  );
}
