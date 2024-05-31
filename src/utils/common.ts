import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function twClsx(...args: ClassValue[]): string {
  return twMerge(clsx(args));
}
