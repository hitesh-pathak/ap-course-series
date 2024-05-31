import clsx from 'clsx';
import Hamburger from '../icons/Hamburger';

export default function HamMenu() {
  return (
    <div
      className={clsx(
        'inline-flex  cursor-pointer items-center',
        'mx-2 px-2 py-2 pl-1 md:pl-1 md:pr-4 laptop:pl-[11px]',
        ' text-white '
      )}
    >
      <Hamburger width={22} height={16} className="fill-current" />
      <div className="hidden laptop:block  pl-2">
        <span className="font-en">Menu</span>
      </div>
    </div>
  );
}
