import { twClsx } from '../../utils/common';

interface DefaultProps {
  children: JSX.Element;
  className?: string;
}

export function SpanTextEn({ children, ...props }: { children: string }) {
  return (
    <span className="font-en" {...props}>
      {children}
    </span>
  );
}

export function SpanTextHi({ children, ...props }: { children: string }) {
  return (
    <span className="font-hi" {...props}>
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
