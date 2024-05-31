import clsx from 'clsx';
import { SpanTextEn } from '../../components/Typography/common';
import ArrowMenuDivider from '../../components/icons/ArrowMenuDivider';

function MenuDivider() {
  return (
    <div className="mr-1 px-1 text-gray-subtitle">
      <ArrowMenuDivider width={7} height={11} className="fill-current" />
    </div>
  );
}

function MenuItem({ displayText }: { displayText: string }) {
  return (
    <div className="mr-1 text-sm cursor-pointer hover:text-brand-orange-600">
      <SpanTextEn>{displayText}</SpanTextEn>
    </div>
  );
}

export default function CSNav() {
  return (
    <div className="hidden md:block px-4 pt-4 lg:px-8">
      <div
        className={clsx(
          'flex flex-wrap items-baseline justify-start w-full',
          'text-gray-subtitle'
        )}
      ></div>
    </div>
  );
}
