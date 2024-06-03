import clsx from 'clsx';
import Hamburger from '../icons/Hamburger';
import { SpanTextEn } from '../Typography/common';
import { useEffect, useRef, useState } from 'react';
import HamMenuBody from './HamMenuBody';
import { getHandleClickOutside } from '../../utils/handlers';
import { ModalOverlayFs } from '../containers/container';
import HamMenuBodyMobile from './HamMenuBodyMobile';

export default function HamMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = getHandleClickOutside(dropdownRef, setShowMenu);

  useEffect(() => {
    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu]);

  return (
    <>
      {showMenu && (
        <div className="absolute">
          <ModalOverlayFs />
        </div>
      )}

      <div
        className={clsx(
          'cursor-pointer items-center',
          'mx-2 px-2 py-2 pl-1 md:pl-1 md:pr-4 lg:pl-[11px]',
          ' text-white ',
          'hidden md:inline-flex'
        )}
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <div ref={dropdownRef}>{<HamMenuBody isVisible={showMenu} />}</div>

        <Hamburger width={22} height={16} className="fill-current" />
        <div className="hidden lg:block  pl-2">
          <SpanTextEn>Menu</SpanTextEn>
        </div>
      </div>
      <HamMobile />
    </>
  );
}

function HamMobile() {
  const [showMobMenu, setShowMobMenu] = useState(false);

  return (
    <div
      className={clsx(
        'inline-flex  md:hidden cursor-pointer items-center',
        'mx-2 px-2 py-2 pl-1 md:pl-1 md:pr-4 lg:pl-[11px]',
        ' text-white '
      )}
      onClick={() => setShowMobMenu(!showMobMenu)}
    >
      {showMobMenu && (
        <HamMenuBodyMobile
          isVisible={showMobMenu}
          setShowMobMenu={setShowMobMenu}
        />
      )}
      <Hamburger width={22} height={16} className="fill-current" />
    </div>
  );
}
