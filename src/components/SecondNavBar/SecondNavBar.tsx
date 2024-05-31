import clsx from 'clsx';
import SectionLogo from '../SectionLogo/SectionLogo';
import SearchSect from './SearchSect';
import { ButtonRound } from '../common/Button';
import { SpanTextEn } from '../Typography/common';

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
        <ButtonRound
          className={clsx(
            'rounded-md text-center',
            'bg-brand-orange-600 hover:bg-brand-orange-700',
            'text-[#f1f5f9] leading-8 lg:leading-7',
            'px-2 py-0',
            'transition duration-150'
          )}
        >
          <SpanTextEn>My Video Series</SpanTextEn>
        </ButtonRound>
      </div>
    </div>
  );
}

export default function SecondNavBar() {
  return (
    <div
      id="inner-nav-bar"
      className={clsx('sticky top-0 z-second-nav-bar', 'bg-white shadow')}
    >
      <div className="mx-auto max-w-screen-2xl select-none">
        <div className="h-12">
          <div className="flex h-full w-full items-center justify-between">
            <LeftNavSect />
            <RightNavSect />
            {/* put elements here*/}
          </div>
        </div>
      </div>
    </div>
  );
}
