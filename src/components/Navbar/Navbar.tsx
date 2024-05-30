import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import DropDownArrow from '../icons/DropDownArrow';

import { StringDict } from '../../types/common';

interface NavMenuLinkProps {
  to: string;
  displayText: string;
}

function NavMenuItem({ children }: { children: JSX.Element }) {
  console.log(children);
  return (
    <div
      className="flex whitespace-nowrap text-white/90 cursor-pointer items-center space-x-1 
       md:px-1.5 lg:px-2.5 2xl:px-4"
    >
      {children}
    </div>
  );
}

function NavMenuLink({ to = '/', displayText }: NavMenuLinkProps) {
  return (
    <NavMenuItem>
      <Link to={to} className="flex">
        <div className="flex relative items-center space-x-2">
          <span className="font-en">{displayText}</span>
        </div>
      </Link>
    </NavMenuItem>
  );
}

function NavMenuDropDown({ displayText }: { displayText: string }) {
  return (
    <NavMenuItem>
      <div className="flex relative items-center space-x-2">
        <span className="font-en">{displayText}</span>
        <div className="transition-duration-500 pt-0.5">
          <DropDownArrow className="fill-current" width={10} height={6} />
        </div>
      </div>
    </NavMenuItem>
  );
}

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const menuItems = [
    'navbar.home',
    'navbar.live_sess',
    'navbar.video_series',
    'navbar.ap_books',
    'navbar.ap_articles',
    'navbar.invite',
    'navbar.in_media',
    'navbar.careers',
    'navbar.donate',
  ];

  const menuDropDownLookup = ['navbar.live_sess', 'navbar.video_series'].reduce(
    (acc: StringDict, key: string) => {
      acc[key] = true;
      return acc;
    },
    {}
  );

  return (
    <div id="main-nav-bar" className="h-12 bg-brand-orange">
      <div className="mx-auto h-full max-w-screen-2xl select-none text-white">
        <div className="flex h-full justify-between text-xs">
          <div className="flex items-stretch p1-4 lg:p1-8 text-sm">
            <Link to="/" className="shrink-0 self-center">
              <img
                className="mr-2 h-8 w-8 rounded-full"
                src="https://acharyaprashant.org/images/ic_favicon.png"
                alt="Acharya Prashant Logo"
              />
            </Link>
            <div className="hidden items-stretch justify-center font-medium md:flex">
              {menuItems.map((menuItem) =>
                menuDropDownLookup[menuItem] ? (
                  <NavMenuDropDown displayText={t(menuItem)} />
                ) : (
                  <NavMenuLink
                    to={'/'}
                    displayText={t(menuItem)}
                    key={menuItem}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
