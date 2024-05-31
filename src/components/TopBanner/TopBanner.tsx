import clsx from 'clsx';
import BannerContent from './BannerContent';
import BannerCta from './BannerCta';

export default function TopBanner() {
  return (
    <div
      className={clsx(
        'z-75 flex w-full items-center justify-between lg:justify-center',
        'px-4 py-2  lg:py-3.5',
        ' bg-slate-800'
      )}
    >
      <BannerContent />
      <BannerCta />
    </div>
  );
}
