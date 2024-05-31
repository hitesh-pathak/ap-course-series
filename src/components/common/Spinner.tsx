import clsx from 'clsx';
import { SpanTextEn } from '../Typography/common';

export function Spinner() {
  return <div id="spinner-default" className="spinner-base"></div>;
}

export function SpinnerFullScreen() {
  return (
    <div
      className={clsx(
        'fixed z-40 inset-0',
        'flex flex-col items-center justify-center',
        'bg-white',
        'space-y-2'
      )}
    >
      <Spinner />
      <SpanTextEn>Loading...</SpanTextEn>
    </div>
  );
}
