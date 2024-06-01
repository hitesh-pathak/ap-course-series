import { HTMLAttributes, ReactNode } from 'react';
import { twClsx } from '../../utils/common';
import { DefaultCtnProps } from './container';

export function GridAutoFill({
  children,
  className,
  ...rest
}: DefaultCtnProps) {
  return (
    <div className={twClsx('grid grid-cols-auto-fill', className)} {...rest}>
      {children}
    </div>
  );
}

export function Grid1To4Cols({
  children,
  className,
  ...rest
}: DefaultCtnProps) {
  return (
    <div
      className={twClsx(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
