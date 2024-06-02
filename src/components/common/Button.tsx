import { AnyFuncT, SimpleHandler } from '../../types/common';
import { twClsx } from '../../utils/common';
import BackArrowLeft from '../icons/BackArrowLeft';

interface DefaultBtnProps {
  children: JSX.Element;
  onClick?: AnyFuncT;
  className?: string;
}

export function BtnRound({
  children,
  className = '',
  ...rest
}: DefaultBtnProps) {
  return (
    <button
      className={twClsx(
        'rounded-md cursor-pointer text-center text-slate-700 px-2 py-1',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export function BtnRndTransition({
  children,
  className = '',
  ...rest
}: DefaultBtnProps) {
  return (
    <BtnRound
      className={twClsx('transition-colors duration-150', className)}
      {...rest}
    >
      {children}
    </BtnRound>
  );
}

export function BtnRndTransparent({
  children,
  className = '',
  ...rest
}: DefaultBtnProps) {
  return (
    <BtnRound className={twClsx('bg-transparent', className)} {...rest}>
      {children}
    </BtnRound>
  );
}

export function BackArrowButton({
  className = '',
  ...rest
}: Omit<DefaultBtnProps, 'children'>) {
  return (
    <button
      className={twClsx(
        'cursor-pointer bg-transparent text-gray-subtitle',
        className
      )}
      {...rest}
    >
      <BackArrowLeft width={15} height={13} />
    </button>
  );
}

export function BtnRndFull({
  children,
  className = '',
  ...rest
}: DefaultBtnProps) {
  return (
    <button
      className={twClsx('cursor-pointer items-center rounded-full', className)}
    >
      {children}
    </button>
  );
}
