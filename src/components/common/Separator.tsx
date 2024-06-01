import { twClsx } from '../../utils/common';

export function HrzLineSeparator({ className = '' }: { className?: string }) {
  return (
    <div
      className={twClsx('w-full h-[0.5px] bg-gray-separator', className)}
    ></div>
  );
}

export function VertLineSeparator({ className = '' }: { className?: string }) {
  return (
    <div className={twClsx('h-full w-px bg-gray-separator', className)}></div>
  );
}
