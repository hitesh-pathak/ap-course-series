import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function twClsx(...args: ClassValue[]): string {
  return twMerge(clsx(args));
}

export function capitalizeFirstLetter(val: string): string {
  if (!val) return '';
  return val.charAt(0).toUpperCase() + val.slice(1);
}
