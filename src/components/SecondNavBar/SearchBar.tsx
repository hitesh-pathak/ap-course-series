import { InputBar } from '../common/InputBar';
import { ButtonRound } from '../common/Button';
import { useState } from 'react';
import CloseX from '../icons/CloseX';
import SearchGlass from '../icons/SearchGlass';
import clsx from 'clsx';

export default function SearchBar() {
  const [inputVal, setValue] = useState<string | undefined>('');
  const placeholder = ' Search for video series';

  return (
    <>
      <InputBar
        type="search"
        placeholder={placeholder}
        className="w-full h-9 text-gray-title caret-brand-orange-600"
        value={inputVal}
        onChange={(e) => setValue(e.target.value ?? placeholder)}
      />
      {inputVal && (
        <div
          className="mr-4 cursor-pointer self-center text-slate-600"
          onClick={(_e) => setValue('')}
        >
          <CloseX width={13} height={13} className="fill-current" />
        </div>
      )}
      <ButtonRound
        className={clsx(
          'items-end',
          'py-1 px-2 rounded-r rounded-l-none',
          'bg-brand-orange-200 fill-current text-slate-700'
        )}
      >
        <SearchGlass width={17} height={16} />
      </ButtonRound>
    </>
  );
}
