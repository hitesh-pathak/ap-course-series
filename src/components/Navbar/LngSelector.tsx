import LngSelectEn from '../icons/LngSelectEn';
import LngSelectHi from '../icons/LngSelectHi';
import DropDownArrow from '../icons/DropDownArrow';
import DropDownMenu from './DropDownMenu';
import { StringDict, SimpleHandler } from '../../types/common';
import { useState } from 'react';
import { clsx } from 'clsx';

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

function MenuItem({
  handleClick,
  activeKey,
}: {
  handleClick: SimpleHandler;
  activeKey: string;
}) {
  return (
    <>
      {Object.entries(lngs).map(([lngKey, lngVal]) => (
        <div
          key={lngKey}
          className={clsx(
            'w-full cursor-pointer px-5 py-2 text-base font-medium hover:bg-slate-100',
            {
              'text-slate-900': activeKey !== lngKey,
              'text-brand-orange-700': activeKey === lngKey,
            }
          )}
          onClick={(e) => {
            e.preventDefault();
            handleClick(lngKey);
          }}
        >
          <span className={lngVal.font ?? 'font-en'}>{lngVal.displayName}</span>
        </div>
      ))}
    </>
  );
}

export default function LngSelector() {
  const [inputLng, setLng] = useState('en');
  const [showDropDownMenu, setShowDropDownMenu] = useState(false);

  const handleSelect = (lngKey: string) => {
    console.log(lngKey, 'setting!');
    setLng(lngKey);
  };

  const toggleDropDownMenu = (isVisible: boolean) => {
    setShowDropDownMenu(isVisible);
  };

  return (
    <div
      id="navbar-language-selector"
      className="relative inline-flex ml-3 cursor-pointer items-center px-2 md:px-0 md:px-1"
    >
      <div className="relative">
        <div
          className="inline-flex items-center space-x-1 
        py-2 font-medium opacity-90 transition-opacity
        duration-300 ease-in-out hover:opacity-100"
          onClick={() => setShowDropDownMenu(!showDropDownMenu)}
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
            items={MenuItem({ handleClick: handleSelect, activeKey: inputLng })}
            toggleMenu={toggleDropDownMenu}
            className="left-1/2 mt-2 -translate-x-1/2 transform py-1.5"
          />
        )}
      </div>
    </div>
  );
}
