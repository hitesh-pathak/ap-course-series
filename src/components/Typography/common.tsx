import { ReactNode } from 'react';
import { twClsx } from '../../utils/common';

interface DefaultProps {
  children: ReactNode;
  className?: string;
}

export function SpanTextEn({ children, className, ...rest }: DefaultProps) {
  return (
    <span className={twClsx('font-en', className)} {...rest}>
      {children}
    </span>
  );
}

export function SpanTextHi({ children, className, ...rest }: DefaultProps) {
  return (
    <span className={twClsx('font-hi', className)} {...rest}>
      {children}
    </span>
  );
}

export function TextTitleCtn({ children, className, ...rest }: DefaultProps) {
  return (
    <div
      className={twClsx('text-lg font-medium text-gray-title', className)}
      {...rest}
    >
      {children}
    </div>
  );
}

export function TextSubtitleCtn({
  children,
  className,
  ...rest
}: DefaultProps) {
  return (
    <div
      className={twClsx('text-base text-gray-subtitle', className)}
      {...rest}
    >
      {children}
    </div>
  );
}
