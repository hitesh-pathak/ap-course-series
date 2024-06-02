import clsx from 'clsx';
import SectionLogo from '../SectionLogo/SectionLogo';
import SearchSect from './SearchSect';
import { BackArrowButton, BtnRndTransition } from '../common/Button';
import { SpanTextEn } from '../Typography/common';
import SearchGlass from '../icons/SearchGlass';
import { InputBar } from '../common/InputBar';
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import { SimpleHandler } from '../../types/common';

export default function SecondNavBar() {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <div
      id="inner-nav-bar"
      className={clsx('sticky top-0 z-second-nav-bar', 'bg-white shadow')}
    >
      <div className="mx-auto max-w-screen-2xl select-none">
        <div className="h-12">
          <div
            className={clsx('flex h-full w-full items-center', {
              'justify-between': !showMobileSearch,
              'pl-1.5 pr-4': showMobileSearch === true,
            })}
          >
            {showMobileSearch === true ? (
              <LeftNavSectMobile {...{ setShowMobileSearch }} />
            ) : (
              <>
                <LeftNavSect />
                <RightNavSect {...{ setShowMobileSearch }} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftNavSectMobile({
  setShowMobileSearch,
}: {
  setShowMobileSearch: SimpleHandler;
}) {
  return (
    <div className="w-full inline-flex items-center py-2 text-gray-subtitle">
      <BackArrowButton
        className="px-2.5 py-2.5"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          setShowMobileSearch((show: boolean) => !show);
        }}
      />
      <div className="-ml-2.5 flex-grow">
        <form>
          <SearchBar
            placeholder=""
            styleInput="bg-transparent caret-brand-600"
            styleCancel="cursor-pointer"
            autoFocus={true}
          />
        </form>
      </div>
    </div>
  );
}

function LeftNavSect() {
  return (
    <div
      className={clsx(
        'flex items-center justify-center',
        'pl-4 lg:pl-8',
        'cursor-pointer'
      )}
    >
      <SectionLogo>
        <img
          className="h-6 object-contain"
          src="https://acharyaprashant.org/images/ic_videoseries.png"
          alt="video series home"
        />
      </SectionLogo>

      <SearchSect />
    </div>
  );
}

function RightNavSect({
  setShowMobileSearch,
}: {
  setShowMobileSearch: SimpleHandler;
}) {
  return (
    <div
      className={clsx(
        'flex h-10 content-center items-center justify-center',
        'space-x-4 pr-4 lg:pr-12'
      )}
    >
      <div
        className="cursor-pointer text-slate-900 md:hidden"
        onClick={() =>
          setShowMobileSearch((showSearch: boolean) => !showSearch)
        }
      >
        <SearchGlass width={17} height={16} />
      </div>
      <div className="whitespace-nowrap py-4 text-sm">
        <BtnRndTransition
          className={clsx(
            'bg-brand-orange-600 hover:bg-brand-orange-700',
            'border-brand-orange-600 hover:border-brand-orange-700',
            'text-[#f1f5f9] btn-sm btn-solid',
            'px-2 py-0'
          )}
        >
          <SpanTextEn>Login</SpanTextEn>
        </BtnRndTransition>
      </div>
    </div>
  );
}
