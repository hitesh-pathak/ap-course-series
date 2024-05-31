import { HTMLAttributes } from 'react';
import { twClsx } from '../../utils/common';

interface DefaultCtnProps extends HTMLAttributes<HTMLDivElement> {
  children: JSX.Element;
  className?: string;
}

export function StartCtnHrz({ children, className, ...rest }: DefaultCtnProps) {
  return (
    <div
      className={twClsx('flex items-center justify-start', className)}
      {...rest}
    >
      {children}
    </div>
  );
}

export function SectionCtn({ children, className, ...rest }: DefaultCtnProps) {
  return (
    <div className={twClsx('px-4 lg:px-8', className)} {...rest}>
      {children}
    </div>
  );
}

export function FullExpandCtn({
  children,
  className,
  ...rest
}: DefaultCtnProps) {
  return (
    <div
      className={twClsx('w-full h-full overflow-hidden', className)}
      {...rest}
    >
      {children}
    </div>
  );
}
