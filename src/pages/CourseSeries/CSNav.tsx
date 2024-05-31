import clsx from 'clsx';
import { SpanTextEn } from '../../components/Typography/common';
import ArrowMenuDivider from '../../components/icons/ArrowMenuDivider';
import { useSelector } from 'react-redux';
import { selectCouseSeries } from '../../api/csSlice';
import { RootState } from '../../store';

function MenuDivider() {
  return (
    <div className="mr-1 px-1 text-gray-subtitle">
      <ArrowMenuDivider width={7} height={11} className="fill-current" />
    </div>
  );
}

function MenuItem({
  displayText,
}: {
  key: string | number;
  displayText: string;
}) {
  return (
    <div className="mr-1 text-sm cursor-pointer hover:text-brand-orange-600">
      <SpanTextEn>{displayText}</SpanTextEn>
    </div>
  );
}

export default function CSNav() {
  const csTitle: string = useSelector(
    (state: RootState) => selectCouseSeries(state)?.details?.title || ''
  );

  const menuTexts = ['Home', csTitle];

  return (
    <div className="hidden md:block px-4 pt-4 lg:px-8">
      <div
        className={clsx(
          'flex flex-wrap items-baseline justify-start w-full',
          'text-gray-subtitle'
        )}
      >
        {menuTexts.map((e) => (
          <key= {e}>
            <MenuItem displayText={e} />
            <MenuDivider />
          </>
        ))}
      </div>
    </div>
  );
}
