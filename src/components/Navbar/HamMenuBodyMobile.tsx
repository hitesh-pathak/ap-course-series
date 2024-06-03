import { animated, useSpring } from '@react-spring/web';
import clsx from 'clsx';
import {
  StartCtnHrz,
  VertFlexCtn,
  VertScrollMenuCtn,
} from '../containers/container';
import { BtnRound } from '../common/Button';
import { SpanTextEn } from '../Typography/common';
import CloseX from '../icons/CloseX';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import ArrowMenuDivider from '../icons/ArrowMenuDivider';
import { SimpleHandler } from '../../types/common';

export default function HamMenuBodyMobile({
  isVisible,
  setShowMobMenu,
}: {
  isVisible: boolean;
  setShowMobMenu: SimpleHandler;
}) {
  // const animate = useSpring({
  //   opacity: isVisible ? 1 : 0,
  //   // transform: isVisible ? 'translateX(0%)' : 'translateX(100%)',
  // });

  const topMenuList = [
    'Live Sessions',
    'AP Books',
    'AP Articles',
    'Video Series',
    'AP Circle',
    'Invite For Talk',
    'Invite For an Interview',
    'Contact Us',
    'Careers',
  ];

  return (
    <div
      className={clsx('fixed inset-0 z-150 h-full w-full md:hidden')}
      // style={animate}
    >
      <div className="relative h-full overflow-y-scroll bg-brand-700 text-base bg-brand-orange-700">
        <div>
          <TopLoginSect setShowMobMenu={setShowMobMenu} />
        </div>

        <div className="mt-[110px]">
          <VertMenu items={topMenuList} showSel />
        </div>
      </div>
    </div>
  );
}

function TopLoginSect({ setShowMobMenu }: { setShowMobMenu: SimpleHandler }) {
  return (
    <StartCtnHrz
      className={clsx(
        'fixed left-4 right-4 top-0 ',
        'justify-between bg-brand-orange-700',
        'pr-1 pt-7 mb-3'
      )}
    >
      <BtnRound className="border border-white px-4 py-1 text-white font-medium">
        <SpanTextEn>Login</SpanTextEn>
      </BtnRound>
      <div
        className="text-white h-fit shrink-0 -mr-3 p-2 hover:bg-brand-orange-600"
        onClick={() => {
          setShowMobMenu(false);
        }}
      >
        <CloseX className="fill-current" width={13} height={13} />
      </div>
    </StartCtnHrz>
  );
}

function VertMenu({
  items,
  showSel = false,
}: {
  items: string[];
  showSel?: boolean;
}) {
  return (
    <VertFlexCtn className={clsx('font-medium text-white text-[1.375rem]')}>
      {items.map((e, i) => (
        <MenuItem key={e} isSel={showSel && i === 0}>
          {e}
        </MenuItem>
      ))}
    </VertFlexCtn>
  );
}

function MenuItem({
  children,
  isSel = false,
}: {
  children: ReactNode;
  isSel?: boolean;
}) {
  return (
    <div
      className={clsx(
        'rounded-md px-4 py-3',
        'text-left hover:text-slate-900 hover:bg-gray-background',
        'cursor-pointer'
      )}
    >
      <Link to={'/'} className="w-full h-full active:bg-brand-orange-500">
        <div className="flex items-center justify-between">
          <SpanTextEn>{children}</SpanTextEn>
          {isSel && (
            <div className="text-white">
              <ArrowMenuDivider className="fill-current" />
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
