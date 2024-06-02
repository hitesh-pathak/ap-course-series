import React, { useMemo } from 'react';
import { clsx } from 'clsx';
import { twClsx } from '../../utils/common';

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
        'rounded-lg bg-white bg-opacity-100 shadow-lg'
      ),
    []
  );

  return (
    <div className={twClsx(baseCls, className)} {...rest}>
      {items}
    </div>
  );
}
