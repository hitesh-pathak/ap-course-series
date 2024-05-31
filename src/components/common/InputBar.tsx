import { InputHTMLAttributes } from 'react';
import { twClsx } from '../../utils/common';

interface InputBarProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  className?: string;
  type: string;
  value?: string;
}

export function InputBar({
  type = 'text',
  placeholder = 'Search...',
  className = '',
  ...props
}: InputBarProps) {
  const baseCls =
    'w-full border-0 text-gray-title focus:ring-0 focus-visible:ring-0 focus:outline-none';

  return (
    <input
      type={type}
      className={twClsx(baseCls, className)}
      placeholder={placeholder}
      {...props}
    />
  );
}
