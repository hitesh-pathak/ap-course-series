import clsx from 'clsx';
import {
  FixedCtnInset,
  StartCtnHrz,
} from '../../components/containers/container';
import {
  SpanTextEn,
  TextSubtitleCtn,
  TextTitleCtn,
} from '../../components/Typography/common';
import { BtnRndFull } from '../../components/common/Button';
import DownloadAppCircle from '../../components/social-media/icons/DownloadAppCircle';

export default function AppLinkBanner() {
  return (
    <FixedCtnInset
      className={clsx(
        'lg:hidden z-50 bottom-0 left-0 right-0',
        'bg-brand-orange-100 px-4 py-[10px]'
      )}
    >
      <StartCtnHrz className="justify-between">
        <div className="pr-0.5 font-medium text-slate-700">
          <SpanTextEn>Read 130+ eBooks in App</SpanTextEn>
        </div>
        <div className="text-xs font-medium md:text-sm">
          <BtnRndFull
            className={clsx(
              'flex items-center justify-center h-full',
              'bg-brand-orange-600 hover:bg-brand-orange-700 shadow-none',
              'text-white whitespace-nowrap',
              'btn-lg'
            )}
          >
            <>
              <div className="mr-1.5 h-[14px] w-[14px] text-white md:h-4 md:w-4">
                <DownloadAppCircle />
              </div>
              <SpanTextEn>Download App</SpanTextEn>
            </>
          </BtnRndFull>
        </div>
      </StartCtnHrz>
    </FixedCtnInset>
  );
}
