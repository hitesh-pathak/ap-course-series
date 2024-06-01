import clsx from 'clsx';
import { SpanTextEn, TextSubtitleCtn } from '../Typography/common';
import DropDownArrow from '../icons/DropDownArrow';

export default function SearchCatButton() {
  return (
    <button
      className={clsx(
        'flex flex-row items-center',
        'rounded-l border-r pl-2',
        'text-xs font-normal whitespace-nowrap'
      )}
    >
      <TextSubtitleCtn className="text-xs font-medium">
        <SpanTextEn>All</SpanTextEn>
      </TextSubtitleCtn>
      <div className="px-3 text-slate-500">
        <DropDownArrow width={9} height={6} className="fill-current" />
      </div>
    </button>
  );
}
