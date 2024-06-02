import LngSelectEn from '../icons/LngSelectEn';
import LngSelectHi from '../icons/LngSelectHi';
import DropDownArrow from '../icons/DropDownArrow';
import DropDownMenu, { MenuItemList } from './DropDownMenu';
import { StringDict, SimpleHandler } from '../../types/common';
import { useEffect, useRef, useState } from 'react';
import { clsx } from 'clsx';
import { getHandleClickOutside } from '../../utils/handlers';
import { twClsx } from '../../utils/common';

const lngs: StringDict<StringDict<any>> = {
  en: {
    displayName: 'English',
    icon: <LngSelectEn width={28} height={21} className="fill-current" />,
    font: 'font-en',
  },
  hi: {
    displayName: 'हिन्दी',
    icon: <LngSelectHi width={28} height={21} className="fill-current" />,
    font: 'font-hi',
  },
};

export default function LngSelector() {
  const [inputLng, setLng] = useState('en');
  const [showDropDownMenu, setShowDropDownMenu] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (lngKey: string) => {
    setLng(lngKey);
  };

  const handleClickOutside = getHandleClickOutside(
    dropDownRef,
    setShowDropDownMenu
  );

  useEffect(() => {
    if (showDropDownMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropDownMenu]);

  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (
  //       dropDownRef.current &&
  //       !dropDownRef.current.contains(event.target as Node)
  //     ) {
  //       toggleMenu(false);
  //     }
  //   };

  return (
    <div
      id="navbar-language-selector"
      className="relative inline-flex ml-3 cursor-pointer items-center px-2 md:px-1"
    >
      <div ref={dropDownRef} className="relative">
        <div
          className="inline-flex items-center space-x-1 
        py-2 font-medium opacity-90 transition-opacity
        duration-300 ease-in-out hover:opacity-100"
          onClick={() => setShowDropDownMenu((isVisible) => !isVisible && true)}
        >
          {lngs[inputLng]?.icon}
          <div
            className={clsx(
              'pt-0.5 transition duration-500',
              showDropDownMenu && 'rotate-180'
            )}
          >
            <DropDownArrow className="fill-current" width={10} height={6} />
          </div>
        </div>
        {showDropDownMenu && (
          <DropDownMenu
            items={MenuItemList({
              items: lngs,
              handleClick: handleSelect,
              activeKey: inputLng,
            })}
            className="left-1/2 mt-2 -translate-x-1/2 transform py-1.5"
          />
        )}
      </div>
    </div>
  );
}
