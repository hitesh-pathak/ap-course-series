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

export function VertScrollMenuCtn({
  children,
  className,
  ...rest
}: DefaultCtnProps) {
  return (
    <VertFlexCtn
      className={twClsx('overflow-y-auto py-4', className)}
      {...rest}
    >
      {children}
    </VertFlexCtn>
  );
}

export function RespMenuItemCtn({
  children,
  className,
  ...rest
}: DefaultCtnProps) {
  return (
    <StartCtnHrz
      className={twClsx(
        'cursor-pointer justify-between',
        'min-w-[150px] lg:min-w-[270px]',
        className
      )}
      {...rest}
    >
      {children}
    </StartCtnHrz>
  );
}

export function ModalOverlayFs({
  className = '',
  ...rest
}: {
  className?: string;
}) {
  return (
    <div
      className={twClsx(
        'fixed z-10 inset-0',
        'hidden md:block',
        'bg-slate-700 opacity-60',
        className
      )}
      {...rest}
    ></div>
  );
}
