import clsx from 'clsx';
import Hamburger from '../icons/Hamburger';
import { SpanTextEn } from '../Typography/common';

export default function HamMenu() {
  return (
    <div
      className={clsx(
        'inline-flex  cursor-pointer items-center',
        'mx-2 px-2 py-2 pl-1 md:pl-1 md:pr-4 lg:pl-[11px]',
        ' text-white '
      )}
    >
      <Hamburger width={22} height={16} className="fill-current" />
      <div className="hidden lg:block  pl-2">
        <SpanTextEn>Menu</SpanTextEn>
      </div>
    </div>
  );
}
