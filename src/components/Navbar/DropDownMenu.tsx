import React, { useMemo } from 'react';
import { clsx } from 'clsx';
import { twClsx } from '../../utils/common';
import { SimpleHandler } from '../../types/common';

interface DropDownMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  items: JSX.Element;
}
export default function DropDownMenu({
  items,
  className,
  ...rest
}: DropDownMenuProps) {
  const baseCls = useMemo(
    () =>
      clsx(
        'flex flex-col absolute overflow-hidden whitespace-nowrap',
        'rounded-lg bg-white bg-opacity-100 shadow-lg transition duration-300 ease-in-out'
      ),
    []
  );

  return (
    <div className={twClsx(baseCls, className)} {...rest}>
      {items}
    </div>
  );
}

export function MenuItemList({
  items,
  handleClick,
  activeKey,
  className = '',
}: {
  items: { [key: string | number]: any };
  handleClick?: SimpleHandler;
  activeKey?: string;
  className?: string;
}) {
  return (
    <>
      {Object.entries(items).map(([key, val]) => (
        <div
          key={key}
          className={twClsx(
            'w-full cursor-pointer px-5 py-2 text-base font-medium hover:bg-slate-100',
            {
              'text-slate-900': activeKey !== key,
              'text-brand-orange-700': activeKey === key,
            },
            className
          )}
          onClick={
            handleClick
              ? (e) => {
                  e.preventDefault();
                  handleClick(key);
                }
              : undefined
          }
        >
          <span className={val?.font ?? 'font-en'}>
            {val?.displayName ?? val}
          </span>
        </div>
      ))}
    </>
  );
}
