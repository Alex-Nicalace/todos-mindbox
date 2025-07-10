import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { cn } from 'shared/lib';

import './Button.scss';

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
export function Button({ className, ...props }: ButtonProps) {
  return <button {...props} className={cn('button', className)} />;
}
