import clsx from 'clsx';
import { SpanTextEn, TextSubtitleCtn } from '../Typography/common';
import DropDownArrow from '../icons/DropDownArrow';
import { useEffect, useRef, useState } from 'react';
import SearchDropDown from './SearchDropDown';
import { ModalOverlayFs } from '../containers/container';

export default function SearchCatButton() {
  const [showDropDown, setShowDropDown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setShowDropDown(false);
    }
  };

  useEffect(() => {
    if (showDropDown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropDown]);

  return (
    <>
      <button
        className={clsx(
          'flex flex-row items-center',
          'rounded-l border-r pl-2',
          'text-xs font-normal whitespace-nowrap'
        )}
        onClick={(_e) => setShowDropDown(!showDropDown)}
      >
        <TextSubtitleCtn className="text-xs font-medium">
          <SpanTextEn>All</SpanTextEn>
        </TextSubtitleCtn>
        <div className="px-3 text-slate-500">
          <DropDownArrow width={9} height={6} className="fill-current" />
        </div>
      </button>
      {showDropDown && (
        <>
          <ModalOverlayFs />
          <div
            className={clsx(
              'absolute top-full z-10 mt-2',
              'text-base text-gray-subtitle'
            )}
            ref={dropdownRef}
          >
            <SearchDropDown />
          </div>
        </>
      )}
    </>
  );
}
