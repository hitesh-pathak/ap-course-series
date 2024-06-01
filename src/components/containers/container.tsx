import { HTMLAttributes, ReactNode } from 'react';
import { twClsx } from '../../utils/common';

export interface DefaultCtnProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export function VertFlexCtn({ children, className, ...rest }: DefaultCtnProps) {
  return (
    <div className={twClsx('flex flex-col', className)} {...rest}>
      {children}
    </div>
  );
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

export function HiddenSmCtn({ children, className, ...rest }: DefaultCtnProps) {
  return (
    <div className={twClsx('hidden md:block', className)} {...rest}>
      {children}
    </div>
  );
}

export function GapLgCtnHrz({ children, className, ...rest }: DefaultCtnProps) {
  return (
    <div className={twClsx('flex gap-6', className)} {...rest}>
      {children}
    </div>
  );
}

export function TagRoundXs({ children, className, ...rest }: DefaultCtnProps) {
  return (
    <div
      className={twClsx(
        'flex items-center',
        'px-2 py-1 rounded',
        'font-normal text-xs',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
