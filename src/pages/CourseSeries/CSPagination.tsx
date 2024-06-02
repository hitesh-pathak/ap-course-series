import clsx from 'clsx';
import { SpanTextEn } from '../../components/Typography/common';
import { BtnFlexCenter } from '../../components/common/Button';
import { SimpleHandler } from '../../types/common';

export default function CSPagination({
  onPage,
  setOnPage,
  numPages,
}: {
  onPage: number;
  setOnPage: SimpleHandler;
  numPages: number;
}) {
  const className = clsx(
    'px-6 py-1.5',
    'text-sm md:text-base font-medium text-gray-500 hover:text-brand-orange-700',
    'bg-white border border-gray-500 hover:border-brand-orange-600 hover:bg-orange-100',
    'disabled:text-gray-400 disabled:border-gray-400 disabled:cursor-text disabled:bg-white'
  );
  return (
    <div className="flex space-x-2 md:space-x-12 lg:space-x-20 2xl:space-x-32 items-center justify-center mt-1 mb-2 md:mt-2 md:mb-4">
      <BtnFlexCenter
        className={className}
        disabled={onPage <= 1}
        onClick={() => {
          setOnPage((onPage: number) => onPage - 1);
        }}
      >
        <SpanTextEn>Prev</SpanTextEn>
      </BtnFlexCenter>

      <div className={clsx('text-sm font-medium text-gray-subtitle mx-5')}>
        <SpanTextEn>
          Page {onPage} of {numPages}
        </SpanTextEn>
      </div>

      <BtnFlexCenter
        className={className}
        disabled={onPage >= numPages}
        onClick={() => {
          setOnPage((onPage: number) => onPage + 1);
        }}
      >
        <SpanTextEn>Next</SpanTextEn>
      </BtnFlexCenter>
    </div>
  );
}
