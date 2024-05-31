import clsx from 'clsx';
import { Link } from 'react-router-dom';

export default function BannerCta() {
  return (
    <div className="shrink-0 pl-5 text-sm">
      <Link
        to={'/'}
        className={clsx(
          'flex items-center',
          'h-full',
          'rounded-md border border-gray-200',
          'px-2 py-1 lg:py-0.75',
          'text-white'
        )}
      >
        <span className="font-en">Extend your hand</span>
      </Link>
    </div>
  );
}
