import { Link, NavLink } from 'react-router-dom';
import DropDownArrow from '../icons/DropDownArrow';
import ContactButton from './ContactButton';
import LngSelector from './LngSelector';
import clsx from 'clsx';
import { useEffect, useMemo, useRef, useState } from 'react';
import HamMenu from './HamMenu';
import DonateBtn from './DonateBtn';
import DropDownMenu, { MenuItemList } from './DropDownMenu';
import { getHandleClickOutside } from '../../utils/handlers';

interface NavMenuItemProps {
  highlightOnHover: boolean;
  isActive: boolean;
  children: JSX.Element;
  idx: number;
}

type NavMenuLinkProps = Omit<
  NavMenuItemProps,
  'highlightOnHover' | 'children'
> & { to?: string; displayText: string };

function NavMenuItem({
  highlightOnHover = false,
  isActive = false,
  children,
  idx,
}: NavMenuItemProps) {
  const classNameCalc = useMemo(
    () => calculateClassNames(highlightOnHover, isActive),
    [highlightOnHover, isActive]
  );

  return (
    <div
      className={clsx(classNameCalc, {
        'nav-menu-hide': idx === 6 || idx === 7,
      })}
    >
      {children}
    </div>
  );
}

function NavMenuLink({
  to = '/',
  displayText,
  isActive = false,
  idx,
}: NavMenuLinkProps) {
  return (
    <NavMenuItem highlightOnHover={false} isActive={isActive} idx={idx}>
      <Link to={to} className="flex">
        <div className="flex relative items-center space-x-2">
          <span className="font-en">{displayText}</span>
        </div>
      </Link>
    </NavMenuItem>
  );
}

function NavMenuDropDown({
  displayText,
  isActive = false,
  menuItems,
  idx,
}: NavMenuLinkProps & { menuItems?: string[] }) {
  const [showMenu, setShowMenu] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = getHandleClickOutside(dropDownRef, setShowMenu);

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
    <NavMenuItem highlightOnHover={true} isActive={isActive} idx={idx}>
      <div ref={dropDownRef} className="flex relative items-center space-x-2">
        <span className="font-en">{displayText}</span>
        <div
          className="transition-duration-500 pt-0.5"
          onClick={() => setShowMenu((isVisible) => !isVisible && true)}
        >
          <DropDownArrow className="fill-current" width={10} height={6} />
        </div>
        {showMenu && Array.isArray(menuItems) && (
          <DropDownMenu
            items={MenuItemList({
              items: menuItems.reduce((acc, curr) => {
                acc[curr] = curr;
                return acc;
              }, {} as Record<string, string>),
              className:
                'text-sm text-slate-800 hover:bg-brand-orange-100 rounded-lg',
            })}
            className="absolute top-[40px] bg-white bg-opacity-100 px-1.5 py-2 text-slate-800 text-sm lg:-left-5 2xl:-left-6"
          />
        )}
      </div>
    </NavMenuItem>
  );
}

export default function Navbar() {
  const menuDropDownLookup = {
    Home: false,
    'Live Sessions': ['Gita Samagam', 'Vedanta: Basics to Classics'],
    'Video Series': false,
    'AP Books': false,
    'AP Articles': false,
    Invite: ['For a talk', 'For an interview'],
    'In Media': false,
    Careers: false,
    Donate: false,
  };

  return (
    <div className="z-100">
      <div id="main-nav-bar" className="h-12 bg-brand-orange-700">
        <div className="mx-auto h-full max-w-screen-2xl select-none text-white">
          <div className="flex h-full justify-between text-xs">
            <div className="flex items-stretch pl-4 lg:pl-8 text-sm">
              <Link to="/" className="shrink-0 self-center">
                <img
                  className="mr-2 h-8 w-8 rounded-full"
                  src="https://acharyaprashant.org/images/ic_favicon.png"
                  alt="Acharya Prashant Logo"
                />
              </Link>
              <div className="hidden items-stretch justify-center font-medium md:flex">
                {Object.entries(menuDropDownLookup).map(([menuItem, val], i) =>
                  !Array.isArray(val) ? (
                    <NavMenuLink
                      to={'/'}
                      displayText={menuItem}
                      isActive={menuItem === 'Video Series'}
                      key={menuItem}
                      idx={i}
                    />
                  ) : (
                    <NavMenuDropDown
                      displayText={menuItem}
                      isActive={menuItem === 'Video Series'}
                      key={menuItem}
                      idx={i}
                      menuItems={val}
                    />
                  )
                )}
              </div>
            </div>

            <div className="flex h-full content-center items-center justify-center lg:mt-[1px] lg:pr-8">
              <DonateBtn />
              <LngSelector />
              <ContactButton />
              <HamMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// calculation functions
const calculateClassNames = (
  highlightOnHover: boolean,
  is_active: boolean
): string => {
  const baseClassNames =
    'flex whitespace-nowrap text-white/90 cursor-pointer items-center space-x-1 md:px-1.5 lg:px-2.5 2xl:px-4';
  const highlightClassNames =
    ' transition-opacity duration-300 ease-in-out hover:opacity-100 hover:bg-brand-orange-600';

  return highlightOnHover
    ? baseClassNames +
        highlightClassNames +
        (is_active ? ' bg-brand-orange-600' : '')
    : baseClassNames + (is_active ? ' bg-brand-orange-600' : '');
};
