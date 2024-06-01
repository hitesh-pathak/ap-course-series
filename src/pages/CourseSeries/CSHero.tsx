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
import { StringDict } from '../../types/common';
import { useMemo } from 'react';

interface CSThumbNail {
  domain: string;
  basePath: string;
  qualities: number[];
  key: string;
}

export interface CSDetails {
  thumbnail: CSThumbNail;
  title: string;
  subtitle: string;
  description: string;
}

export default function CSHero() {
  const csDetails: CSDetails = useSelector(
    (state: RootState) => selectCouseSeries(state)?.details || ''
  );
  if (
    !csDetails ||
    !csDetails.title ||
    !csDetails.subtitle ||
    !csDetails.description ||
    !csDetails.thumbnail
  ) {
    throw new InvalidDataError();
  }

  const thumbSrc = useMemo(
    () => calcThumbnailSrc(csDetails.thumbnail),
    [csDetails.thumbnail]
  );

  return (
    <>
      <CSTitle title={csDetails.title} />
      <CSHeroBanner
        thumbnailSrc={thumbSrc}
        csSubTitle={csDetails.subtitle}
        csDesc={csDetails.description}
      />
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

function calcThumbnailSrc({
  domain,
  basePath,
  qualities,
  key,
}: CSThumbNail): string {
  const relPath = [basePath, qualities[0], key]
    .map((e) => String(e).replace(/^\/+|\/+$/g, ''))
    .join('/');
  return new URL(relPath, domain).href;
}
