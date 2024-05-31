import clsx from 'clsx';

function BannerIcon() {
  return (
    <div
      className={clsx(
        'h-4 w-4 shrink-0 ',
        'mr-2 mt-0.5 lg:mt-0',
        'rounded-full border border-white',
        'bg-red-600'
      )}
    ></div>
  );
}

export default function BannerContent() {
  return (
    <div className="flex lg:items-center">
      <BannerIcon />
      <div className="text-sm lg:text-lg text-white ">
        <span className="font-en">
          Acharya Prashant is dedicated to building a brighter future for you
        </span>
      </div>
    </div>
  );
}
2;
