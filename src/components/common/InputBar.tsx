import { InputHTMLAttributes, useState } from 'react';
import { twClsx } from '../../utils/common';

interface InputBarProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  className?: string;
  type: string;
  value?: string;
}

export function InputBar({
  type = 'text',
  placeholder = '',
  className = '',
  ...props
}: InputBarProps) {
  const baseCls =
    'border-0 focus:ring-0 focus-visible:ring-0 focus:outline-none';

  return (
    <input
      type={type}
      className={twClsx(baseCls, className)}
      placeholder={placeholder}
      {...props}
    />
  );
}

// export function SearchBar({
//   type = 'text',
//   placeholder = '',
//   className = '',
//   ...props
// }: InputBarProps) {
//   const [inputVal, setValue] = useState<string | undefined>('');

//   const baseCls =
//     'border-0 focus:ring-0 focus-visible:ring-0 focus:outline-none';

//   return (
//     <InputBar
//       type=
//       value={inputVal}
//       onChange={(e) => setValue(e.target.value ?? placeholder)}
//       className={twClsx(baseCls, className)}
//       placeholder={placeholder}
//       {...props}
//     />
//     {inputVal && }
//   );
// }
