import clsx from 'clsx';
import SectionLogo from '../SectionLogo/SectionLogo';
import SearchSect from './SearchSect';
import { BtnRndTransition } from '../common/Button';
import { SpanTextEn } from '../Typography/common';

export default function SecondNavBar() {
  return (
    <div
      id="inner-nav-bar"
      className={clsx('sticky top-0 z-second-nav-bar', 'bg-white shadow')}
    >
      <div className="mx-auto max-w-screen-2xl select-none">
        {/* <div className="h-12"> */}
        <div className="flex h-12 w-full items-center justify-between">
          <LeftNavSect />
          <RightNavSect />
        </div>
        {/* </div> */}
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

function RightNavSect() {
  return (
    <div
      className={clsx(
        'flex h-10 content-center items-center justify-center',
        'space-x-4 pr-4 lg:pr-12'
      )}
    >
      <div className="whitespace-nowrap py-4 text-sm">
        <BtnRndTransition
          className={clsx(
            'bg-brand-orange-600 hover:bg-brand-orange-700',
            'border-brand-orange-600 hover:border-brand-orange-700',
            'text-[#f1f5f9] btn-sm btn-solid',
            'px-2 py-0'
          )}
        >
          <SpanTextEn>My Video Series</SpanTextEn>
        </BtnRndTransition>
      </div>
    </div>
  );
}
