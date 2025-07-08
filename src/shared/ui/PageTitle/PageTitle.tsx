import { cn } from 'shared/lib';

import './PageTitle.scss';

type PageTitleProps = {
  className?: string;
  children?: React.ReactNode;
};
export function PageTitle({ className, children }: PageTitleProps) {
  return <h1 className={cn('page-title', className)}>{children}</h1>;
}
