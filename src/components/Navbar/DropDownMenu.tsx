import React, { useEffect, useMemo, useRef } from 'react';
import { clsx } from 'clsx';

interface DropDownMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  items: JSX.Element;
  toggleMenu: (isVisible: boolean) => void;
}
export default function DropDownMenu({
  items,
  className,
  toggleMenu,
  ...rest
}: DropDownMenuProps) {
  const dropDownRef = useRef<HTMLDivElement>(null);
  const baseCls = useMemo(
    () =>
      clsx(
        'flex flex-col absolute overflow-hidden whitespace-nowrap',
        'rounded-lg bg-white bg-opacity-100 shadow-lg'
      ),
    []
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        toggleMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropDownRef} className={clsx(baseCls, className)} {...rest}>
      {items}
    </div>
  );
}
