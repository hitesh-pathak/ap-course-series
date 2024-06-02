import { Link } from 'react-router-dom';
import {
  CircleCenterCtn,
  FixedCtnInset,
  VertCtnFullBetween,
} from '../containers/container';
import UserProfileHead from '../icons/UserProfileHead';
import { SpanTextEn } from '../Typography/common';
import { HrzLineSeparator } from '../common/Separator';
import clsx from 'clsx';
import CloseX from '../icons/CloseX';
import { HTMLAttributes } from 'react';

export default function HamMenuBody({
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <FixedCtnInset
      className={clsx(
        'z-150 bottom-0 right-0 top-0 hidden md:block md:w-[25vw] lg:w-[35vw]',
        'transition duration-300 ease-in-out'
      )}
      {...rest}
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
    </FixedCtnInset>
  );
}

function VertMenu() {
  return (
    <VertCtnFullBetween>
      <MenuTopLogin />
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
