import { InputBar } from '../common/InputBar';
import { BtnRound } from '../common/Button';
import { useState } from 'react';
import CloseX from '../icons/CloseX';
import SearchGlass from '../icons/SearchGlass';
import clsx from 'clsx';
import { StringDict } from '../../types/common';

export default function SearchBar({
  styleInput = '',
  styleCancel = '',
  placeholder = '',
  ...rest
}: {
  styleInput?: string;
  styleCancel?: string;
  placeholder?: string;
} & StringDict<any>) {
  const [inputVal, setValue] = useState<string | undefined>('');
  // const placeholder = ' Search for video series';
  return (
    <>
      <InputBar
        type="search"
        placeholder={placeholder}
        className={styleInput}
        value={inputVal}
        onChange={(e) => setValue(e.target.value ?? placeholder)}
        {...rest}
      />
      {inputVal && (
        <div className={styleCancel} onClick={(_e) => setValue('')}>
          <CloseX width={13} height={13} className="fill-current" />
        </div>
      )}
    </>
  );
}

export function SearchBarWithBtn() {
  return (
    <>
      <SearchBar
        styleInput="w-full h-9 text-gray-title caret-brand-orange-600"
        styleCancel="mr-4 cursor-pointer self-center text-slate-600"
        placeholder=" Search for video series"
      />
      <BtnRound
        className={clsx(
          'items-end',
          'py-1 px-2 rounded-r rounded-l-none',
          'bg-brand-orange-200 fill-current text-slate-700'
        )}
      >
        <SearchGlass width={17} height={16} />
      </BtnRound>
    </>
  );
}
