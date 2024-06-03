import { Link } from 'react-router-dom';
import {
  CircleCenterCtn,
  FixedCtnInset,
  VertCtnFullBetween,
  VertFlexCtn,
  VertScrollMenuCtn,
} from '../containers/container';
import UserProfileHead from '../icons/UserProfileHead';
import { SpanTextEn } from '../Typography/common';
import { HrzLineSeparator } from '../common/Separator';
import clsx from 'clsx';
import CloseX from '../icons/CloseX';
import { HTMLAttributes, ReactNode } from 'react';
import { animated, useSpring } from '@react-spring/web';

export default function HamMenuBody({ isVisible }: { isVisible: boolean }) {
  const animate = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0%)' : 'translateX(100%)',
  });

  return (
    <animated.div
      className={clsx('fixed z-[200] bottom-0 right-0 top-0 hidden md:block')}
      style={animate}
    >
      <div className="flex h-full items-start justify-end bg-transparent">
        <CircleCenterCtn
          className={clsx(
            'cursor-pointer h-8 w-8 mr-2 mt-2 bg-white hover-brand-trans-text'
          )}
        >
          <CloseX />
        </CircleCenterCtn>

        <div className="h-full overflow-y-auto bg-white pt-8 md:w-[35vw] lg:w-[25vw]">
          <VertMenu />
        </div>
      </div>
    </animated.div>
  );
}

function VertMenu() {
  const menuEntries = [
    {
      heading: '',
      items: [
        'Gita Samagam',
        'Vedanta: Basics to Classics',
        'AP Books',
        'AP Articles',
        'Video Series',
        'AP Circle',
        'Invite For Talk',
        'Invite For an Interview',
        'Media and Public Interaction',
        'Contact Us',
        'Careers',
        'Donate',
      ],
    },
    {
      heading: 'MORE',
      items: [
        'PrashantAdvait Foundation',
        'Ghar Ghar Upanishad',
        'About Acharya Prashant',
      ],
    },
  ];

  return (
    <VertCtnFullBetween className="justify-start">
      <MenuTopLogin />
      {menuEntries.map((menu, i) => (
        <InnerMenu
          key={i}
          {...{ ...menu, isLast: i >= menuEntries.length - 1 }}
        />
      ))}
    </VertCtnFullBetween>
  );
}

function MenuTopLogin() {
  return (
    <div className="hidden px-6 text-brand-orange-700 hover:text-brand-orange-800 md:block">
      <Link to={'/'} className={'flex items-center'}>
        <UserProfileHead width={36} height={36} />
        <div className="ml-3 text-sm font-semibold">
          <SpanTextEn>Login</SpanTextEn>
        </div>
      </Link>
      <HrzLineSeparator className="mt-4" />
    </div>
  );
}

function InnerMenu({
  heading,
  items,
  isLast = false,
}: {
  heading: string | undefined;
  items: string[];
  isLast?: boolean;
}) {
  return (
    <>
      {heading && <InnerMenuHeading>{heading}</InnerMenuHeading>}
      <InnerMenuCtn>
        {items.map((e, i) => (
          <InnerMenuItem key={i}>{e}</InnerMenuItem>
        ))}
      </InnerMenuCtn>
      <InnerMenuDivider noLine={isLast} />
    </>
  );
}

function InnerMenuCtn({ children }: { children: ReactNode }) {
  return (
    <VertFlexCtn
      className={clsx(
        'my-1 px-2 md:px-3',
        'text-sm font-medium text-gray-subtitle'
      )}
    >
      {children}
    </VertFlexCtn>
  );
}

function InnerMenuHeading({ children }: { children: ReactNode }) {
  return (
    <div
      className={clsx('mx-3 my-1 px-5', 'font-bold text-xs text-gray-subtitle')}
    >
      {children}
    </div>
  );
}

function InnerMenuItem({ children }: { children: ReactNode }) {
  return (
    <div
      className={clsx(
        'mx-3 rounded-md px-2 py-2',
        'hover:text-slate-900 hover:bg-gray-background',
        'cursor-pointer'
      )}
    >
      <Link to={'/'} className="w-full h-full ">
        <SpanTextEn>{children}</SpanTextEn>
      </Link>
    </div>
  );
}

function InnerMenuDivider({ noLine = false }: { noLine?: boolean }) {
  return (
    <div className="mx-6 mx-6 mb-3 mt-5">{!noLine && <HrzLineSeparator />}</div>
  );
}
