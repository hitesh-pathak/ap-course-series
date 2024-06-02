import { RefObject } from 'react';
import { SimpleHandler } from '../types/common';

export const getHandleClickOutside =
  (dropDownRef: RefObject<HTMLDivElement>, showMenu: SimpleHandler) =>
  (event: MouseEvent) => {
    if (
      dropDownRef.current &&
      !dropDownRef.current.contains(event.target as Node)
    ) {
      showMenu(false);
    }
  };
