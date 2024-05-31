import clsx from 'clsx';
import { ButtonRound } from '../../components/common/Button';
import { SpanTextHi } from '../../components/Typography/common';
import BackArrowLeft from '../../components/icons/BackArrowLeft';
import { useSelector } from 'react-redux';
import { selectCouseSeries } from '../../api/csSlice';
import { RootState } from '../../store';
import { InvalidDataError } from '../../utils/custom-errors';
import { StartCtnHrz } from '../../components/containers/container';
import CSHeroBanner from './CSHeroBanner';

export default function CSHero() {
  const csTitle: string = useSelector(
    (state: RootState) => selectCouseSeries(state)?.details?.title || ''
  );
  if (!csTitle) {
    throw new InvalidDataError();
  }

  return (
    <>
      <CSTitle title={csTitle} />
      <CSHeroBanner />
    </>
  );
}

// function

function BackButton() {
  return (
    <ButtonRound className="lg:hidden -ml-4 p-4 bg-transparent fill-current text-brand-orange-600">
      <BackArrowLeft width={15} height={13} />
    </ButtonRound>
  );
}

function CSTitle({ title }: { title: string }) {
  return (
    <StartCtnHrz className="px-4 lg:px-8 py-2 md:py-4 md:pt-4">
      <>
        <BackButton />
        <div
          className={clsx(
            'text-lg font-semibold text-gray-title md:text-xl lg:text-2xl',
            'lg:py-0'
          )}
        >
          <SpanTextHi>{title}</SpanTextHi>
        </div>
      </>
    </StartCtnHrz>
  );
}
