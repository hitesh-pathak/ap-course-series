import { Fragment } from 'react/jsx-runtime';
import clsx from 'clsx';
import { SpanTextEn, SpanTextHi } from '../../components/Typography/common';
import ArrowMenuDivider from '../../components/icons/ArrowMenuDivider';
import { useSelector } from 'react-redux';
import { selectCouseSeries } from '../../api/csSlice';
import { RootState } from '../../store';
import { InvalidDataError } from '../../utils/custom-errors';

function MenuDivider({}) {
  return (
    <div className="mr-1 px-1 text-gray-subtitle">
      <ArrowMenuDivider width={7} height={11} className="fill-current" />
    </div>
  );
}

function MenuItem({
  displayText,
  isActive = false,
}: {
  displayText: string;
  isActive: boolean;
}) {
  return (
    <div
      className={clsx(
        'mr-1 text-sm',
        {
          'cursor-pointer': !isActive,
          'hover:text-brand-orange-600': !isActive,
        },
        { 'font-medium': isActive }
      )}
    >
      {isActive ? (
        <SpanTextHi>{displayText}</SpanTextHi>
      ) : (
        <SpanTextEn>{displayText}</SpanTextEn>
      )}
    </div>
  );
}

export default function CSNav() {
  const csTitle: string = useSelector(
    (state: RootState) => selectCouseSeries(state)?.details?.title || ''
  );
  if (!csTitle) {
    throw new InvalidDataError();
  }

  const menuTexts = ['Home', csTitle];

  return (
    <div className="hidden md:block px-4 pt-4 lg:px-8">
      <div
        className={clsx(
          'flex flex-wrap items-baseline justify-start w-full',
          'text-gray-subtitle'
        )}
      >
        {menuTexts.map((e, i) => {
          const isLast = menuTexts.length - i <= 1;
          return (
            <Fragment key={e}>
              <MenuItem displayText={e} isActive={menuTexts.length - i <= 1} />
              {isLast || <MenuDivider />}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
